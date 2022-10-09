export const combineContexts = (...contexts: any[]) => {
  return contexts.reduce(
    (AccumulatedContexts, CurrentContext) => {
      // @ts-ignore
      return ({ children }): JSX.Element => {
        return (
          <AccumulatedContexts>
            <CurrentContext>{children}</CurrentContext>
          </AccumulatedContexts>
        );
      };
    },
    // @ts-ignore
    ({ children }) => <>{children}</>,
  );
};