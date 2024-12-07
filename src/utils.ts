export function leftPad(source: string, length: number, pad: string) {
  return (
    [...Array(length - source.length).keys()].map(() => pad).join("") + source
  );
}
