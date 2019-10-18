class Intersection {
  public static observer: IntersectionObserver;
  public static listeners: Map<
    Element,
    { callback: (isIntersecting: boolean, isInitialLoad: boolean) => any; isInitialLoad: boolean }
  > = new Map();
}

export const addIntersectionObserver = (callback, element) => {
  if (Intersection.listeners.size === 0) {
    Intersection.observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          const target = entry.target;
          const observer = Intersection.listeners.get(target);
          if (observer) {
            observer.callback(entry.isIntersecting || !!entry.intersectionRatio, observer.isInitialLoad);
            observer.isInitialLoad = false;
          }
        },
        { root: null },
      );
    });
  }
  if (!hasIntersectionObserver(element)) {
    Intersection.listeners.set(element, { callback, isInitialLoad: true });
    Intersection.observer.observe(element);
  }
};

const hasIntersectionObserver = (element) => {
  return Intersection.listeners.has(element);
};

export const removeIntersectionObserver = (element) => {
  Intersection.observer.unobserve(element);
  Intersection.listeners.delete(element);
};
