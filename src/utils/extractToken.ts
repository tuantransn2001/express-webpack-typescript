export const handleExtractToken = (
  tokens: string | null | false
): { tokenType?: string; accessToken?: string } => {
  if (!tokens) return {};

  const [tokenType, accessToken] = tokens.split(" ");

  return {
    tokenType,
    accessToken,
  };
};
