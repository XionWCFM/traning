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

export type LogTypeCreator<
  Feature extends string,
  Page extends string,
  At extends string,
  Target extends string,
  Action extends string,
  AnotherObj extends Record<string, any> & { type: string },
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
