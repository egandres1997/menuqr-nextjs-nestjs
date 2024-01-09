export type SafelyRunInBrowser<ClientReturnType, ServerReturnType> = {
  client?: () => ClientReturnType;
  server?: () => ServerReturnType;
};

const safelyRunningContext = <ClientReturnType, ServerReturnType>({
  client,
  server,
}: SafelyRunInBrowser<ClientReturnType, ServerReturnType>) => {
  if (typeof window !== 'undefined') {
    return client?.();
  }
  return server?.();
};

export default safelyRunningContext;
