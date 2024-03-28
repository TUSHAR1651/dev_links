export const generateBackgroundClass = (
  background: string,
  backgroundImage?: string
) => {
  if (backgroundImage) {
    return `bg-${background} bg-cover bg-center`;
  }
  return `bg-[${background}]`;
};
