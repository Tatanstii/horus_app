export const mapResponseToDTO = <T, U>(responseDTO: U, properties: Record<string, keyof T>): T => {
  const mappedDTO: Partial<T> = {};

  for (const key in responseDTO) {
    if (properties && key in properties) {
      mappedDTO[properties[key] as keyof T] = responseDTO[key] as unknown as T[keyof T];
    } else {
      mappedDTO[key as unknown as keyof T] = responseDTO[key] as unknown as T[keyof T];
    }
  }
  return mappedDTO as T;
};
