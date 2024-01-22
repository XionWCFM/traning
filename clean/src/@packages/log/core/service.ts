export class LoggerService<
  Feature extends string,
  Page extends string,
  At extends string,
  Target extends string,
  Action extends string,
  Glue extends string = '_',
> {
  glue: Glue;
  constructor(config?: {
    defaultOptions?: {
      glue?: Glue;
    };
  }) {
    this.glue = config?.defaultOptions?.glue ?? ('_' as Glue);
  }

  convertEventNameTupleToString(
    tuple: [Feature, Target, Action] | readonly [Feature, Target, Action],
  ) {
    return tuple.join(
      this.glue,
    ) as `${Feature}${Glue}${Target}${Glue}${Action}`;
  }

  convertEventPathTupleToString(tuple: [Feature, Page, At, Target]) {
    return tuple.join(
      this.glue,
    ) as `${Feature}${Glue}${Page}${Glue}${At}${Glue}${Target}`;
  }

  convertEventNameStringToTuple() {}
}

const hi = new LoggerService<'dsa', 'dsa', 'dsa', 'dsa', 'dsa'>();
