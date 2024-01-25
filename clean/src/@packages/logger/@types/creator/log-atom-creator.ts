export type LogAtomCreator<
  Feature extends string,
  Page extends string,
  At extends string,
  Target extends string,
  Action extends string,
  Glue extends string = '_',
> = {
  feature: Feature;
  page: Page;
  at: At;
  target: Target;
  action: Action;
  eventName: `${Feature}${Glue}${Target}${Glue}${Action}`;
  eventNameTuple: readonly [Feature, Target, Action];
  eventPath: `${Feature}${Glue}${Page}${Glue}${At}${Glue}${Target}`;
  eventPathTuple: readonly [Feature, Page, At, Target];
  props: { eventName: readonly [Feature, Target, Action] };
};

export type LogEventCreator<T extends Record<string, any>> = T & {
  type: string;
  eventName: string;
  eventPath: string;
};
