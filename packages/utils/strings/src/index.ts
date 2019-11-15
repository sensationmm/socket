export const camelize = (content: string) =>
  content
    .toLowerCase()
    .replace(/\s\W(.)|\s(.)/gi, (chr) => chr.toUpperCase().trim())
    .replace(/\W/gi, '');
