export function leftPad(source: string, length: number, pad: string) {
  return (
    [...Array(length - source.length).keys()].map(() => pad).join("") + source
  );
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
