
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ScamReport
 * 
 */
export type ScamReport = $Result.DefaultSelection<Prisma.$ScamReportPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model WikiPage
 * 
 */
export type WikiPage = $Result.DefaultSelection<Prisma.$WikiPagePayload>
/**
 * Model SearchCache
 * 
 */
export type SearchCache = $Result.DefaultSelection<Prisma.$SearchCachePayload>
/**
 * Model AIScamReport
 * 
 */
export type AIScamReport = $Result.DefaultSelection<Prisma.$AIScamReportPayload>
/**
 * Model ScamType
 * 
 */
export type ScamType = $Result.DefaultSelection<Prisma.$ScamTypePayload>
/**
 * Model Flag
 * 
 */
export type Flag = $Result.DefaultSelection<Prisma.$FlagPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model OutcomeType
 * 
 */
export type OutcomeType = $Result.DefaultSelection<Prisma.$OutcomeTypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ScamReports
 * const scamReports = await prisma.scamReport.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ScamReports
   * const scamReports = await prisma.scamReport.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.scamReport`: Exposes CRUD operations for the **ScamReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScamReports
    * const scamReports = await prisma.scamReport.findMany()
    * ```
    */
  get scamReport(): Prisma.ScamReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wikiPage`: Exposes CRUD operations for the **WikiPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WikiPages
    * const wikiPages = await prisma.wikiPage.findMany()
    * ```
    */
  get wikiPage(): Prisma.WikiPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchCache`: Exposes CRUD operations for the **SearchCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchCaches
    * const searchCaches = await prisma.searchCache.findMany()
    * ```
    */
  get searchCache(): Prisma.SearchCacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIScamReport`: Exposes CRUD operations for the **AIScamReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIScamReports
    * const aIScamReports = await prisma.aIScamReport.findMany()
    * ```
    */
  get aIScamReport(): Prisma.AIScamReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scamType`: Exposes CRUD operations for the **ScamType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScamTypes
    * const scamTypes = await prisma.scamType.findMany()
    * ```
    */
  get scamType(): Prisma.ScamTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flag`: Exposes CRUD operations for the **Flag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flags
    * const flags = await prisma.flag.findMany()
    * ```
    */
  get flag(): Prisma.FlagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outcomeType`: Exposes CRUD operations for the **OutcomeType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutcomeTypes
    * const outcomeTypes = await prisma.outcomeType.findMany()
    * ```
    */
  get outcomeType(): Prisma.OutcomeTypeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ScamReport: 'ScamReport',
    Comment: 'Comment',
    Vote: 'Vote',
    WikiPage: 'WikiPage',
    SearchCache: 'SearchCache',
    AIScamReport: 'AIScamReport',
    ScamType: 'ScamType',
    Flag: 'Flag',
    User: 'User',
    Notification: 'Notification',
    OutcomeType: 'OutcomeType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "scamReport" | "comment" | "vote" | "wikiPage" | "searchCache" | "aIScamReport" | "scamType" | "flag" | "user" | "notification" | "outcomeType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ScamReport: {
        payload: Prisma.$ScamReportPayload<ExtArgs>
        fields: Prisma.ScamReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScamReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScamReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload>
          }
          findFirst: {
            args: Prisma.ScamReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScamReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload>
          }
          findMany: {
            args: Prisma.ScamReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload>[]
          }
          create: {
            args: Prisma.ScamReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload>
          }
          createMany: {
            args: Prisma.ScamReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScamReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload>[]
          }
          delete: {
            args: Prisma.ScamReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload>
          }
          update: {
            args: Prisma.ScamReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload>
          }
          deleteMany: {
            args: Prisma.ScamReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScamReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScamReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload>[]
          }
          upsert: {
            args: Prisma.ScamReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamReportPayload>
          }
          aggregate: {
            args: Prisma.ScamReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScamReport>
          }
          groupBy: {
            args: Prisma.ScamReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScamReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScamReportCountArgs<ExtArgs>
            result: $Utils.Optional<ScamReportCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      WikiPage: {
        payload: Prisma.$WikiPagePayload<ExtArgs>
        fields: Prisma.WikiPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WikiPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WikiPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload>
          }
          findFirst: {
            args: Prisma.WikiPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WikiPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload>
          }
          findMany: {
            args: Prisma.WikiPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload>[]
          }
          create: {
            args: Prisma.WikiPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload>
          }
          createMany: {
            args: Prisma.WikiPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WikiPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload>[]
          }
          delete: {
            args: Prisma.WikiPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload>
          }
          update: {
            args: Prisma.WikiPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload>
          }
          deleteMany: {
            args: Prisma.WikiPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WikiPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WikiPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload>[]
          }
          upsert: {
            args: Prisma.WikiPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WikiPagePayload>
          }
          aggregate: {
            args: Prisma.WikiPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWikiPage>
          }
          groupBy: {
            args: Prisma.WikiPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<WikiPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.WikiPageCountArgs<ExtArgs>
            result: $Utils.Optional<WikiPageCountAggregateOutputType> | number
          }
        }
      }
      SearchCache: {
        payload: Prisma.$SearchCachePayload<ExtArgs>
        fields: Prisma.SearchCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          findFirst: {
            args: Prisma.SearchCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          findMany: {
            args: Prisma.SearchCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>[]
          }
          create: {
            args: Prisma.SearchCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          createMany: {
            args: Prisma.SearchCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>[]
          }
          delete: {
            args: Prisma.SearchCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          update: {
            args: Prisma.SearchCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          deleteMany: {
            args: Prisma.SearchCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>[]
          }
          upsert: {
            args: Prisma.SearchCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          aggregate: {
            args: Prisma.SearchCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchCache>
          }
          groupBy: {
            args: Prisma.SearchCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchCacheCountArgs<ExtArgs>
            result: $Utils.Optional<SearchCacheCountAggregateOutputType> | number
          }
        }
      }
      AIScamReport: {
        payload: Prisma.$AIScamReportPayload<ExtArgs>
        fields: Prisma.AIScamReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIScamReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIScamReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload>
          }
          findFirst: {
            args: Prisma.AIScamReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIScamReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload>
          }
          findMany: {
            args: Prisma.AIScamReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload>[]
          }
          create: {
            args: Prisma.AIScamReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload>
          }
          createMany: {
            args: Prisma.AIScamReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIScamReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload>[]
          }
          delete: {
            args: Prisma.AIScamReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload>
          }
          update: {
            args: Prisma.AIScamReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload>
          }
          deleteMany: {
            args: Prisma.AIScamReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIScamReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIScamReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload>[]
          }
          upsert: {
            args: Prisma.AIScamReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIScamReportPayload>
          }
          aggregate: {
            args: Prisma.AIScamReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIScamReport>
          }
          groupBy: {
            args: Prisma.AIScamReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIScamReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIScamReportCountArgs<ExtArgs>
            result: $Utils.Optional<AIScamReportCountAggregateOutputType> | number
          }
        }
      }
      ScamType: {
        payload: Prisma.$ScamTypePayload<ExtArgs>
        fields: Prisma.ScamTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScamTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScamTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload>
          }
          findFirst: {
            args: Prisma.ScamTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScamTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload>
          }
          findMany: {
            args: Prisma.ScamTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload>[]
          }
          create: {
            args: Prisma.ScamTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload>
          }
          createMany: {
            args: Prisma.ScamTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScamTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload>[]
          }
          delete: {
            args: Prisma.ScamTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload>
          }
          update: {
            args: Prisma.ScamTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload>
          }
          deleteMany: {
            args: Prisma.ScamTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScamTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScamTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload>[]
          }
          upsert: {
            args: Prisma.ScamTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScamTypePayload>
          }
          aggregate: {
            args: Prisma.ScamTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScamType>
          }
          groupBy: {
            args: Prisma.ScamTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScamTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScamTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ScamTypeCountAggregateOutputType> | number
          }
        }
      }
      Flag: {
        payload: Prisma.$FlagPayload<ExtArgs>
        fields: Prisma.FlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findFirst: {
            args: Prisma.FlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findMany: {
            args: Prisma.FlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          create: {
            args: Prisma.FlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          createMany: {
            args: Prisma.FlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          delete: {
            args: Prisma.FlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          update: {
            args: Prisma.FlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          deleteMany: {
            args: Prisma.FlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          upsert: {
            args: Prisma.FlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          aggregate: {
            args: Prisma.FlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlag>
          }
          groupBy: {
            args: Prisma.FlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlagCountArgs<ExtArgs>
            result: $Utils.Optional<FlagCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      OutcomeType: {
        payload: Prisma.$OutcomeTypePayload<ExtArgs>
        fields: Prisma.OutcomeTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutcomeTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutcomeTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload>
          }
          findFirst: {
            args: Prisma.OutcomeTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutcomeTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload>
          }
          findMany: {
            args: Prisma.OutcomeTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload>[]
          }
          create: {
            args: Prisma.OutcomeTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload>
          }
          createMany: {
            args: Prisma.OutcomeTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutcomeTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload>[]
          }
          delete: {
            args: Prisma.OutcomeTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload>
          }
          update: {
            args: Prisma.OutcomeTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload>
          }
          deleteMany: {
            args: Prisma.OutcomeTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutcomeTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutcomeTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload>[]
          }
          upsert: {
            args: Prisma.OutcomeTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomeTypePayload>
          }
          aggregate: {
            args: Prisma.OutcomeTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutcomeType>
          }
          groupBy: {
            args: Prisma.OutcomeTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutcomeTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutcomeTypeCountArgs<ExtArgs>
            result: $Utils.Optional<OutcomeTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    scamReport?: ScamReportOmit
    comment?: CommentOmit
    vote?: VoteOmit
    wikiPage?: WikiPageOmit
    searchCache?: SearchCacheOmit
    aIScamReport?: AIScamReportOmit
    scamType?: ScamTypeOmit
    flag?: FlagOmit
    user?: UserOmit
    notification?: NotificationOmit
    outcomeType?: OutcomeTypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScamReportCountOutputType
   */

  export type ScamReportCountOutputType = {
    comments: number
    flags: number
    votes: number
  }

  export type ScamReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ScamReportCountOutputTypeCountCommentsArgs
    flags?: boolean | ScamReportCountOutputTypeCountFlagsArgs
    votes?: boolean | ScamReportCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * ScamReportCountOutputType without action
   */
  export type ScamReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReportCountOutputType
     */
    select?: ScamReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScamReportCountOutputType without action
   */
  export type ScamReportCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ScamReportCountOutputType without action
   */
  export type ScamReportCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
  }

  /**
   * ScamReportCountOutputType without action
   */
  export type ScamReportCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type ScamTypeCountOutputType
   */

  export type ScamTypeCountOutputType = {
    reports: number
  }

  export type ScamTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | ScamTypeCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * ScamTypeCountOutputType without action
   */
  export type ScamTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamTypeCountOutputType
     */
    select?: ScamTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScamTypeCountOutputType without action
   */
  export type ScamTypeCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScamReportWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    comments: number
    flags: number
    notifications: number
    votes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    flags?: boolean | UserCountOutputTypeCountFlagsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ScamReport
   */

  export type AggregateScamReport = {
    _count: ScamReportCountAggregateOutputType | null
    _avg: ScamReportAvgAggregateOutputType | null
    _sum: ScamReportSumAggregateOutputType | null
    _min: ScamReportMinAggregateOutputType | null
    _max: ScamReportMaxAggregateOutputType | null
  }

  export type ScamReportAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    trustScore: number | null
    reportCount: number | null
  }

  export type ScamReportSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    trustScore: number | null
    reportCount: number | null
  }

  export type ScamReportMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    city: string | null
    country: string | null
    region: string | null
    ipHash: string | null
    latitude: number | null
    longitude: number | null
    verified: boolean | null
    trustScore: number | null
    reportCount: number | null
    reporterName: string | null
    reporterEmail: string | null
    anonymous: boolean | null
    screenshots: string | null
    evidence: string | null
    scamTypeId: string | null
  }

  export type ScamReportMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    city: string | null
    country: string | null
    region: string | null
    ipHash: string | null
    latitude: number | null
    longitude: number | null
    verified: boolean | null
    trustScore: number | null
    reportCount: number | null
    reporterName: string | null
    reporterEmail: string | null
    anonymous: boolean | null
    screenshots: string | null
    evidence: string | null
    scamTypeId: string | null
  }

  export type ScamReportCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    description: number
    scammerDetails: number
    city: number
    country: number
    region: number
    ipHash: number
    latitude: number
    longitude: number
    verified: number
    trustScore: number
    reportCount: number
    reporterName: number
    reporterEmail: number
    anonymous: number
    outcome: number
    screenshots: number
    evidence: number
    scamTypeId: number
    _all: number
  }


  export type ScamReportAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    trustScore?: true
    reportCount?: true
  }

  export type ScamReportSumAggregateInputType = {
    latitude?: true
    longitude?: true
    trustScore?: true
    reportCount?: true
  }

  export type ScamReportMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    city?: true
    country?: true
    region?: true
    ipHash?: true
    latitude?: true
    longitude?: true
    verified?: true
    trustScore?: true
    reportCount?: true
    reporterName?: true
    reporterEmail?: true
    anonymous?: true
    screenshots?: true
    evidence?: true
    scamTypeId?: true
  }

  export type ScamReportMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    city?: true
    country?: true
    region?: true
    ipHash?: true
    latitude?: true
    longitude?: true
    verified?: true
    trustScore?: true
    reportCount?: true
    reporterName?: true
    reporterEmail?: true
    anonymous?: true
    screenshots?: true
    evidence?: true
    scamTypeId?: true
  }

  export type ScamReportCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    scammerDetails?: true
    city?: true
    country?: true
    region?: true
    ipHash?: true
    latitude?: true
    longitude?: true
    verified?: true
    trustScore?: true
    reportCount?: true
    reporterName?: true
    reporterEmail?: true
    anonymous?: true
    outcome?: true
    screenshots?: true
    evidence?: true
    scamTypeId?: true
    _all?: true
  }

  export type ScamReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScamReport to aggregate.
     */
    where?: ScamReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScamReports to fetch.
     */
    orderBy?: ScamReportOrderByWithRelationInput | ScamReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScamReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScamReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScamReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScamReports
    **/
    _count?: true | ScamReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScamReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScamReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScamReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScamReportMaxAggregateInputType
  }

  export type GetScamReportAggregateType<T extends ScamReportAggregateArgs> = {
        [P in keyof T & keyof AggregateScamReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScamReport[P]>
      : GetScalarType<T[P], AggregateScamReport[P]>
  }




  export type ScamReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScamReportWhereInput
    orderBy?: ScamReportOrderByWithAggregationInput | ScamReportOrderByWithAggregationInput[]
    by: ScamReportScalarFieldEnum[] | ScamReportScalarFieldEnum
    having?: ScamReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScamReportCountAggregateInputType | true
    _avg?: ScamReportAvgAggregateInputType
    _sum?: ScamReportSumAggregateInputType
    _min?: ScamReportMinAggregateInputType
    _max?: ScamReportMaxAggregateInputType
  }

  export type ScamReportGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    description: string
    scammerDetails: JsonValue | null
    city: string | null
    country: string | null
    region: string | null
    ipHash: string | null
    latitude: number | null
    longitude: number | null
    verified: boolean
    trustScore: number
    reportCount: number
    reporterName: string | null
    reporterEmail: string | null
    anonymous: boolean
    outcome: JsonValue | null
    screenshots: string | null
    evidence: string | null
    scamTypeId: string | null
    _count: ScamReportCountAggregateOutputType | null
    _avg: ScamReportAvgAggregateOutputType | null
    _sum: ScamReportSumAggregateOutputType | null
    _min: ScamReportMinAggregateOutputType | null
    _max: ScamReportMaxAggregateOutputType | null
  }

  type GetScamReportGroupByPayload<T extends ScamReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScamReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScamReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScamReportGroupByOutputType[P]>
            : GetScalarType<T[P], ScamReportGroupByOutputType[P]>
        }
      >
    >


  export type ScamReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    scammerDetails?: boolean
    city?: boolean
    country?: boolean
    region?: boolean
    ipHash?: boolean
    latitude?: boolean
    longitude?: boolean
    verified?: boolean
    trustScore?: boolean
    reportCount?: boolean
    reporterName?: boolean
    reporterEmail?: boolean
    anonymous?: boolean
    outcome?: boolean
    screenshots?: boolean
    evidence?: boolean
    scamTypeId?: boolean
    comments?: boolean | ScamReport$commentsArgs<ExtArgs>
    flags?: boolean | ScamReport$flagsArgs<ExtArgs>
    scamType?: boolean | ScamReport$scamTypeArgs<ExtArgs>
    votes?: boolean | ScamReport$votesArgs<ExtArgs>
    _count?: boolean | ScamReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scamReport"]>

  export type ScamReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    scammerDetails?: boolean
    city?: boolean
    country?: boolean
    region?: boolean
    ipHash?: boolean
    latitude?: boolean
    longitude?: boolean
    verified?: boolean
    trustScore?: boolean
    reportCount?: boolean
    reporterName?: boolean
    reporterEmail?: boolean
    anonymous?: boolean
    outcome?: boolean
    screenshots?: boolean
    evidence?: boolean
    scamTypeId?: boolean
    scamType?: boolean | ScamReport$scamTypeArgs<ExtArgs>
  }, ExtArgs["result"]["scamReport"]>

  export type ScamReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    scammerDetails?: boolean
    city?: boolean
    country?: boolean
    region?: boolean
    ipHash?: boolean
    latitude?: boolean
    longitude?: boolean
    verified?: boolean
    trustScore?: boolean
    reportCount?: boolean
    reporterName?: boolean
    reporterEmail?: boolean
    anonymous?: boolean
    outcome?: boolean
    screenshots?: boolean
    evidence?: boolean
    scamTypeId?: boolean
    scamType?: boolean | ScamReport$scamTypeArgs<ExtArgs>
  }, ExtArgs["result"]["scamReport"]>

  export type ScamReportSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    scammerDetails?: boolean
    city?: boolean
    country?: boolean
    region?: boolean
    ipHash?: boolean
    latitude?: boolean
    longitude?: boolean
    verified?: boolean
    trustScore?: boolean
    reportCount?: boolean
    reporterName?: boolean
    reporterEmail?: boolean
    anonymous?: boolean
    outcome?: boolean
    screenshots?: boolean
    evidence?: boolean
    scamTypeId?: boolean
  }

  export type ScamReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "description" | "scammerDetails" | "city" | "country" | "region" | "ipHash" | "latitude" | "longitude" | "verified" | "trustScore" | "reportCount" | "reporterName" | "reporterEmail" | "anonymous" | "outcome" | "screenshots" | "evidence" | "scamTypeId", ExtArgs["result"]["scamReport"]>
  export type ScamReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ScamReport$commentsArgs<ExtArgs>
    flags?: boolean | ScamReport$flagsArgs<ExtArgs>
    scamType?: boolean | ScamReport$scamTypeArgs<ExtArgs>
    votes?: boolean | ScamReport$votesArgs<ExtArgs>
    _count?: boolean | ScamReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScamReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scamType?: boolean | ScamReport$scamTypeArgs<ExtArgs>
  }
  export type ScamReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scamType?: boolean | ScamReport$scamTypeArgs<ExtArgs>
  }

  export type $ScamReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScamReport"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      flags: Prisma.$FlagPayload<ExtArgs>[]
      scamType: Prisma.$ScamTypePayload<ExtArgs> | null
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      description: string
      scammerDetails: Prisma.JsonValue | null
      city: string | null
      country: string | null
      region: string | null
      ipHash: string | null
      latitude: number | null
      longitude: number | null
      verified: boolean
      trustScore: number
      reportCount: number
      reporterName: string | null
      reporterEmail: string | null
      anonymous: boolean
      outcome: Prisma.JsonValue | null
      screenshots: string | null
      evidence: string | null
      scamTypeId: string | null
    }, ExtArgs["result"]["scamReport"]>
    composites: {}
  }

  type ScamReportGetPayload<S extends boolean | null | undefined | ScamReportDefaultArgs> = $Result.GetResult<Prisma.$ScamReportPayload, S>

  type ScamReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScamReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScamReportCountAggregateInputType | true
    }

  export interface ScamReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScamReport'], meta: { name: 'ScamReport' } }
    /**
     * Find zero or one ScamReport that matches the filter.
     * @param {ScamReportFindUniqueArgs} args - Arguments to find a ScamReport
     * @example
     * // Get one ScamReport
     * const scamReport = await prisma.scamReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScamReportFindUniqueArgs>(args: SelectSubset<T, ScamReportFindUniqueArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScamReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScamReportFindUniqueOrThrowArgs} args - Arguments to find a ScamReport
     * @example
     * // Get one ScamReport
     * const scamReport = await prisma.scamReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScamReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ScamReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScamReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamReportFindFirstArgs} args - Arguments to find a ScamReport
     * @example
     * // Get one ScamReport
     * const scamReport = await prisma.scamReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScamReportFindFirstArgs>(args?: SelectSubset<T, ScamReportFindFirstArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScamReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamReportFindFirstOrThrowArgs} args - Arguments to find a ScamReport
     * @example
     * // Get one ScamReport
     * const scamReport = await prisma.scamReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScamReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ScamReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScamReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScamReports
     * const scamReports = await prisma.scamReport.findMany()
     * 
     * // Get first 10 ScamReports
     * const scamReports = await prisma.scamReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scamReportWithIdOnly = await prisma.scamReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScamReportFindManyArgs>(args?: SelectSubset<T, ScamReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScamReport.
     * @param {ScamReportCreateArgs} args - Arguments to create a ScamReport.
     * @example
     * // Create one ScamReport
     * const ScamReport = await prisma.scamReport.create({
     *   data: {
     *     // ... data to create a ScamReport
     *   }
     * })
     * 
     */
    create<T extends ScamReportCreateArgs>(args: SelectSubset<T, ScamReportCreateArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScamReports.
     * @param {ScamReportCreateManyArgs} args - Arguments to create many ScamReports.
     * @example
     * // Create many ScamReports
     * const scamReport = await prisma.scamReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScamReportCreateManyArgs>(args?: SelectSubset<T, ScamReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScamReports and returns the data saved in the database.
     * @param {ScamReportCreateManyAndReturnArgs} args - Arguments to create many ScamReports.
     * @example
     * // Create many ScamReports
     * const scamReport = await prisma.scamReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScamReports and only return the `id`
     * const scamReportWithIdOnly = await prisma.scamReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScamReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ScamReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScamReport.
     * @param {ScamReportDeleteArgs} args - Arguments to delete one ScamReport.
     * @example
     * // Delete one ScamReport
     * const ScamReport = await prisma.scamReport.delete({
     *   where: {
     *     // ... filter to delete one ScamReport
     *   }
     * })
     * 
     */
    delete<T extends ScamReportDeleteArgs>(args: SelectSubset<T, ScamReportDeleteArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScamReport.
     * @param {ScamReportUpdateArgs} args - Arguments to update one ScamReport.
     * @example
     * // Update one ScamReport
     * const scamReport = await prisma.scamReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScamReportUpdateArgs>(args: SelectSubset<T, ScamReportUpdateArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScamReports.
     * @param {ScamReportDeleteManyArgs} args - Arguments to filter ScamReports to delete.
     * @example
     * // Delete a few ScamReports
     * const { count } = await prisma.scamReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScamReportDeleteManyArgs>(args?: SelectSubset<T, ScamReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScamReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScamReports
     * const scamReport = await prisma.scamReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScamReportUpdateManyArgs>(args: SelectSubset<T, ScamReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScamReports and returns the data updated in the database.
     * @param {ScamReportUpdateManyAndReturnArgs} args - Arguments to update many ScamReports.
     * @example
     * // Update many ScamReports
     * const scamReport = await prisma.scamReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScamReports and only return the `id`
     * const scamReportWithIdOnly = await prisma.scamReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScamReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ScamReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScamReport.
     * @param {ScamReportUpsertArgs} args - Arguments to update or create a ScamReport.
     * @example
     * // Update or create a ScamReport
     * const scamReport = await prisma.scamReport.upsert({
     *   create: {
     *     // ... data to create a ScamReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScamReport we want to update
     *   }
     * })
     */
    upsert<T extends ScamReportUpsertArgs>(args: SelectSubset<T, ScamReportUpsertArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScamReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamReportCountArgs} args - Arguments to filter ScamReports to count.
     * @example
     * // Count the number of ScamReports
     * const count = await prisma.scamReport.count({
     *   where: {
     *     // ... the filter for the ScamReports we want to count
     *   }
     * })
    **/
    count<T extends ScamReportCountArgs>(
      args?: Subset<T, ScamReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScamReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScamReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScamReportAggregateArgs>(args: Subset<T, ScamReportAggregateArgs>): Prisma.PrismaPromise<GetScamReportAggregateType<T>>

    /**
     * Group by ScamReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScamReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScamReportGroupByArgs['orderBy'] }
        : { orderBy?: ScamReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScamReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScamReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScamReport model
   */
  readonly fields: ScamReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScamReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScamReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends ScamReport$commentsArgs<ExtArgs> = {}>(args?: Subset<T, ScamReport$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flags<T extends ScamReport$flagsArgs<ExtArgs> = {}>(args?: Subset<T, ScamReport$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scamType<T extends ScamReport$scamTypeArgs<ExtArgs> = {}>(args?: Subset<T, ScamReport$scamTypeArgs<ExtArgs>>): Prisma__ScamTypeClient<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    votes<T extends ScamReport$votesArgs<ExtArgs> = {}>(args?: Subset<T, ScamReport$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScamReport model
   */
  interface ScamReportFieldRefs {
    readonly id: FieldRef<"ScamReport", 'String'>
    readonly createdAt: FieldRef<"ScamReport", 'DateTime'>
    readonly updatedAt: FieldRef<"ScamReport", 'DateTime'>
    readonly description: FieldRef<"ScamReport", 'String'>
    readonly scammerDetails: FieldRef<"ScamReport", 'Json'>
    readonly city: FieldRef<"ScamReport", 'String'>
    readonly country: FieldRef<"ScamReport", 'String'>
    readonly region: FieldRef<"ScamReport", 'String'>
    readonly ipHash: FieldRef<"ScamReport", 'String'>
    readonly latitude: FieldRef<"ScamReport", 'Float'>
    readonly longitude: FieldRef<"ScamReport", 'Float'>
    readonly verified: FieldRef<"ScamReport", 'Boolean'>
    readonly trustScore: FieldRef<"ScamReport", 'Int'>
    readonly reportCount: FieldRef<"ScamReport", 'Int'>
    readonly reporterName: FieldRef<"ScamReport", 'String'>
    readonly reporterEmail: FieldRef<"ScamReport", 'String'>
    readonly anonymous: FieldRef<"ScamReport", 'Boolean'>
    readonly outcome: FieldRef<"ScamReport", 'Json'>
    readonly screenshots: FieldRef<"ScamReport", 'String'>
    readonly evidence: FieldRef<"ScamReport", 'String'>
    readonly scamTypeId: FieldRef<"ScamReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScamReport findUnique
   */
  export type ScamReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    /**
     * Filter, which ScamReport to fetch.
     */
    where: ScamReportWhereUniqueInput
  }

  /**
   * ScamReport findUniqueOrThrow
   */
  export type ScamReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    /**
     * Filter, which ScamReport to fetch.
     */
    where: ScamReportWhereUniqueInput
  }

  /**
   * ScamReport findFirst
   */
  export type ScamReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    /**
     * Filter, which ScamReport to fetch.
     */
    where?: ScamReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScamReports to fetch.
     */
    orderBy?: ScamReportOrderByWithRelationInput | ScamReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScamReports.
     */
    cursor?: ScamReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScamReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScamReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScamReports.
     */
    distinct?: ScamReportScalarFieldEnum | ScamReportScalarFieldEnum[]
  }

  /**
   * ScamReport findFirstOrThrow
   */
  export type ScamReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    /**
     * Filter, which ScamReport to fetch.
     */
    where?: ScamReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScamReports to fetch.
     */
    orderBy?: ScamReportOrderByWithRelationInput | ScamReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScamReports.
     */
    cursor?: ScamReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScamReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScamReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScamReports.
     */
    distinct?: ScamReportScalarFieldEnum | ScamReportScalarFieldEnum[]
  }

  /**
   * ScamReport findMany
   */
  export type ScamReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    /**
     * Filter, which ScamReports to fetch.
     */
    where?: ScamReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScamReports to fetch.
     */
    orderBy?: ScamReportOrderByWithRelationInput | ScamReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScamReports.
     */
    cursor?: ScamReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScamReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScamReports.
     */
    skip?: number
    distinct?: ScamReportScalarFieldEnum | ScamReportScalarFieldEnum[]
  }

  /**
   * ScamReport create
   */
  export type ScamReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    /**
     * The data needed to create a ScamReport.
     */
    data: XOR<ScamReportCreateInput, ScamReportUncheckedCreateInput>
  }

  /**
   * ScamReport createMany
   */
  export type ScamReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScamReports.
     */
    data: ScamReportCreateManyInput | ScamReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScamReport createManyAndReturn
   */
  export type ScamReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * The data used to create many ScamReports.
     */
    data: ScamReportCreateManyInput | ScamReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScamReport update
   */
  export type ScamReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    /**
     * The data needed to update a ScamReport.
     */
    data: XOR<ScamReportUpdateInput, ScamReportUncheckedUpdateInput>
    /**
     * Choose, which ScamReport to update.
     */
    where: ScamReportWhereUniqueInput
  }

  /**
   * ScamReport updateMany
   */
  export type ScamReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScamReports.
     */
    data: XOR<ScamReportUpdateManyMutationInput, ScamReportUncheckedUpdateManyInput>
    /**
     * Filter which ScamReports to update
     */
    where?: ScamReportWhereInput
    /**
     * Limit how many ScamReports to update.
     */
    limit?: number
  }

  /**
   * ScamReport updateManyAndReturn
   */
  export type ScamReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * The data used to update ScamReports.
     */
    data: XOR<ScamReportUpdateManyMutationInput, ScamReportUncheckedUpdateManyInput>
    /**
     * Filter which ScamReports to update
     */
    where?: ScamReportWhereInput
    /**
     * Limit how many ScamReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScamReport upsert
   */
  export type ScamReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    /**
     * The filter to search for the ScamReport to update in case it exists.
     */
    where: ScamReportWhereUniqueInput
    /**
     * In case the ScamReport found by the `where` argument doesn't exist, create a new ScamReport with this data.
     */
    create: XOR<ScamReportCreateInput, ScamReportUncheckedCreateInput>
    /**
     * In case the ScamReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScamReportUpdateInput, ScamReportUncheckedUpdateInput>
  }

  /**
   * ScamReport delete
   */
  export type ScamReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    /**
     * Filter which ScamReport to delete.
     */
    where: ScamReportWhereUniqueInput
  }

  /**
   * ScamReport deleteMany
   */
  export type ScamReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScamReports to delete
     */
    where?: ScamReportWhereInput
    /**
     * Limit how many ScamReports to delete.
     */
    limit?: number
  }

  /**
   * ScamReport.comments
   */
  export type ScamReport$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * ScamReport.flags
   */
  export type ScamReport$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    cursor?: FlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * ScamReport.scamType
   */
  export type ScamReport$scamTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    where?: ScamTypeWhereInput
  }

  /**
   * ScamReport.votes
   */
  export type ScamReport$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * ScamReport without action
   */
  export type ScamReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    content: string | null
    reportId: string | null
    parentId: string | null
    userId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    content: string | null
    reportId: string | null
    parentId: string | null
    userId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    createdAt: number
    content: number
    reportId: number
    parentId: number
    userId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    reportId?: true
    parentId?: true
    userId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    reportId?: true
    parentId?: true
    userId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    reportId?: true
    parentId?: true
    userId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    createdAt: Date
    content: string
    reportId: string
    parentId: string | null
    userId: string | null
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    reportId?: boolean
    parentId?: boolean
    userId?: boolean
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    reportId?: boolean
    parentId?: boolean
    userId?: boolean
    parent?: boolean | Comment$parentArgs<ExtArgs>
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    reportId?: boolean
    parentId?: boolean
    userId?: boolean
    parent?: boolean | Comment$parentArgs<ExtArgs>
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    content?: boolean
    reportId?: boolean
    parentId?: boolean
    userId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "content" | "reportId" | "parentId" | "userId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Comment$parentArgs<ExtArgs>
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Comment$parentArgs<ExtArgs>
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | Comment$userArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
      report: Prisma.$ScamReportPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      content: string
      reportId: string
      parentId: string | null
      userId: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends ScamReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScamReportDefaultArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Comment$userArgs<ExtArgs> = {}>(args?: Subset<T, Comment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly reportId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment.user
   */
  export type Comment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    userId: string | null
    voteType: string | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    userId: string | null
    voteType: string | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    reportId: number
    userId: number
    voteType: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    reportId?: true
    userId?: true
    voteType?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    reportId?: true
    userId?: true
    voteType?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    reportId?: true
    userId?: true
    voteType?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    reportId: string
    userId: string
    voteType: string
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    userId?: boolean
    voteType?: boolean
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    userId?: boolean
    voteType?: boolean
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    userId?: boolean
    voteType?: boolean
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    reportId?: boolean
    userId?: boolean
    voteType?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "userId" | "voteType", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      report: Prisma.$ScamReportPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      userId: string
      voteType: string
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ScamReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScamReportDefaultArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly reportId: FieldRef<"Vote", 'String'>
    readonly userId: FieldRef<"Vote", 'String'>
    readonly voteType: FieldRef<"Vote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model WikiPage
   */

  export type AggregateWikiPage = {
    _count: WikiPageCountAggregateOutputType | null
    _avg: WikiPageAvgAggregateOutputType | null
    _sum: WikiPageSumAggregateOutputType | null
    _min: WikiPageMinAggregateOutputType | null
    _max: WikiPageMaxAggregateOutputType | null
  }

  export type WikiPageAvgAggregateOutputType = {
    views: number | null
  }

  export type WikiPageSumAggregateOutputType = {
    views: number | null
  }

  export type WikiPageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    slug: string | null
    content: string | null
    category: string | null
    country: string | null
    views: number | null
    featured: boolean | null
  }

  export type WikiPageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    slug: string | null
    content: string | null
    category: string | null
    country: string | null
    views: number | null
    featured: boolean | null
  }

  export type WikiPageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    slug: number
    content: number
    category: number
    country: number
    views: number
    featured: number
    _all: number
  }


  export type WikiPageAvgAggregateInputType = {
    views?: true
  }

  export type WikiPageSumAggregateInputType = {
    views?: true
  }

  export type WikiPageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    content?: true
    category?: true
    country?: true
    views?: true
    featured?: true
  }

  export type WikiPageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    content?: true
    category?: true
    country?: true
    views?: true
    featured?: true
  }

  export type WikiPageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    content?: true
    category?: true
    country?: true
    views?: true
    featured?: true
    _all?: true
  }

  export type WikiPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WikiPage to aggregate.
     */
    where?: WikiPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WikiPages to fetch.
     */
    orderBy?: WikiPageOrderByWithRelationInput | WikiPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WikiPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WikiPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WikiPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WikiPages
    **/
    _count?: true | WikiPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WikiPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WikiPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WikiPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WikiPageMaxAggregateInputType
  }

  export type GetWikiPageAggregateType<T extends WikiPageAggregateArgs> = {
        [P in keyof T & keyof AggregateWikiPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWikiPage[P]>
      : GetScalarType<T[P], AggregateWikiPage[P]>
  }




  export type WikiPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WikiPageWhereInput
    orderBy?: WikiPageOrderByWithAggregationInput | WikiPageOrderByWithAggregationInput[]
    by: WikiPageScalarFieldEnum[] | WikiPageScalarFieldEnum
    having?: WikiPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WikiPageCountAggregateInputType | true
    _avg?: WikiPageAvgAggregateInputType
    _sum?: WikiPageSumAggregateInputType
    _min?: WikiPageMinAggregateInputType
    _max?: WikiPageMaxAggregateInputType
  }

  export type WikiPageGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    slug: string
    content: string
    category: string
    country: string | null
    views: number
    featured: boolean
    _count: WikiPageCountAggregateOutputType | null
    _avg: WikiPageAvgAggregateOutputType | null
    _sum: WikiPageSumAggregateOutputType | null
    _min: WikiPageMinAggregateOutputType | null
    _max: WikiPageMaxAggregateOutputType | null
  }

  type GetWikiPageGroupByPayload<T extends WikiPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WikiPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WikiPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WikiPageGroupByOutputType[P]>
            : GetScalarType<T[P], WikiPageGroupByOutputType[P]>
        }
      >
    >


  export type WikiPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    category?: boolean
    country?: boolean
    views?: boolean
    featured?: boolean
  }, ExtArgs["result"]["wikiPage"]>

  export type WikiPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    category?: boolean
    country?: boolean
    views?: boolean
    featured?: boolean
  }, ExtArgs["result"]["wikiPage"]>

  export type WikiPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    category?: boolean
    country?: boolean
    views?: boolean
    featured?: boolean
  }, ExtArgs["result"]["wikiPage"]>

  export type WikiPageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    category?: boolean
    country?: boolean
    views?: boolean
    featured?: boolean
  }

  export type WikiPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "slug" | "content" | "category" | "country" | "views" | "featured", ExtArgs["result"]["wikiPage"]>

  export type $WikiPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WikiPage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      slug: string
      content: string
      category: string
      country: string | null
      views: number
      featured: boolean
    }, ExtArgs["result"]["wikiPage"]>
    composites: {}
  }

  type WikiPageGetPayload<S extends boolean | null | undefined | WikiPageDefaultArgs> = $Result.GetResult<Prisma.$WikiPagePayload, S>

  type WikiPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WikiPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WikiPageCountAggregateInputType | true
    }

  export interface WikiPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WikiPage'], meta: { name: 'WikiPage' } }
    /**
     * Find zero or one WikiPage that matches the filter.
     * @param {WikiPageFindUniqueArgs} args - Arguments to find a WikiPage
     * @example
     * // Get one WikiPage
     * const wikiPage = await prisma.wikiPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WikiPageFindUniqueArgs>(args: SelectSubset<T, WikiPageFindUniqueArgs<ExtArgs>>): Prisma__WikiPageClient<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WikiPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WikiPageFindUniqueOrThrowArgs} args - Arguments to find a WikiPage
     * @example
     * // Get one WikiPage
     * const wikiPage = await prisma.wikiPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WikiPageFindUniqueOrThrowArgs>(args: SelectSubset<T, WikiPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WikiPageClient<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WikiPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikiPageFindFirstArgs} args - Arguments to find a WikiPage
     * @example
     * // Get one WikiPage
     * const wikiPage = await prisma.wikiPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WikiPageFindFirstArgs>(args?: SelectSubset<T, WikiPageFindFirstArgs<ExtArgs>>): Prisma__WikiPageClient<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WikiPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikiPageFindFirstOrThrowArgs} args - Arguments to find a WikiPage
     * @example
     * // Get one WikiPage
     * const wikiPage = await prisma.wikiPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WikiPageFindFirstOrThrowArgs>(args?: SelectSubset<T, WikiPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__WikiPageClient<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WikiPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikiPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WikiPages
     * const wikiPages = await prisma.wikiPage.findMany()
     * 
     * // Get first 10 WikiPages
     * const wikiPages = await prisma.wikiPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wikiPageWithIdOnly = await prisma.wikiPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WikiPageFindManyArgs>(args?: SelectSubset<T, WikiPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WikiPage.
     * @param {WikiPageCreateArgs} args - Arguments to create a WikiPage.
     * @example
     * // Create one WikiPage
     * const WikiPage = await prisma.wikiPage.create({
     *   data: {
     *     // ... data to create a WikiPage
     *   }
     * })
     * 
     */
    create<T extends WikiPageCreateArgs>(args: SelectSubset<T, WikiPageCreateArgs<ExtArgs>>): Prisma__WikiPageClient<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WikiPages.
     * @param {WikiPageCreateManyArgs} args - Arguments to create many WikiPages.
     * @example
     * // Create many WikiPages
     * const wikiPage = await prisma.wikiPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WikiPageCreateManyArgs>(args?: SelectSubset<T, WikiPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WikiPages and returns the data saved in the database.
     * @param {WikiPageCreateManyAndReturnArgs} args - Arguments to create many WikiPages.
     * @example
     * // Create many WikiPages
     * const wikiPage = await prisma.wikiPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WikiPages and only return the `id`
     * const wikiPageWithIdOnly = await prisma.wikiPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WikiPageCreateManyAndReturnArgs>(args?: SelectSubset<T, WikiPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WikiPage.
     * @param {WikiPageDeleteArgs} args - Arguments to delete one WikiPage.
     * @example
     * // Delete one WikiPage
     * const WikiPage = await prisma.wikiPage.delete({
     *   where: {
     *     // ... filter to delete one WikiPage
     *   }
     * })
     * 
     */
    delete<T extends WikiPageDeleteArgs>(args: SelectSubset<T, WikiPageDeleteArgs<ExtArgs>>): Prisma__WikiPageClient<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WikiPage.
     * @param {WikiPageUpdateArgs} args - Arguments to update one WikiPage.
     * @example
     * // Update one WikiPage
     * const wikiPage = await prisma.wikiPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WikiPageUpdateArgs>(args: SelectSubset<T, WikiPageUpdateArgs<ExtArgs>>): Prisma__WikiPageClient<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WikiPages.
     * @param {WikiPageDeleteManyArgs} args - Arguments to filter WikiPages to delete.
     * @example
     * // Delete a few WikiPages
     * const { count } = await prisma.wikiPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WikiPageDeleteManyArgs>(args?: SelectSubset<T, WikiPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WikiPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikiPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WikiPages
     * const wikiPage = await prisma.wikiPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WikiPageUpdateManyArgs>(args: SelectSubset<T, WikiPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WikiPages and returns the data updated in the database.
     * @param {WikiPageUpdateManyAndReturnArgs} args - Arguments to update many WikiPages.
     * @example
     * // Update many WikiPages
     * const wikiPage = await prisma.wikiPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WikiPages and only return the `id`
     * const wikiPageWithIdOnly = await prisma.wikiPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WikiPageUpdateManyAndReturnArgs>(args: SelectSubset<T, WikiPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WikiPage.
     * @param {WikiPageUpsertArgs} args - Arguments to update or create a WikiPage.
     * @example
     * // Update or create a WikiPage
     * const wikiPage = await prisma.wikiPage.upsert({
     *   create: {
     *     // ... data to create a WikiPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WikiPage we want to update
     *   }
     * })
     */
    upsert<T extends WikiPageUpsertArgs>(args: SelectSubset<T, WikiPageUpsertArgs<ExtArgs>>): Prisma__WikiPageClient<$Result.GetResult<Prisma.$WikiPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WikiPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikiPageCountArgs} args - Arguments to filter WikiPages to count.
     * @example
     * // Count the number of WikiPages
     * const count = await prisma.wikiPage.count({
     *   where: {
     *     // ... the filter for the WikiPages we want to count
     *   }
     * })
    **/
    count<T extends WikiPageCountArgs>(
      args?: Subset<T, WikiPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WikiPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WikiPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikiPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WikiPageAggregateArgs>(args: Subset<T, WikiPageAggregateArgs>): Prisma.PrismaPromise<GetWikiPageAggregateType<T>>

    /**
     * Group by WikiPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikiPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WikiPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WikiPageGroupByArgs['orderBy'] }
        : { orderBy?: WikiPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WikiPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWikiPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WikiPage model
   */
  readonly fields: WikiPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WikiPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WikiPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WikiPage model
   */
  interface WikiPageFieldRefs {
    readonly id: FieldRef<"WikiPage", 'String'>
    readonly createdAt: FieldRef<"WikiPage", 'DateTime'>
    readonly updatedAt: FieldRef<"WikiPage", 'DateTime'>
    readonly title: FieldRef<"WikiPage", 'String'>
    readonly slug: FieldRef<"WikiPage", 'String'>
    readonly content: FieldRef<"WikiPage", 'String'>
    readonly category: FieldRef<"WikiPage", 'String'>
    readonly country: FieldRef<"WikiPage", 'String'>
    readonly views: FieldRef<"WikiPage", 'Int'>
    readonly featured: FieldRef<"WikiPage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WikiPage findUnique
   */
  export type WikiPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * Filter, which WikiPage to fetch.
     */
    where: WikiPageWhereUniqueInput
  }

  /**
   * WikiPage findUniqueOrThrow
   */
  export type WikiPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * Filter, which WikiPage to fetch.
     */
    where: WikiPageWhereUniqueInput
  }

  /**
   * WikiPage findFirst
   */
  export type WikiPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * Filter, which WikiPage to fetch.
     */
    where?: WikiPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WikiPages to fetch.
     */
    orderBy?: WikiPageOrderByWithRelationInput | WikiPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WikiPages.
     */
    cursor?: WikiPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WikiPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WikiPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WikiPages.
     */
    distinct?: WikiPageScalarFieldEnum | WikiPageScalarFieldEnum[]
  }

  /**
   * WikiPage findFirstOrThrow
   */
  export type WikiPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * Filter, which WikiPage to fetch.
     */
    where?: WikiPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WikiPages to fetch.
     */
    orderBy?: WikiPageOrderByWithRelationInput | WikiPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WikiPages.
     */
    cursor?: WikiPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WikiPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WikiPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WikiPages.
     */
    distinct?: WikiPageScalarFieldEnum | WikiPageScalarFieldEnum[]
  }

  /**
   * WikiPage findMany
   */
  export type WikiPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * Filter, which WikiPages to fetch.
     */
    where?: WikiPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WikiPages to fetch.
     */
    orderBy?: WikiPageOrderByWithRelationInput | WikiPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WikiPages.
     */
    cursor?: WikiPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WikiPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WikiPages.
     */
    skip?: number
    distinct?: WikiPageScalarFieldEnum | WikiPageScalarFieldEnum[]
  }

  /**
   * WikiPage create
   */
  export type WikiPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * The data needed to create a WikiPage.
     */
    data: XOR<WikiPageCreateInput, WikiPageUncheckedCreateInput>
  }

  /**
   * WikiPage createMany
   */
  export type WikiPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WikiPages.
     */
    data: WikiPageCreateManyInput | WikiPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WikiPage createManyAndReturn
   */
  export type WikiPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * The data used to create many WikiPages.
     */
    data: WikiPageCreateManyInput | WikiPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WikiPage update
   */
  export type WikiPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * The data needed to update a WikiPage.
     */
    data: XOR<WikiPageUpdateInput, WikiPageUncheckedUpdateInput>
    /**
     * Choose, which WikiPage to update.
     */
    where: WikiPageWhereUniqueInput
  }

  /**
   * WikiPage updateMany
   */
  export type WikiPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WikiPages.
     */
    data: XOR<WikiPageUpdateManyMutationInput, WikiPageUncheckedUpdateManyInput>
    /**
     * Filter which WikiPages to update
     */
    where?: WikiPageWhereInput
    /**
     * Limit how many WikiPages to update.
     */
    limit?: number
  }

  /**
   * WikiPage updateManyAndReturn
   */
  export type WikiPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * The data used to update WikiPages.
     */
    data: XOR<WikiPageUpdateManyMutationInput, WikiPageUncheckedUpdateManyInput>
    /**
     * Filter which WikiPages to update
     */
    where?: WikiPageWhereInput
    /**
     * Limit how many WikiPages to update.
     */
    limit?: number
  }

  /**
   * WikiPage upsert
   */
  export type WikiPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * The filter to search for the WikiPage to update in case it exists.
     */
    where: WikiPageWhereUniqueInput
    /**
     * In case the WikiPage found by the `where` argument doesn't exist, create a new WikiPage with this data.
     */
    create: XOR<WikiPageCreateInput, WikiPageUncheckedCreateInput>
    /**
     * In case the WikiPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WikiPageUpdateInput, WikiPageUncheckedUpdateInput>
  }

  /**
   * WikiPage delete
   */
  export type WikiPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
    /**
     * Filter which WikiPage to delete.
     */
    where: WikiPageWhereUniqueInput
  }

  /**
   * WikiPage deleteMany
   */
  export type WikiPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WikiPages to delete
     */
    where?: WikiPageWhereInput
    /**
     * Limit how many WikiPages to delete.
     */
    limit?: number
  }

  /**
   * WikiPage without action
   */
  export type WikiPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiPage
     */
    select?: WikiPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WikiPage
     */
    omit?: WikiPageOmit<ExtArgs> | null
  }


  /**
   * Model SearchCache
   */

  export type AggregateSearchCache = {
    _count: SearchCacheCountAggregateOutputType | null
    _avg: SearchCacheAvgAggregateOutputType | null
    _sum: SearchCacheSumAggregateOutputType | null
    _min: SearchCacheMinAggregateOutputType | null
    _max: SearchCacheMaxAggregateOutputType | null
  }

  export type SearchCacheAvgAggregateOutputType = {
    hitCount: number | null
  }

  export type SearchCacheSumAggregateOutputType = {
    hitCount: number | null
  }

  export type SearchCacheMinAggregateOutputType = {
    id: string | null
    query: string | null
    results: string | null
    lastUpdated: Date | null
    hitCount: number | null
  }

  export type SearchCacheMaxAggregateOutputType = {
    id: string | null
    query: string | null
    results: string | null
    lastUpdated: Date | null
    hitCount: number | null
  }

  export type SearchCacheCountAggregateOutputType = {
    id: number
    query: number
    results: number
    lastUpdated: number
    hitCount: number
    _all: number
  }


  export type SearchCacheAvgAggregateInputType = {
    hitCount?: true
  }

  export type SearchCacheSumAggregateInputType = {
    hitCount?: true
  }

  export type SearchCacheMinAggregateInputType = {
    id?: true
    query?: true
    results?: true
    lastUpdated?: true
    hitCount?: true
  }

  export type SearchCacheMaxAggregateInputType = {
    id?: true
    query?: true
    results?: true
    lastUpdated?: true
    hitCount?: true
  }

  export type SearchCacheCountAggregateInputType = {
    id?: true
    query?: true
    results?: true
    lastUpdated?: true
    hitCount?: true
    _all?: true
  }

  export type SearchCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchCache to aggregate.
     */
    where?: SearchCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchCaches to fetch.
     */
    orderBy?: SearchCacheOrderByWithRelationInput | SearchCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchCaches
    **/
    _count?: true | SearchCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchCacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchCacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchCacheMaxAggregateInputType
  }

  export type GetSearchCacheAggregateType<T extends SearchCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchCache[P]>
      : GetScalarType<T[P], AggregateSearchCache[P]>
  }




  export type SearchCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchCacheWhereInput
    orderBy?: SearchCacheOrderByWithAggregationInput | SearchCacheOrderByWithAggregationInput[]
    by: SearchCacheScalarFieldEnum[] | SearchCacheScalarFieldEnum
    having?: SearchCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchCacheCountAggregateInputType | true
    _avg?: SearchCacheAvgAggregateInputType
    _sum?: SearchCacheSumAggregateInputType
    _min?: SearchCacheMinAggregateInputType
    _max?: SearchCacheMaxAggregateInputType
  }

  export type SearchCacheGroupByOutputType = {
    id: string
    query: string
    results: string
    lastUpdated: Date
    hitCount: number
    _count: SearchCacheCountAggregateOutputType | null
    _avg: SearchCacheAvgAggregateOutputType | null
    _sum: SearchCacheSumAggregateOutputType | null
    _min: SearchCacheMinAggregateOutputType | null
    _max: SearchCacheMaxAggregateOutputType | null
  }

  type GetSearchCacheGroupByPayload<T extends SearchCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchCacheGroupByOutputType[P]>
            : GetScalarType<T[P], SearchCacheGroupByOutputType[P]>
        }
      >
    >


  export type SearchCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    results?: boolean
    lastUpdated?: boolean
    hitCount?: boolean
  }, ExtArgs["result"]["searchCache"]>

  export type SearchCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    results?: boolean
    lastUpdated?: boolean
    hitCount?: boolean
  }, ExtArgs["result"]["searchCache"]>

  export type SearchCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    results?: boolean
    lastUpdated?: boolean
    hitCount?: boolean
  }, ExtArgs["result"]["searchCache"]>

  export type SearchCacheSelectScalar = {
    id?: boolean
    query?: boolean
    results?: boolean
    lastUpdated?: boolean
    hitCount?: boolean
  }

  export type SearchCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "query" | "results" | "lastUpdated" | "hitCount", ExtArgs["result"]["searchCache"]>

  export type $SearchCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      query: string
      results: string
      lastUpdated: Date
      hitCount: number
    }, ExtArgs["result"]["searchCache"]>
    composites: {}
  }

  type SearchCacheGetPayload<S extends boolean | null | undefined | SearchCacheDefaultArgs> = $Result.GetResult<Prisma.$SearchCachePayload, S>

  type SearchCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchCacheCountAggregateInputType | true
    }

  export interface SearchCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchCache'], meta: { name: 'SearchCache' } }
    /**
     * Find zero or one SearchCache that matches the filter.
     * @param {SearchCacheFindUniqueArgs} args - Arguments to find a SearchCache
     * @example
     * // Get one SearchCache
     * const searchCache = await prisma.searchCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchCacheFindUniqueArgs>(args: SelectSubset<T, SearchCacheFindUniqueArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchCacheFindUniqueOrThrowArgs} args - Arguments to find a SearchCache
     * @example
     * // Get one SearchCache
     * const searchCache = await prisma.searchCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheFindFirstArgs} args - Arguments to find a SearchCache
     * @example
     * // Get one SearchCache
     * const searchCache = await prisma.searchCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchCacheFindFirstArgs>(args?: SelectSubset<T, SearchCacheFindFirstArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheFindFirstOrThrowArgs} args - Arguments to find a SearchCache
     * @example
     * // Get one SearchCache
     * const searchCache = await prisma.searchCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchCaches
     * const searchCaches = await prisma.searchCache.findMany()
     * 
     * // Get first 10 SearchCaches
     * const searchCaches = await prisma.searchCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchCacheWithIdOnly = await prisma.searchCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchCacheFindManyArgs>(args?: SelectSubset<T, SearchCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchCache.
     * @param {SearchCacheCreateArgs} args - Arguments to create a SearchCache.
     * @example
     * // Create one SearchCache
     * const SearchCache = await prisma.searchCache.create({
     *   data: {
     *     // ... data to create a SearchCache
     *   }
     * })
     * 
     */
    create<T extends SearchCacheCreateArgs>(args: SelectSubset<T, SearchCacheCreateArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchCaches.
     * @param {SearchCacheCreateManyArgs} args - Arguments to create many SearchCaches.
     * @example
     * // Create many SearchCaches
     * const searchCache = await prisma.searchCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchCacheCreateManyArgs>(args?: SelectSubset<T, SearchCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchCaches and returns the data saved in the database.
     * @param {SearchCacheCreateManyAndReturnArgs} args - Arguments to create many SearchCaches.
     * @example
     * // Create many SearchCaches
     * const searchCache = await prisma.searchCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchCaches and only return the `id`
     * const searchCacheWithIdOnly = await prisma.searchCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchCache.
     * @param {SearchCacheDeleteArgs} args - Arguments to delete one SearchCache.
     * @example
     * // Delete one SearchCache
     * const SearchCache = await prisma.searchCache.delete({
     *   where: {
     *     // ... filter to delete one SearchCache
     *   }
     * })
     * 
     */
    delete<T extends SearchCacheDeleteArgs>(args: SelectSubset<T, SearchCacheDeleteArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchCache.
     * @param {SearchCacheUpdateArgs} args - Arguments to update one SearchCache.
     * @example
     * // Update one SearchCache
     * const searchCache = await prisma.searchCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchCacheUpdateArgs>(args: SelectSubset<T, SearchCacheUpdateArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchCaches.
     * @param {SearchCacheDeleteManyArgs} args - Arguments to filter SearchCaches to delete.
     * @example
     * // Delete a few SearchCaches
     * const { count } = await prisma.searchCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchCacheDeleteManyArgs>(args?: SelectSubset<T, SearchCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchCaches
     * const searchCache = await prisma.searchCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchCacheUpdateManyArgs>(args: SelectSubset<T, SearchCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchCaches and returns the data updated in the database.
     * @param {SearchCacheUpdateManyAndReturnArgs} args - Arguments to update many SearchCaches.
     * @example
     * // Update many SearchCaches
     * const searchCache = await prisma.searchCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchCaches and only return the `id`
     * const searchCacheWithIdOnly = await prisma.searchCache.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchCache.
     * @param {SearchCacheUpsertArgs} args - Arguments to update or create a SearchCache.
     * @example
     * // Update or create a SearchCache
     * const searchCache = await prisma.searchCache.upsert({
     *   create: {
     *     // ... data to create a SearchCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchCache we want to update
     *   }
     * })
     */
    upsert<T extends SearchCacheUpsertArgs>(args: SelectSubset<T, SearchCacheUpsertArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheCountArgs} args - Arguments to filter SearchCaches to count.
     * @example
     * // Count the number of SearchCaches
     * const count = await prisma.searchCache.count({
     *   where: {
     *     // ... the filter for the SearchCaches we want to count
     *   }
     * })
    **/
    count<T extends SearchCacheCountArgs>(
      args?: Subset<T, SearchCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchCacheAggregateArgs>(args: Subset<T, SearchCacheAggregateArgs>): Prisma.PrismaPromise<GetSearchCacheAggregateType<T>>

    /**
     * Group by SearchCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchCacheGroupByArgs['orderBy'] }
        : { orderBy?: SearchCacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchCache model
   */
  readonly fields: SearchCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchCache model
   */
  interface SearchCacheFieldRefs {
    readonly id: FieldRef<"SearchCache", 'String'>
    readonly query: FieldRef<"SearchCache", 'String'>
    readonly results: FieldRef<"SearchCache", 'String'>
    readonly lastUpdated: FieldRef<"SearchCache", 'DateTime'>
    readonly hitCount: FieldRef<"SearchCache", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SearchCache findUnique
   */
  export type SearchCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCache to fetch.
     */
    where: SearchCacheWhereUniqueInput
  }

  /**
   * SearchCache findUniqueOrThrow
   */
  export type SearchCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCache to fetch.
     */
    where: SearchCacheWhereUniqueInput
  }

  /**
   * SearchCache findFirst
   */
  export type SearchCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCache to fetch.
     */
    where?: SearchCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchCaches to fetch.
     */
    orderBy?: SearchCacheOrderByWithRelationInput | SearchCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchCaches.
     */
    cursor?: SearchCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchCaches.
     */
    distinct?: SearchCacheScalarFieldEnum | SearchCacheScalarFieldEnum[]
  }

  /**
   * SearchCache findFirstOrThrow
   */
  export type SearchCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCache to fetch.
     */
    where?: SearchCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchCaches to fetch.
     */
    orderBy?: SearchCacheOrderByWithRelationInput | SearchCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchCaches.
     */
    cursor?: SearchCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchCaches.
     */
    distinct?: SearchCacheScalarFieldEnum | SearchCacheScalarFieldEnum[]
  }

  /**
   * SearchCache findMany
   */
  export type SearchCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCaches to fetch.
     */
    where?: SearchCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchCaches to fetch.
     */
    orderBy?: SearchCacheOrderByWithRelationInput | SearchCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchCaches.
     */
    cursor?: SearchCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchCaches.
     */
    skip?: number
    distinct?: SearchCacheScalarFieldEnum | SearchCacheScalarFieldEnum[]
  }

  /**
   * SearchCache create
   */
  export type SearchCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The data needed to create a SearchCache.
     */
    data: XOR<SearchCacheCreateInput, SearchCacheUncheckedCreateInput>
  }

  /**
   * SearchCache createMany
   */
  export type SearchCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchCaches.
     */
    data: SearchCacheCreateManyInput | SearchCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchCache createManyAndReturn
   */
  export type SearchCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The data used to create many SearchCaches.
     */
    data: SearchCacheCreateManyInput | SearchCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchCache update
   */
  export type SearchCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The data needed to update a SearchCache.
     */
    data: XOR<SearchCacheUpdateInput, SearchCacheUncheckedUpdateInput>
    /**
     * Choose, which SearchCache to update.
     */
    where: SearchCacheWhereUniqueInput
  }

  /**
   * SearchCache updateMany
   */
  export type SearchCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchCaches.
     */
    data: XOR<SearchCacheUpdateManyMutationInput, SearchCacheUncheckedUpdateManyInput>
    /**
     * Filter which SearchCaches to update
     */
    where?: SearchCacheWhereInput
    /**
     * Limit how many SearchCaches to update.
     */
    limit?: number
  }

  /**
   * SearchCache updateManyAndReturn
   */
  export type SearchCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The data used to update SearchCaches.
     */
    data: XOR<SearchCacheUpdateManyMutationInput, SearchCacheUncheckedUpdateManyInput>
    /**
     * Filter which SearchCaches to update
     */
    where?: SearchCacheWhereInput
    /**
     * Limit how many SearchCaches to update.
     */
    limit?: number
  }

  /**
   * SearchCache upsert
   */
  export type SearchCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The filter to search for the SearchCache to update in case it exists.
     */
    where: SearchCacheWhereUniqueInput
    /**
     * In case the SearchCache found by the `where` argument doesn't exist, create a new SearchCache with this data.
     */
    create: XOR<SearchCacheCreateInput, SearchCacheUncheckedCreateInput>
    /**
     * In case the SearchCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchCacheUpdateInput, SearchCacheUncheckedUpdateInput>
  }

  /**
   * SearchCache delete
   */
  export type SearchCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter which SearchCache to delete.
     */
    where: SearchCacheWhereUniqueInput
  }

  /**
   * SearchCache deleteMany
   */
  export type SearchCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchCaches to delete
     */
    where?: SearchCacheWhereInput
    /**
     * Limit how many SearchCaches to delete.
     */
    limit?: number
  }

  /**
   * SearchCache without action
   */
  export type SearchCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
  }


  /**
   * Model AIScamReport
   */

  export type AggregateAIScamReport = {
    _count: AIScamReportCountAggregateOutputType | null
    _avg: AIScamReportAvgAggregateOutputType | null
    _sum: AIScamReportSumAggregateOutputType | null
    _min: AIScamReportMinAggregateOutputType | null
    _max: AIScamReportMaxAggregateOutputType | null
  }

  export type AIScamReportAvgAggregateOutputType = {
    averageFinancialImpact: number | null
  }

  export type AIScamReportSumAggregateOutputType = {
    averageFinancialImpact: number | null
  }

  export type AIScamReportMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    summary: string | null
    averageRiskLevel: string | null
    averageFinancialImpact: number | null
    category: string | null
  }

  export type AIScamReportMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    summary: string | null
    averageRiskLevel: string | null
    averageFinancialImpact: number | null
    category: string | null
  }

  export type AIScamReportCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    summary: number
    averageRiskLevel: number
    averageFinancialImpact: number
    category: number
    _all: number
  }


  export type AIScamReportAvgAggregateInputType = {
    averageFinancialImpact?: true
  }

  export type AIScamReportSumAggregateInputType = {
    averageFinancialImpact?: true
  }

  export type AIScamReportMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    summary?: true
    averageRiskLevel?: true
    averageFinancialImpact?: true
    category?: true
  }

  export type AIScamReportMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    summary?: true
    averageRiskLevel?: true
    averageFinancialImpact?: true
    category?: true
  }

  export type AIScamReportCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    summary?: true
    averageRiskLevel?: true
    averageFinancialImpact?: true
    category?: true
    _all?: true
  }

  export type AIScamReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIScamReport to aggregate.
     */
    where?: AIScamReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIScamReports to fetch.
     */
    orderBy?: AIScamReportOrderByWithRelationInput | AIScamReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIScamReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIScamReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIScamReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIScamReports
    **/
    _count?: true | AIScamReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIScamReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIScamReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIScamReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIScamReportMaxAggregateInputType
  }

  export type GetAIScamReportAggregateType<T extends AIScamReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAIScamReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIScamReport[P]>
      : GetScalarType<T[P], AggregateAIScamReport[P]>
  }




  export type AIScamReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIScamReportWhereInput
    orderBy?: AIScamReportOrderByWithAggregationInput | AIScamReportOrderByWithAggregationInput[]
    by: AIScamReportScalarFieldEnum[] | AIScamReportScalarFieldEnum
    having?: AIScamReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIScamReportCountAggregateInputType | true
    _avg?: AIScamReportAvgAggregateInputType
    _sum?: AIScamReportSumAggregateInputType
    _min?: AIScamReportMinAggregateInputType
    _max?: AIScamReportMaxAggregateInputType
  }

  export type AIScamReportGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    summary: string
    averageRiskLevel: string
    averageFinancialImpact: number
    category: string
    _count: AIScamReportCountAggregateOutputType | null
    _avg: AIScamReportAvgAggregateOutputType | null
    _sum: AIScamReportSumAggregateOutputType | null
    _min: AIScamReportMinAggregateOutputType | null
    _max: AIScamReportMaxAggregateOutputType | null
  }

  type GetAIScamReportGroupByPayload<T extends AIScamReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIScamReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIScamReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIScamReportGroupByOutputType[P]>
            : GetScalarType<T[P], AIScamReportGroupByOutputType[P]>
        }
      >
    >


  export type AIScamReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    summary?: boolean
    averageRiskLevel?: boolean
    averageFinancialImpact?: boolean
    category?: boolean
  }, ExtArgs["result"]["aIScamReport"]>

  export type AIScamReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    summary?: boolean
    averageRiskLevel?: boolean
    averageFinancialImpact?: boolean
    category?: boolean
  }, ExtArgs["result"]["aIScamReport"]>

  export type AIScamReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    summary?: boolean
    averageRiskLevel?: boolean
    averageFinancialImpact?: boolean
    category?: boolean
  }, ExtArgs["result"]["aIScamReport"]>

  export type AIScamReportSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    summary?: boolean
    averageRiskLevel?: boolean
    averageFinancialImpact?: boolean
    category?: boolean
  }

  export type AIScamReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "summary" | "averageRiskLevel" | "averageFinancialImpact" | "category", ExtArgs["result"]["aIScamReport"]>

  export type $AIScamReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIScamReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      summary: string
      averageRiskLevel: string
      averageFinancialImpact: number
      category: string
    }, ExtArgs["result"]["aIScamReport"]>
    composites: {}
  }

  type AIScamReportGetPayload<S extends boolean | null | undefined | AIScamReportDefaultArgs> = $Result.GetResult<Prisma.$AIScamReportPayload, S>

  type AIScamReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIScamReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIScamReportCountAggregateInputType | true
    }

  export interface AIScamReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIScamReport'], meta: { name: 'AIScamReport' } }
    /**
     * Find zero or one AIScamReport that matches the filter.
     * @param {AIScamReportFindUniqueArgs} args - Arguments to find a AIScamReport
     * @example
     * // Get one AIScamReport
     * const aIScamReport = await prisma.aIScamReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIScamReportFindUniqueArgs>(args: SelectSubset<T, AIScamReportFindUniqueArgs<ExtArgs>>): Prisma__AIScamReportClient<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIScamReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIScamReportFindUniqueOrThrowArgs} args - Arguments to find a AIScamReport
     * @example
     * // Get one AIScamReport
     * const aIScamReport = await prisma.aIScamReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIScamReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AIScamReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIScamReportClient<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIScamReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIScamReportFindFirstArgs} args - Arguments to find a AIScamReport
     * @example
     * // Get one AIScamReport
     * const aIScamReport = await prisma.aIScamReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIScamReportFindFirstArgs>(args?: SelectSubset<T, AIScamReportFindFirstArgs<ExtArgs>>): Prisma__AIScamReportClient<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIScamReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIScamReportFindFirstOrThrowArgs} args - Arguments to find a AIScamReport
     * @example
     * // Get one AIScamReport
     * const aIScamReport = await prisma.aIScamReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIScamReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AIScamReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIScamReportClient<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIScamReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIScamReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIScamReports
     * const aIScamReports = await prisma.aIScamReport.findMany()
     * 
     * // Get first 10 AIScamReports
     * const aIScamReports = await prisma.aIScamReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIScamReportWithIdOnly = await prisma.aIScamReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIScamReportFindManyArgs>(args?: SelectSubset<T, AIScamReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIScamReport.
     * @param {AIScamReportCreateArgs} args - Arguments to create a AIScamReport.
     * @example
     * // Create one AIScamReport
     * const AIScamReport = await prisma.aIScamReport.create({
     *   data: {
     *     // ... data to create a AIScamReport
     *   }
     * })
     * 
     */
    create<T extends AIScamReportCreateArgs>(args: SelectSubset<T, AIScamReportCreateArgs<ExtArgs>>): Prisma__AIScamReportClient<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIScamReports.
     * @param {AIScamReportCreateManyArgs} args - Arguments to create many AIScamReports.
     * @example
     * // Create many AIScamReports
     * const aIScamReport = await prisma.aIScamReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIScamReportCreateManyArgs>(args?: SelectSubset<T, AIScamReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIScamReports and returns the data saved in the database.
     * @param {AIScamReportCreateManyAndReturnArgs} args - Arguments to create many AIScamReports.
     * @example
     * // Create many AIScamReports
     * const aIScamReport = await prisma.aIScamReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIScamReports and only return the `id`
     * const aIScamReportWithIdOnly = await prisma.aIScamReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIScamReportCreateManyAndReturnArgs>(args?: SelectSubset<T, AIScamReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIScamReport.
     * @param {AIScamReportDeleteArgs} args - Arguments to delete one AIScamReport.
     * @example
     * // Delete one AIScamReport
     * const AIScamReport = await prisma.aIScamReport.delete({
     *   where: {
     *     // ... filter to delete one AIScamReport
     *   }
     * })
     * 
     */
    delete<T extends AIScamReportDeleteArgs>(args: SelectSubset<T, AIScamReportDeleteArgs<ExtArgs>>): Prisma__AIScamReportClient<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIScamReport.
     * @param {AIScamReportUpdateArgs} args - Arguments to update one AIScamReport.
     * @example
     * // Update one AIScamReport
     * const aIScamReport = await prisma.aIScamReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIScamReportUpdateArgs>(args: SelectSubset<T, AIScamReportUpdateArgs<ExtArgs>>): Prisma__AIScamReportClient<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIScamReports.
     * @param {AIScamReportDeleteManyArgs} args - Arguments to filter AIScamReports to delete.
     * @example
     * // Delete a few AIScamReports
     * const { count } = await prisma.aIScamReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIScamReportDeleteManyArgs>(args?: SelectSubset<T, AIScamReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIScamReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIScamReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIScamReports
     * const aIScamReport = await prisma.aIScamReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIScamReportUpdateManyArgs>(args: SelectSubset<T, AIScamReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIScamReports and returns the data updated in the database.
     * @param {AIScamReportUpdateManyAndReturnArgs} args - Arguments to update many AIScamReports.
     * @example
     * // Update many AIScamReports
     * const aIScamReport = await prisma.aIScamReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIScamReports and only return the `id`
     * const aIScamReportWithIdOnly = await prisma.aIScamReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIScamReportUpdateManyAndReturnArgs>(args: SelectSubset<T, AIScamReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIScamReport.
     * @param {AIScamReportUpsertArgs} args - Arguments to update or create a AIScamReport.
     * @example
     * // Update or create a AIScamReport
     * const aIScamReport = await prisma.aIScamReport.upsert({
     *   create: {
     *     // ... data to create a AIScamReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIScamReport we want to update
     *   }
     * })
     */
    upsert<T extends AIScamReportUpsertArgs>(args: SelectSubset<T, AIScamReportUpsertArgs<ExtArgs>>): Prisma__AIScamReportClient<$Result.GetResult<Prisma.$AIScamReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIScamReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIScamReportCountArgs} args - Arguments to filter AIScamReports to count.
     * @example
     * // Count the number of AIScamReports
     * const count = await prisma.aIScamReport.count({
     *   where: {
     *     // ... the filter for the AIScamReports we want to count
     *   }
     * })
    **/
    count<T extends AIScamReportCountArgs>(
      args?: Subset<T, AIScamReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIScamReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIScamReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIScamReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIScamReportAggregateArgs>(args: Subset<T, AIScamReportAggregateArgs>): Prisma.PrismaPromise<GetAIScamReportAggregateType<T>>

    /**
     * Group by AIScamReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIScamReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIScamReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIScamReportGroupByArgs['orderBy'] }
        : { orderBy?: AIScamReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIScamReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIScamReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIScamReport model
   */
  readonly fields: AIScamReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIScamReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIScamReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIScamReport model
   */
  interface AIScamReportFieldRefs {
    readonly id: FieldRef<"AIScamReport", 'String'>
    readonly createdAt: FieldRef<"AIScamReport", 'DateTime'>
    readonly updatedAt: FieldRef<"AIScamReport", 'DateTime'>
    readonly summary: FieldRef<"AIScamReport", 'String'>
    readonly averageRiskLevel: FieldRef<"AIScamReport", 'String'>
    readonly averageFinancialImpact: FieldRef<"AIScamReport", 'Float'>
    readonly category: FieldRef<"AIScamReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AIScamReport findUnique
   */
  export type AIScamReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * Filter, which AIScamReport to fetch.
     */
    where: AIScamReportWhereUniqueInput
  }

  /**
   * AIScamReport findUniqueOrThrow
   */
  export type AIScamReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * Filter, which AIScamReport to fetch.
     */
    where: AIScamReportWhereUniqueInput
  }

  /**
   * AIScamReport findFirst
   */
  export type AIScamReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * Filter, which AIScamReport to fetch.
     */
    where?: AIScamReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIScamReports to fetch.
     */
    orderBy?: AIScamReportOrderByWithRelationInput | AIScamReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIScamReports.
     */
    cursor?: AIScamReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIScamReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIScamReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIScamReports.
     */
    distinct?: AIScamReportScalarFieldEnum | AIScamReportScalarFieldEnum[]
  }

  /**
   * AIScamReport findFirstOrThrow
   */
  export type AIScamReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * Filter, which AIScamReport to fetch.
     */
    where?: AIScamReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIScamReports to fetch.
     */
    orderBy?: AIScamReportOrderByWithRelationInput | AIScamReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIScamReports.
     */
    cursor?: AIScamReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIScamReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIScamReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIScamReports.
     */
    distinct?: AIScamReportScalarFieldEnum | AIScamReportScalarFieldEnum[]
  }

  /**
   * AIScamReport findMany
   */
  export type AIScamReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * Filter, which AIScamReports to fetch.
     */
    where?: AIScamReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIScamReports to fetch.
     */
    orderBy?: AIScamReportOrderByWithRelationInput | AIScamReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIScamReports.
     */
    cursor?: AIScamReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIScamReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIScamReports.
     */
    skip?: number
    distinct?: AIScamReportScalarFieldEnum | AIScamReportScalarFieldEnum[]
  }

  /**
   * AIScamReport create
   */
  export type AIScamReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * The data needed to create a AIScamReport.
     */
    data: XOR<AIScamReportCreateInput, AIScamReportUncheckedCreateInput>
  }

  /**
   * AIScamReport createMany
   */
  export type AIScamReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIScamReports.
     */
    data: AIScamReportCreateManyInput | AIScamReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIScamReport createManyAndReturn
   */
  export type AIScamReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * The data used to create many AIScamReports.
     */
    data: AIScamReportCreateManyInput | AIScamReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIScamReport update
   */
  export type AIScamReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * The data needed to update a AIScamReport.
     */
    data: XOR<AIScamReportUpdateInput, AIScamReportUncheckedUpdateInput>
    /**
     * Choose, which AIScamReport to update.
     */
    where: AIScamReportWhereUniqueInput
  }

  /**
   * AIScamReport updateMany
   */
  export type AIScamReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIScamReports.
     */
    data: XOR<AIScamReportUpdateManyMutationInput, AIScamReportUncheckedUpdateManyInput>
    /**
     * Filter which AIScamReports to update
     */
    where?: AIScamReportWhereInput
    /**
     * Limit how many AIScamReports to update.
     */
    limit?: number
  }

  /**
   * AIScamReport updateManyAndReturn
   */
  export type AIScamReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * The data used to update AIScamReports.
     */
    data: XOR<AIScamReportUpdateManyMutationInput, AIScamReportUncheckedUpdateManyInput>
    /**
     * Filter which AIScamReports to update
     */
    where?: AIScamReportWhereInput
    /**
     * Limit how many AIScamReports to update.
     */
    limit?: number
  }

  /**
   * AIScamReport upsert
   */
  export type AIScamReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * The filter to search for the AIScamReport to update in case it exists.
     */
    where: AIScamReportWhereUniqueInput
    /**
     * In case the AIScamReport found by the `where` argument doesn't exist, create a new AIScamReport with this data.
     */
    create: XOR<AIScamReportCreateInput, AIScamReportUncheckedCreateInput>
    /**
     * In case the AIScamReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIScamReportUpdateInput, AIScamReportUncheckedUpdateInput>
  }

  /**
   * AIScamReport delete
   */
  export type AIScamReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
    /**
     * Filter which AIScamReport to delete.
     */
    where: AIScamReportWhereUniqueInput
  }

  /**
   * AIScamReport deleteMany
   */
  export type AIScamReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIScamReports to delete
     */
    where?: AIScamReportWhereInput
    /**
     * Limit how many AIScamReports to delete.
     */
    limit?: number
  }

  /**
   * AIScamReport without action
   */
  export type AIScamReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIScamReport
     */
    select?: AIScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIScamReport
     */
    omit?: AIScamReportOmit<ExtArgs> | null
  }


  /**
   * Model ScamType
   */

  export type AggregateScamType = {
    _count: ScamTypeCountAggregateOutputType | null
    _min: ScamTypeMinAggregateOutputType | null
    _max: ScamTypeMaxAggregateOutputType | null
  }

  export type ScamTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    isApproved: boolean | null
    isUserCreated: boolean | null
    moderatedAt: Date | null
    moderatedBy: string | null
  }

  export type ScamTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    isApproved: boolean | null
    isUserCreated: boolean | null
    moderatedAt: Date | null
    moderatedBy: string | null
  }

  export type ScamTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    createdBy: number
    isApproved: number
    isUserCreated: number
    moderatedAt: number
    moderatedBy: number
    _all: number
  }


  export type ScamTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    isApproved?: true
    isUserCreated?: true
    moderatedAt?: true
    moderatedBy?: true
  }

  export type ScamTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    isApproved?: true
    isUserCreated?: true
    moderatedAt?: true
    moderatedBy?: true
  }

  export type ScamTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    isApproved?: true
    isUserCreated?: true
    moderatedAt?: true
    moderatedBy?: true
    _all?: true
  }

  export type ScamTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScamType to aggregate.
     */
    where?: ScamTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScamTypes to fetch.
     */
    orderBy?: ScamTypeOrderByWithRelationInput | ScamTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScamTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScamTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScamTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScamTypes
    **/
    _count?: true | ScamTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScamTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScamTypeMaxAggregateInputType
  }

  export type GetScamTypeAggregateType<T extends ScamTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateScamType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScamType[P]>
      : GetScalarType<T[P], AggregateScamType[P]>
  }




  export type ScamTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScamTypeWhereInput
    orderBy?: ScamTypeOrderByWithAggregationInput | ScamTypeOrderByWithAggregationInput[]
    by: ScamTypeScalarFieldEnum[] | ScamTypeScalarFieldEnum
    having?: ScamTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScamTypeCountAggregateInputType | true
    _min?: ScamTypeMinAggregateInputType
    _max?: ScamTypeMaxAggregateInputType
  }

  export type ScamTypeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    createdBy: string | null
    isApproved: boolean
    isUserCreated: boolean
    moderatedAt: Date | null
    moderatedBy: string | null
    _count: ScamTypeCountAggregateOutputType | null
    _min: ScamTypeMinAggregateOutputType | null
    _max: ScamTypeMaxAggregateOutputType | null
  }

  type GetScamTypeGroupByPayload<T extends ScamTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScamTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScamTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScamTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ScamTypeGroupByOutputType[P]>
        }
      >
    >


  export type ScamTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isApproved?: boolean
    isUserCreated?: boolean
    moderatedAt?: boolean
    moderatedBy?: boolean
    reports?: boolean | ScamType$reportsArgs<ExtArgs>
    _count?: boolean | ScamTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scamType"]>

  export type ScamTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isApproved?: boolean
    isUserCreated?: boolean
    moderatedAt?: boolean
    moderatedBy?: boolean
  }, ExtArgs["result"]["scamType"]>

  export type ScamTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isApproved?: boolean
    isUserCreated?: boolean
    moderatedAt?: boolean
    moderatedBy?: boolean
  }, ExtArgs["result"]["scamType"]>

  export type ScamTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isApproved?: boolean
    isUserCreated?: boolean
    moderatedAt?: boolean
    moderatedBy?: boolean
  }

  export type ScamTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "createdBy" | "isApproved" | "isUserCreated" | "moderatedAt" | "moderatedBy", ExtArgs["result"]["scamType"]>
  export type ScamTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | ScamType$reportsArgs<ExtArgs>
    _count?: boolean | ScamTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScamTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScamTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScamTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScamType"
    objects: {
      reports: Prisma.$ScamReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      createdBy: string | null
      isApproved: boolean
      isUserCreated: boolean
      moderatedAt: Date | null
      moderatedBy: string | null
    }, ExtArgs["result"]["scamType"]>
    composites: {}
  }

  type ScamTypeGetPayload<S extends boolean | null | undefined | ScamTypeDefaultArgs> = $Result.GetResult<Prisma.$ScamTypePayload, S>

  type ScamTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScamTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScamTypeCountAggregateInputType | true
    }

  export interface ScamTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScamType'], meta: { name: 'ScamType' } }
    /**
     * Find zero or one ScamType that matches the filter.
     * @param {ScamTypeFindUniqueArgs} args - Arguments to find a ScamType
     * @example
     * // Get one ScamType
     * const scamType = await prisma.scamType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScamTypeFindUniqueArgs>(args: SelectSubset<T, ScamTypeFindUniqueArgs<ExtArgs>>): Prisma__ScamTypeClient<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScamType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScamTypeFindUniqueOrThrowArgs} args - Arguments to find a ScamType
     * @example
     * // Get one ScamType
     * const scamType = await prisma.scamType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScamTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ScamTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScamTypeClient<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScamType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamTypeFindFirstArgs} args - Arguments to find a ScamType
     * @example
     * // Get one ScamType
     * const scamType = await prisma.scamType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScamTypeFindFirstArgs>(args?: SelectSubset<T, ScamTypeFindFirstArgs<ExtArgs>>): Prisma__ScamTypeClient<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScamType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamTypeFindFirstOrThrowArgs} args - Arguments to find a ScamType
     * @example
     * // Get one ScamType
     * const scamType = await prisma.scamType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScamTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ScamTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScamTypeClient<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScamTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScamTypes
     * const scamTypes = await prisma.scamType.findMany()
     * 
     * // Get first 10 ScamTypes
     * const scamTypes = await prisma.scamType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scamTypeWithIdOnly = await prisma.scamType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScamTypeFindManyArgs>(args?: SelectSubset<T, ScamTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScamType.
     * @param {ScamTypeCreateArgs} args - Arguments to create a ScamType.
     * @example
     * // Create one ScamType
     * const ScamType = await prisma.scamType.create({
     *   data: {
     *     // ... data to create a ScamType
     *   }
     * })
     * 
     */
    create<T extends ScamTypeCreateArgs>(args: SelectSubset<T, ScamTypeCreateArgs<ExtArgs>>): Prisma__ScamTypeClient<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScamTypes.
     * @param {ScamTypeCreateManyArgs} args - Arguments to create many ScamTypes.
     * @example
     * // Create many ScamTypes
     * const scamType = await prisma.scamType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScamTypeCreateManyArgs>(args?: SelectSubset<T, ScamTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScamTypes and returns the data saved in the database.
     * @param {ScamTypeCreateManyAndReturnArgs} args - Arguments to create many ScamTypes.
     * @example
     * // Create many ScamTypes
     * const scamType = await prisma.scamType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScamTypes and only return the `id`
     * const scamTypeWithIdOnly = await prisma.scamType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScamTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ScamTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScamType.
     * @param {ScamTypeDeleteArgs} args - Arguments to delete one ScamType.
     * @example
     * // Delete one ScamType
     * const ScamType = await prisma.scamType.delete({
     *   where: {
     *     // ... filter to delete one ScamType
     *   }
     * })
     * 
     */
    delete<T extends ScamTypeDeleteArgs>(args: SelectSubset<T, ScamTypeDeleteArgs<ExtArgs>>): Prisma__ScamTypeClient<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScamType.
     * @param {ScamTypeUpdateArgs} args - Arguments to update one ScamType.
     * @example
     * // Update one ScamType
     * const scamType = await prisma.scamType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScamTypeUpdateArgs>(args: SelectSubset<T, ScamTypeUpdateArgs<ExtArgs>>): Prisma__ScamTypeClient<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScamTypes.
     * @param {ScamTypeDeleteManyArgs} args - Arguments to filter ScamTypes to delete.
     * @example
     * // Delete a few ScamTypes
     * const { count } = await prisma.scamType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScamTypeDeleteManyArgs>(args?: SelectSubset<T, ScamTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScamTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScamTypes
     * const scamType = await prisma.scamType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScamTypeUpdateManyArgs>(args: SelectSubset<T, ScamTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScamTypes and returns the data updated in the database.
     * @param {ScamTypeUpdateManyAndReturnArgs} args - Arguments to update many ScamTypes.
     * @example
     * // Update many ScamTypes
     * const scamType = await prisma.scamType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScamTypes and only return the `id`
     * const scamTypeWithIdOnly = await prisma.scamType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScamTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ScamTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScamType.
     * @param {ScamTypeUpsertArgs} args - Arguments to update or create a ScamType.
     * @example
     * // Update or create a ScamType
     * const scamType = await prisma.scamType.upsert({
     *   create: {
     *     // ... data to create a ScamType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScamType we want to update
     *   }
     * })
     */
    upsert<T extends ScamTypeUpsertArgs>(args: SelectSubset<T, ScamTypeUpsertArgs<ExtArgs>>): Prisma__ScamTypeClient<$Result.GetResult<Prisma.$ScamTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScamTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamTypeCountArgs} args - Arguments to filter ScamTypes to count.
     * @example
     * // Count the number of ScamTypes
     * const count = await prisma.scamType.count({
     *   where: {
     *     // ... the filter for the ScamTypes we want to count
     *   }
     * })
    **/
    count<T extends ScamTypeCountArgs>(
      args?: Subset<T, ScamTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScamTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScamType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScamTypeAggregateArgs>(args: Subset<T, ScamTypeAggregateArgs>): Prisma.PrismaPromise<GetScamTypeAggregateType<T>>

    /**
     * Group by ScamType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScamTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScamTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScamTypeGroupByArgs['orderBy'] }
        : { orderBy?: ScamTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScamTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScamTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScamType model
   */
  readonly fields: ScamTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScamType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScamTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reports<T extends ScamType$reportsArgs<ExtArgs> = {}>(args?: Subset<T, ScamType$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScamType model
   */
  interface ScamTypeFieldRefs {
    readonly id: FieldRef<"ScamType", 'String'>
    readonly name: FieldRef<"ScamType", 'String'>
    readonly createdAt: FieldRef<"ScamType", 'DateTime'>
    readonly createdBy: FieldRef<"ScamType", 'String'>
    readonly isApproved: FieldRef<"ScamType", 'Boolean'>
    readonly isUserCreated: FieldRef<"ScamType", 'Boolean'>
    readonly moderatedAt: FieldRef<"ScamType", 'DateTime'>
    readonly moderatedBy: FieldRef<"ScamType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScamType findUnique
   */
  export type ScamTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    /**
     * Filter, which ScamType to fetch.
     */
    where: ScamTypeWhereUniqueInput
  }

  /**
   * ScamType findUniqueOrThrow
   */
  export type ScamTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    /**
     * Filter, which ScamType to fetch.
     */
    where: ScamTypeWhereUniqueInput
  }

  /**
   * ScamType findFirst
   */
  export type ScamTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    /**
     * Filter, which ScamType to fetch.
     */
    where?: ScamTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScamTypes to fetch.
     */
    orderBy?: ScamTypeOrderByWithRelationInput | ScamTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScamTypes.
     */
    cursor?: ScamTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScamTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScamTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScamTypes.
     */
    distinct?: ScamTypeScalarFieldEnum | ScamTypeScalarFieldEnum[]
  }

  /**
   * ScamType findFirstOrThrow
   */
  export type ScamTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    /**
     * Filter, which ScamType to fetch.
     */
    where?: ScamTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScamTypes to fetch.
     */
    orderBy?: ScamTypeOrderByWithRelationInput | ScamTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScamTypes.
     */
    cursor?: ScamTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScamTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScamTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScamTypes.
     */
    distinct?: ScamTypeScalarFieldEnum | ScamTypeScalarFieldEnum[]
  }

  /**
   * ScamType findMany
   */
  export type ScamTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    /**
     * Filter, which ScamTypes to fetch.
     */
    where?: ScamTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScamTypes to fetch.
     */
    orderBy?: ScamTypeOrderByWithRelationInput | ScamTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScamTypes.
     */
    cursor?: ScamTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScamTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScamTypes.
     */
    skip?: number
    distinct?: ScamTypeScalarFieldEnum | ScamTypeScalarFieldEnum[]
  }

  /**
   * ScamType create
   */
  export type ScamTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ScamType.
     */
    data: XOR<ScamTypeCreateInput, ScamTypeUncheckedCreateInput>
  }

  /**
   * ScamType createMany
   */
  export type ScamTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScamTypes.
     */
    data: ScamTypeCreateManyInput | ScamTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScamType createManyAndReturn
   */
  export type ScamTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ScamTypes.
     */
    data: ScamTypeCreateManyInput | ScamTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScamType update
   */
  export type ScamTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ScamType.
     */
    data: XOR<ScamTypeUpdateInput, ScamTypeUncheckedUpdateInput>
    /**
     * Choose, which ScamType to update.
     */
    where: ScamTypeWhereUniqueInput
  }

  /**
   * ScamType updateMany
   */
  export type ScamTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScamTypes.
     */
    data: XOR<ScamTypeUpdateManyMutationInput, ScamTypeUncheckedUpdateManyInput>
    /**
     * Filter which ScamTypes to update
     */
    where?: ScamTypeWhereInput
    /**
     * Limit how many ScamTypes to update.
     */
    limit?: number
  }

  /**
   * ScamType updateManyAndReturn
   */
  export type ScamTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * The data used to update ScamTypes.
     */
    data: XOR<ScamTypeUpdateManyMutationInput, ScamTypeUncheckedUpdateManyInput>
    /**
     * Filter which ScamTypes to update
     */
    where?: ScamTypeWhereInput
    /**
     * Limit how many ScamTypes to update.
     */
    limit?: number
  }

  /**
   * ScamType upsert
   */
  export type ScamTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ScamType to update in case it exists.
     */
    where: ScamTypeWhereUniqueInput
    /**
     * In case the ScamType found by the `where` argument doesn't exist, create a new ScamType with this data.
     */
    create: XOR<ScamTypeCreateInput, ScamTypeUncheckedCreateInput>
    /**
     * In case the ScamType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScamTypeUpdateInput, ScamTypeUncheckedUpdateInput>
  }

  /**
   * ScamType delete
   */
  export type ScamTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
    /**
     * Filter which ScamType to delete.
     */
    where: ScamTypeWhereUniqueInput
  }

  /**
   * ScamType deleteMany
   */
  export type ScamTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScamTypes to delete
     */
    where?: ScamTypeWhereInput
    /**
     * Limit how many ScamTypes to delete.
     */
    limit?: number
  }

  /**
   * ScamType.reports
   */
  export type ScamType$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamReport
     */
    select?: ScamReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamReport
     */
    omit?: ScamReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamReportInclude<ExtArgs> | null
    where?: ScamReportWhereInput
    orderBy?: ScamReportOrderByWithRelationInput | ScamReportOrderByWithRelationInput[]
    cursor?: ScamReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScamReportScalarFieldEnum | ScamReportScalarFieldEnum[]
  }

  /**
   * ScamType without action
   */
  export type ScamTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScamType
     */
    select?: ScamTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScamType
     */
    omit?: ScamTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScamTypeInclude<ExtArgs> | null
  }


  /**
   * Model Flag
   */

  export type AggregateFlag = {
    _count: FlagCountAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  export type FlagMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    reportId: string | null
    userId: string | null
    reason: string | null
  }

  export type FlagMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    reportId: string | null
    userId: string | null
    reason: string | null
  }

  export type FlagCountAggregateOutputType = {
    id: number
    createdAt: number
    reportId: number
    userId: number
    reason: number
    _all: number
  }


  export type FlagMinAggregateInputType = {
    id?: true
    createdAt?: true
    reportId?: true
    userId?: true
    reason?: true
  }

  export type FlagMaxAggregateInputType = {
    id?: true
    createdAt?: true
    reportId?: true
    userId?: true
    reason?: true
  }

  export type FlagCountAggregateInputType = {
    id?: true
    createdAt?: true
    reportId?: true
    userId?: true
    reason?: true
    _all?: true
  }

  export type FlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flag to aggregate.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flags
    **/
    _count?: true | FlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlagMaxAggregateInputType
  }

  export type GetFlagAggregateType<T extends FlagAggregateArgs> = {
        [P in keyof T & keyof AggregateFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlag[P]>
      : GetScalarType<T[P], AggregateFlag[P]>
  }




  export type FlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithAggregationInput | FlagOrderByWithAggregationInput[]
    by: FlagScalarFieldEnum[] | FlagScalarFieldEnum
    having?: FlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlagCountAggregateInputType | true
    _min?: FlagMinAggregateInputType
    _max?: FlagMaxAggregateInputType
  }

  export type FlagGroupByOutputType = {
    id: string
    createdAt: Date
    reportId: string
    userId: string
    reason: string | null
    _count: FlagCountAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  type GetFlagGroupByPayload<T extends FlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlagGroupByOutputType[P]>
            : GetScalarType<T[P], FlagGroupByOutputType[P]>
        }
      >
    >


  export type FlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    reportId?: boolean
    userId?: boolean
    reason?: boolean
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    reportId?: boolean
    userId?: boolean
    reason?: boolean
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    reportId?: boolean
    userId?: boolean
    reason?: boolean
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectScalar = {
    id?: boolean
    createdAt?: boolean
    reportId?: boolean
    userId?: boolean
    reason?: boolean
  }

  export type FlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "reportId" | "userId" | "reason", ExtArgs["result"]["flag"]>
  export type FlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ScamReportDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flag"
    objects: {
      report: Prisma.$ScamReportPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      reportId: string
      userId: string
      reason: string | null
    }, ExtArgs["result"]["flag"]>
    composites: {}
  }

  type FlagGetPayload<S extends boolean | null | undefined | FlagDefaultArgs> = $Result.GetResult<Prisma.$FlagPayload, S>

  type FlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlagCountAggregateInputType | true
    }

  export interface FlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flag'], meta: { name: 'Flag' } }
    /**
     * Find zero or one Flag that matches the filter.
     * @param {FlagFindUniqueArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlagFindUniqueArgs>(args: SelectSubset<T, FlagFindUniqueArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlagFindUniqueOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlagFindUniqueOrThrowArgs>(args: SelectSubset<T, FlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlagFindFirstArgs>(args?: SelectSubset<T, FlagFindFirstArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlagFindFirstOrThrowArgs>(args?: SelectSubset<T, FlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flags
     * const flags = await prisma.flag.findMany()
     * 
     * // Get first 10 Flags
     * const flags = await prisma.flag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flagWithIdOnly = await prisma.flag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlagFindManyArgs>(args?: SelectSubset<T, FlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flag.
     * @param {FlagCreateArgs} args - Arguments to create a Flag.
     * @example
     * // Create one Flag
     * const Flag = await prisma.flag.create({
     *   data: {
     *     // ... data to create a Flag
     *   }
     * })
     * 
     */
    create<T extends FlagCreateArgs>(args: SelectSubset<T, FlagCreateArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flags.
     * @param {FlagCreateManyArgs} args - Arguments to create many Flags.
     * @example
     * // Create many Flags
     * const flag = await prisma.flag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlagCreateManyArgs>(args?: SelectSubset<T, FlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flags and returns the data saved in the database.
     * @param {FlagCreateManyAndReturnArgs} args - Arguments to create many Flags.
     * @example
     * // Create many Flags
     * const flag = await prisma.flag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flags and only return the `id`
     * const flagWithIdOnly = await prisma.flag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlagCreateManyAndReturnArgs>(args?: SelectSubset<T, FlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flag.
     * @param {FlagDeleteArgs} args - Arguments to delete one Flag.
     * @example
     * // Delete one Flag
     * const Flag = await prisma.flag.delete({
     *   where: {
     *     // ... filter to delete one Flag
     *   }
     * })
     * 
     */
    delete<T extends FlagDeleteArgs>(args: SelectSubset<T, FlagDeleteArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flag.
     * @param {FlagUpdateArgs} args - Arguments to update one Flag.
     * @example
     * // Update one Flag
     * const flag = await prisma.flag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlagUpdateArgs>(args: SelectSubset<T, FlagUpdateArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flags.
     * @param {FlagDeleteManyArgs} args - Arguments to filter Flags to delete.
     * @example
     * // Delete a few Flags
     * const { count } = await prisma.flag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlagDeleteManyArgs>(args?: SelectSubset<T, FlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flags
     * const flag = await prisma.flag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlagUpdateManyArgs>(args: SelectSubset<T, FlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flags and returns the data updated in the database.
     * @param {FlagUpdateManyAndReturnArgs} args - Arguments to update many Flags.
     * @example
     * // Update many Flags
     * const flag = await prisma.flag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flags and only return the `id`
     * const flagWithIdOnly = await prisma.flag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlagUpdateManyAndReturnArgs>(args: SelectSubset<T, FlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flag.
     * @param {FlagUpsertArgs} args - Arguments to update or create a Flag.
     * @example
     * // Update or create a Flag
     * const flag = await prisma.flag.upsert({
     *   create: {
     *     // ... data to create a Flag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flag we want to update
     *   }
     * })
     */
    upsert<T extends FlagUpsertArgs>(args: SelectSubset<T, FlagUpsertArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagCountArgs} args - Arguments to filter Flags to count.
     * @example
     * // Count the number of Flags
     * const count = await prisma.flag.count({
     *   where: {
     *     // ... the filter for the Flags we want to count
     *   }
     * })
    **/
    count<T extends FlagCountArgs>(
      args?: Subset<T, FlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlagAggregateArgs>(args: Subset<T, FlagAggregateArgs>): Prisma.PrismaPromise<GetFlagAggregateType<T>>

    /**
     * Group by Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlagGroupByArgs['orderBy'] }
        : { orderBy?: FlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flag model
   */
  readonly fields: FlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ScamReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScamReportDefaultArgs<ExtArgs>>): Prisma__ScamReportClient<$Result.GetResult<Prisma.$ScamReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flag model
   */
  interface FlagFieldRefs {
    readonly id: FieldRef<"Flag", 'String'>
    readonly createdAt: FieldRef<"Flag", 'DateTime'>
    readonly reportId: FieldRef<"Flag", 'String'>
    readonly userId: FieldRef<"Flag", 'String'>
    readonly reason: FieldRef<"Flag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Flag findUnique
   */
  export type FlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag findUniqueOrThrow
   */
  export type FlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag findFirst
   */
  export type FlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Flag findFirstOrThrow
   */
  export type FlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Flag findMany
   */
  export type FlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flags to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Flag create
   */
  export type FlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to create a Flag.
     */
    data: XOR<FlagCreateInput, FlagUncheckedCreateInput>
  }

  /**
   * Flag createMany
   */
  export type FlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flags.
     */
    data: FlagCreateManyInput | FlagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flag createManyAndReturn
   */
  export type FlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * The data used to create many Flags.
     */
    data: FlagCreateManyInput | FlagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flag update
   */
  export type FlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to update a Flag.
     */
    data: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
    /**
     * Choose, which Flag to update.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag updateMany
   */
  export type FlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flags.
     */
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyInput>
    /**
     * Filter which Flags to update
     */
    where?: FlagWhereInput
    /**
     * Limit how many Flags to update.
     */
    limit?: number
  }

  /**
   * Flag updateManyAndReturn
   */
  export type FlagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * The data used to update Flags.
     */
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyInput>
    /**
     * Filter which Flags to update
     */
    where?: FlagWhereInput
    /**
     * Limit how many Flags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flag upsert
   */
  export type FlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The filter to search for the Flag to update in case it exists.
     */
    where: FlagWhereUniqueInput
    /**
     * In case the Flag found by the `where` argument doesn't exist, create a new Flag with this data.
     */
    create: XOR<FlagCreateInput, FlagUncheckedCreateInput>
    /**
     * In case the Flag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
  }

  /**
   * Flag delete
   */
  export type FlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter which Flag to delete.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag deleteMany
   */
  export type FlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flags to delete
     */
    where?: FlagWhereInput
    /**
     * Limit how many Flags to delete.
     */
    limit?: number
  }

  /**
   * Flag without action
   */
  export type FlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    name: string | null
    image: string | null
    notificationSettings: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    name: string | null
    image: string | null
    notificationSettings: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    name: number
    image: number
    notificationSettings: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    image?: true
    notificationSettings?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    image?: true
    notificationSettings?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    image?: true
    notificationSettings?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    name: string | null
    image: string | null
    notificationSettings: string
    createdAt: Date
    updatedAt: Date
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    image?: boolean
    notificationSettings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    comments?: boolean | User$commentsArgs<ExtArgs>
    flags?: boolean | User$flagsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    image?: boolean
    notificationSettings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    image?: boolean
    notificationSettings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    image?: boolean
    notificationSettings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "name" | "image" | "notificationSettings" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | User$commentsArgs<ExtArgs>
    flags?: boolean | User$flagsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      flags: Prisma.$FlagPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      name: string | null
      image: string | null
      notificationSettings: string
      createdAt: Date
      updatedAt: Date
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flags<T extends User$flagsArgs<ExtArgs> = {}>(args?: Subset<T, User$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly notificationSettings: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.flags
   */
  export type User$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    cursor?: FlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    data: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    data: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    data: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    data?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    data?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    data?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    data: string | null
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    data?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    data?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    data?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    data?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "data" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      data: string | null
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly data: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model OutcomeType
   */

  export type AggregateOutcomeType = {
    _count: OutcomeTypeCountAggregateOutputType | null
    _min: OutcomeTypeMinAggregateOutputType | null
    _max: OutcomeTypeMaxAggregateOutputType | null
  }

  export type OutcomeTypeMinAggregateOutputType = {
    id: string | null
    value: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutcomeTypeMaxAggregateOutputType = {
    id: string | null
    value: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutcomeTypeCountAggregateOutputType = {
    id: number
    value: number
    label: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OutcomeTypeMinAggregateInputType = {
    id?: true
    value?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutcomeTypeMaxAggregateInputType = {
    id?: true
    value?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutcomeTypeCountAggregateInputType = {
    id?: true
    value?: true
    label?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OutcomeTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutcomeType to aggregate.
     */
    where?: OutcomeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutcomeTypes to fetch.
     */
    orderBy?: OutcomeTypeOrderByWithRelationInput | OutcomeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutcomeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutcomeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutcomeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutcomeTypes
    **/
    _count?: true | OutcomeTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutcomeTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutcomeTypeMaxAggregateInputType
  }

  export type GetOutcomeTypeAggregateType<T extends OutcomeTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateOutcomeType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutcomeType[P]>
      : GetScalarType<T[P], AggregateOutcomeType[P]>
  }




  export type OutcomeTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutcomeTypeWhereInput
    orderBy?: OutcomeTypeOrderByWithAggregationInput | OutcomeTypeOrderByWithAggregationInput[]
    by: OutcomeTypeScalarFieldEnum[] | OutcomeTypeScalarFieldEnum
    having?: OutcomeTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutcomeTypeCountAggregateInputType | true
    _min?: OutcomeTypeMinAggregateInputType
    _max?: OutcomeTypeMaxAggregateInputType
  }

  export type OutcomeTypeGroupByOutputType = {
    id: string
    value: string
    label: string
    createdAt: Date
    updatedAt: Date
    _count: OutcomeTypeCountAggregateOutputType | null
    _min: OutcomeTypeMinAggregateOutputType | null
    _max: OutcomeTypeMaxAggregateOutputType | null
  }

  type GetOutcomeTypeGroupByPayload<T extends OutcomeTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutcomeTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutcomeTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutcomeTypeGroupByOutputType[P]>
            : GetScalarType<T[P], OutcomeTypeGroupByOutputType[P]>
        }
      >
    >


  export type OutcomeTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outcomeType"]>

  export type OutcomeTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outcomeType"]>

  export type OutcomeTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outcomeType"]>

  export type OutcomeTypeSelectScalar = {
    id?: boolean
    value?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OutcomeTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "label" | "createdAt" | "updatedAt", ExtArgs["result"]["outcomeType"]>

  export type $OutcomeTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutcomeType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      label: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["outcomeType"]>
    composites: {}
  }

  type OutcomeTypeGetPayload<S extends boolean | null | undefined | OutcomeTypeDefaultArgs> = $Result.GetResult<Prisma.$OutcomeTypePayload, S>

  type OutcomeTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutcomeTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutcomeTypeCountAggregateInputType | true
    }

  export interface OutcomeTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutcomeType'], meta: { name: 'OutcomeType' } }
    /**
     * Find zero or one OutcomeType that matches the filter.
     * @param {OutcomeTypeFindUniqueArgs} args - Arguments to find a OutcomeType
     * @example
     * // Get one OutcomeType
     * const outcomeType = await prisma.outcomeType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutcomeTypeFindUniqueArgs>(args: SelectSubset<T, OutcomeTypeFindUniqueArgs<ExtArgs>>): Prisma__OutcomeTypeClient<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutcomeType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutcomeTypeFindUniqueOrThrowArgs} args - Arguments to find a OutcomeType
     * @example
     * // Get one OutcomeType
     * const outcomeType = await prisma.outcomeType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutcomeTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, OutcomeTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutcomeTypeClient<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutcomeType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeTypeFindFirstArgs} args - Arguments to find a OutcomeType
     * @example
     * // Get one OutcomeType
     * const outcomeType = await prisma.outcomeType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutcomeTypeFindFirstArgs>(args?: SelectSubset<T, OutcomeTypeFindFirstArgs<ExtArgs>>): Prisma__OutcomeTypeClient<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutcomeType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeTypeFindFirstOrThrowArgs} args - Arguments to find a OutcomeType
     * @example
     * // Get one OutcomeType
     * const outcomeType = await prisma.outcomeType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutcomeTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, OutcomeTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutcomeTypeClient<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutcomeTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutcomeTypes
     * const outcomeTypes = await prisma.outcomeType.findMany()
     * 
     * // Get first 10 OutcomeTypes
     * const outcomeTypes = await prisma.outcomeType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outcomeTypeWithIdOnly = await prisma.outcomeType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutcomeTypeFindManyArgs>(args?: SelectSubset<T, OutcomeTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutcomeType.
     * @param {OutcomeTypeCreateArgs} args - Arguments to create a OutcomeType.
     * @example
     * // Create one OutcomeType
     * const OutcomeType = await prisma.outcomeType.create({
     *   data: {
     *     // ... data to create a OutcomeType
     *   }
     * })
     * 
     */
    create<T extends OutcomeTypeCreateArgs>(args: SelectSubset<T, OutcomeTypeCreateArgs<ExtArgs>>): Prisma__OutcomeTypeClient<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutcomeTypes.
     * @param {OutcomeTypeCreateManyArgs} args - Arguments to create many OutcomeTypes.
     * @example
     * // Create many OutcomeTypes
     * const outcomeType = await prisma.outcomeType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutcomeTypeCreateManyArgs>(args?: SelectSubset<T, OutcomeTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutcomeTypes and returns the data saved in the database.
     * @param {OutcomeTypeCreateManyAndReturnArgs} args - Arguments to create many OutcomeTypes.
     * @example
     * // Create many OutcomeTypes
     * const outcomeType = await prisma.outcomeType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutcomeTypes and only return the `id`
     * const outcomeTypeWithIdOnly = await prisma.outcomeType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutcomeTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, OutcomeTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutcomeType.
     * @param {OutcomeTypeDeleteArgs} args - Arguments to delete one OutcomeType.
     * @example
     * // Delete one OutcomeType
     * const OutcomeType = await prisma.outcomeType.delete({
     *   where: {
     *     // ... filter to delete one OutcomeType
     *   }
     * })
     * 
     */
    delete<T extends OutcomeTypeDeleteArgs>(args: SelectSubset<T, OutcomeTypeDeleteArgs<ExtArgs>>): Prisma__OutcomeTypeClient<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutcomeType.
     * @param {OutcomeTypeUpdateArgs} args - Arguments to update one OutcomeType.
     * @example
     * // Update one OutcomeType
     * const outcomeType = await prisma.outcomeType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutcomeTypeUpdateArgs>(args: SelectSubset<T, OutcomeTypeUpdateArgs<ExtArgs>>): Prisma__OutcomeTypeClient<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutcomeTypes.
     * @param {OutcomeTypeDeleteManyArgs} args - Arguments to filter OutcomeTypes to delete.
     * @example
     * // Delete a few OutcomeTypes
     * const { count } = await prisma.outcomeType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutcomeTypeDeleteManyArgs>(args?: SelectSubset<T, OutcomeTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutcomeTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutcomeTypes
     * const outcomeType = await prisma.outcomeType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutcomeTypeUpdateManyArgs>(args: SelectSubset<T, OutcomeTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutcomeTypes and returns the data updated in the database.
     * @param {OutcomeTypeUpdateManyAndReturnArgs} args - Arguments to update many OutcomeTypes.
     * @example
     * // Update many OutcomeTypes
     * const outcomeType = await prisma.outcomeType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutcomeTypes and only return the `id`
     * const outcomeTypeWithIdOnly = await prisma.outcomeType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutcomeTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, OutcomeTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutcomeType.
     * @param {OutcomeTypeUpsertArgs} args - Arguments to update or create a OutcomeType.
     * @example
     * // Update or create a OutcomeType
     * const outcomeType = await prisma.outcomeType.upsert({
     *   create: {
     *     // ... data to create a OutcomeType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutcomeType we want to update
     *   }
     * })
     */
    upsert<T extends OutcomeTypeUpsertArgs>(args: SelectSubset<T, OutcomeTypeUpsertArgs<ExtArgs>>): Prisma__OutcomeTypeClient<$Result.GetResult<Prisma.$OutcomeTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutcomeTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeTypeCountArgs} args - Arguments to filter OutcomeTypes to count.
     * @example
     * // Count the number of OutcomeTypes
     * const count = await prisma.outcomeType.count({
     *   where: {
     *     // ... the filter for the OutcomeTypes we want to count
     *   }
     * })
    **/
    count<T extends OutcomeTypeCountArgs>(
      args?: Subset<T, OutcomeTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutcomeTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutcomeType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutcomeTypeAggregateArgs>(args: Subset<T, OutcomeTypeAggregateArgs>): Prisma.PrismaPromise<GetOutcomeTypeAggregateType<T>>

    /**
     * Group by OutcomeType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutcomeTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutcomeTypeGroupByArgs['orderBy'] }
        : { orderBy?: OutcomeTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutcomeTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutcomeTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutcomeType model
   */
  readonly fields: OutcomeTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutcomeType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutcomeTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutcomeType model
   */
  interface OutcomeTypeFieldRefs {
    readonly id: FieldRef<"OutcomeType", 'String'>
    readonly value: FieldRef<"OutcomeType", 'String'>
    readonly label: FieldRef<"OutcomeType", 'String'>
    readonly createdAt: FieldRef<"OutcomeType", 'DateTime'>
    readonly updatedAt: FieldRef<"OutcomeType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutcomeType findUnique
   */
  export type OutcomeTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * Filter, which OutcomeType to fetch.
     */
    where: OutcomeTypeWhereUniqueInput
  }

  /**
   * OutcomeType findUniqueOrThrow
   */
  export type OutcomeTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * Filter, which OutcomeType to fetch.
     */
    where: OutcomeTypeWhereUniqueInput
  }

  /**
   * OutcomeType findFirst
   */
  export type OutcomeTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * Filter, which OutcomeType to fetch.
     */
    where?: OutcomeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutcomeTypes to fetch.
     */
    orderBy?: OutcomeTypeOrderByWithRelationInput | OutcomeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutcomeTypes.
     */
    cursor?: OutcomeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutcomeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutcomeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutcomeTypes.
     */
    distinct?: OutcomeTypeScalarFieldEnum | OutcomeTypeScalarFieldEnum[]
  }

  /**
   * OutcomeType findFirstOrThrow
   */
  export type OutcomeTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * Filter, which OutcomeType to fetch.
     */
    where?: OutcomeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutcomeTypes to fetch.
     */
    orderBy?: OutcomeTypeOrderByWithRelationInput | OutcomeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutcomeTypes.
     */
    cursor?: OutcomeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutcomeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutcomeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutcomeTypes.
     */
    distinct?: OutcomeTypeScalarFieldEnum | OutcomeTypeScalarFieldEnum[]
  }

  /**
   * OutcomeType findMany
   */
  export type OutcomeTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * Filter, which OutcomeTypes to fetch.
     */
    where?: OutcomeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutcomeTypes to fetch.
     */
    orderBy?: OutcomeTypeOrderByWithRelationInput | OutcomeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutcomeTypes.
     */
    cursor?: OutcomeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutcomeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutcomeTypes.
     */
    skip?: number
    distinct?: OutcomeTypeScalarFieldEnum | OutcomeTypeScalarFieldEnum[]
  }

  /**
   * OutcomeType create
   */
  export type OutcomeTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * The data needed to create a OutcomeType.
     */
    data: XOR<OutcomeTypeCreateInput, OutcomeTypeUncheckedCreateInput>
  }

  /**
   * OutcomeType createMany
   */
  export type OutcomeTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutcomeTypes.
     */
    data: OutcomeTypeCreateManyInput | OutcomeTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutcomeType createManyAndReturn
   */
  export type OutcomeTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * The data used to create many OutcomeTypes.
     */
    data: OutcomeTypeCreateManyInput | OutcomeTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutcomeType update
   */
  export type OutcomeTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * The data needed to update a OutcomeType.
     */
    data: XOR<OutcomeTypeUpdateInput, OutcomeTypeUncheckedUpdateInput>
    /**
     * Choose, which OutcomeType to update.
     */
    where: OutcomeTypeWhereUniqueInput
  }

  /**
   * OutcomeType updateMany
   */
  export type OutcomeTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutcomeTypes.
     */
    data: XOR<OutcomeTypeUpdateManyMutationInput, OutcomeTypeUncheckedUpdateManyInput>
    /**
     * Filter which OutcomeTypes to update
     */
    where?: OutcomeTypeWhereInput
    /**
     * Limit how many OutcomeTypes to update.
     */
    limit?: number
  }

  /**
   * OutcomeType updateManyAndReturn
   */
  export type OutcomeTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * The data used to update OutcomeTypes.
     */
    data: XOR<OutcomeTypeUpdateManyMutationInput, OutcomeTypeUncheckedUpdateManyInput>
    /**
     * Filter which OutcomeTypes to update
     */
    where?: OutcomeTypeWhereInput
    /**
     * Limit how many OutcomeTypes to update.
     */
    limit?: number
  }

  /**
   * OutcomeType upsert
   */
  export type OutcomeTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * The filter to search for the OutcomeType to update in case it exists.
     */
    where: OutcomeTypeWhereUniqueInput
    /**
     * In case the OutcomeType found by the `where` argument doesn't exist, create a new OutcomeType with this data.
     */
    create: XOR<OutcomeTypeCreateInput, OutcomeTypeUncheckedCreateInput>
    /**
     * In case the OutcomeType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutcomeTypeUpdateInput, OutcomeTypeUncheckedUpdateInput>
  }

  /**
   * OutcomeType delete
   */
  export type OutcomeTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
    /**
     * Filter which OutcomeType to delete.
     */
    where: OutcomeTypeWhereUniqueInput
  }

  /**
   * OutcomeType deleteMany
   */
  export type OutcomeTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutcomeTypes to delete
     */
    where?: OutcomeTypeWhereInput
    /**
     * Limit how many OutcomeTypes to delete.
     */
    limit?: number
  }

  /**
   * OutcomeType without action
   */
  export type OutcomeTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeType
     */
    select?: OutcomeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutcomeType
     */
    omit?: OutcomeTypeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScamReportScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    description: 'description',
    scammerDetails: 'scammerDetails',
    city: 'city',
    country: 'country',
    region: 'region',
    ipHash: 'ipHash',
    latitude: 'latitude',
    longitude: 'longitude',
    verified: 'verified',
    trustScore: 'trustScore',
    reportCount: 'reportCount',
    reporterName: 'reporterName',
    reporterEmail: 'reporterEmail',
    anonymous: 'anonymous',
    outcome: 'outcome',
    screenshots: 'screenshots',
    evidence: 'evidence',
    scamTypeId: 'scamTypeId'
  };

  export type ScamReportScalarFieldEnum = (typeof ScamReportScalarFieldEnum)[keyof typeof ScamReportScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    content: 'content',
    reportId: 'reportId',
    parentId: 'parentId',
    userId: 'userId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    userId: 'userId',
    voteType: 'voteType'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const WikiPageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    slug: 'slug',
    content: 'content',
    category: 'category',
    country: 'country',
    views: 'views',
    featured: 'featured'
  };

  export type WikiPageScalarFieldEnum = (typeof WikiPageScalarFieldEnum)[keyof typeof WikiPageScalarFieldEnum]


  export const SearchCacheScalarFieldEnum: {
    id: 'id',
    query: 'query',
    results: 'results',
    lastUpdated: 'lastUpdated',
    hitCount: 'hitCount'
  };

  export type SearchCacheScalarFieldEnum = (typeof SearchCacheScalarFieldEnum)[keyof typeof SearchCacheScalarFieldEnum]


  export const AIScamReportScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    summary: 'summary',
    averageRiskLevel: 'averageRiskLevel',
    averageFinancialImpact: 'averageFinancialImpact',
    category: 'category'
  };

  export type AIScamReportScalarFieldEnum = (typeof AIScamReportScalarFieldEnum)[keyof typeof AIScamReportScalarFieldEnum]


  export const ScamTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isApproved: 'isApproved',
    isUserCreated: 'isUserCreated',
    moderatedAt: 'moderatedAt',
    moderatedBy: 'moderatedBy'
  };

  export type ScamTypeScalarFieldEnum = (typeof ScamTypeScalarFieldEnum)[keyof typeof ScamTypeScalarFieldEnum]


  export const FlagScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    reportId: 'reportId',
    userId: 'userId',
    reason: 'reason'
  };

  export type FlagScalarFieldEnum = (typeof FlagScalarFieldEnum)[keyof typeof FlagScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    name: 'name',
    image: 'image',
    notificationSettings: 'notificationSettings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    data: 'data',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const OutcomeTypeScalarFieldEnum: {
    id: 'id',
    value: 'value',
    label: 'label',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OutcomeTypeScalarFieldEnum = (typeof OutcomeTypeScalarFieldEnum)[keyof typeof OutcomeTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ScamReportWhereInput = {
    AND?: ScamReportWhereInput | ScamReportWhereInput[]
    OR?: ScamReportWhereInput[]
    NOT?: ScamReportWhereInput | ScamReportWhereInput[]
    id?: StringFilter<"ScamReport"> | string
    createdAt?: DateTimeFilter<"ScamReport"> | Date | string
    updatedAt?: DateTimeFilter<"ScamReport"> | Date | string
    description?: StringFilter<"ScamReport"> | string
    scammerDetails?: JsonNullableFilter<"ScamReport">
    city?: StringNullableFilter<"ScamReport"> | string | null
    country?: StringNullableFilter<"ScamReport"> | string | null
    region?: StringNullableFilter<"ScamReport"> | string | null
    ipHash?: StringNullableFilter<"ScamReport"> | string | null
    latitude?: FloatNullableFilter<"ScamReport"> | number | null
    longitude?: FloatNullableFilter<"ScamReport"> | number | null
    verified?: BoolFilter<"ScamReport"> | boolean
    trustScore?: IntFilter<"ScamReport"> | number
    reportCount?: IntFilter<"ScamReport"> | number
    reporterName?: StringNullableFilter<"ScamReport"> | string | null
    reporterEmail?: StringNullableFilter<"ScamReport"> | string | null
    anonymous?: BoolFilter<"ScamReport"> | boolean
    outcome?: JsonNullableFilter<"ScamReport">
    screenshots?: StringNullableFilter<"ScamReport"> | string | null
    evidence?: StringNullableFilter<"ScamReport"> | string | null
    scamTypeId?: StringNullableFilter<"ScamReport"> | string | null
    comments?: CommentListRelationFilter
    flags?: FlagListRelationFilter
    scamType?: XOR<ScamTypeNullableScalarRelationFilter, ScamTypeWhereInput> | null
    votes?: VoteListRelationFilter
  }

  export type ScamReportOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    scammerDetails?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    ipHash?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    verified?: SortOrder
    trustScore?: SortOrder
    reportCount?: SortOrder
    reporterName?: SortOrderInput | SortOrder
    reporterEmail?: SortOrderInput | SortOrder
    anonymous?: SortOrder
    outcome?: SortOrderInput | SortOrder
    screenshots?: SortOrderInput | SortOrder
    evidence?: SortOrderInput | SortOrder
    scamTypeId?: SortOrderInput | SortOrder
    comments?: CommentOrderByRelationAggregateInput
    flags?: FlagOrderByRelationAggregateInput
    scamType?: ScamTypeOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type ScamReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScamReportWhereInput | ScamReportWhereInput[]
    OR?: ScamReportWhereInput[]
    NOT?: ScamReportWhereInput | ScamReportWhereInput[]
    createdAt?: DateTimeFilter<"ScamReport"> | Date | string
    updatedAt?: DateTimeFilter<"ScamReport"> | Date | string
    description?: StringFilter<"ScamReport"> | string
    scammerDetails?: JsonNullableFilter<"ScamReport">
    city?: StringNullableFilter<"ScamReport"> | string | null
    country?: StringNullableFilter<"ScamReport"> | string | null
    region?: StringNullableFilter<"ScamReport"> | string | null
    ipHash?: StringNullableFilter<"ScamReport"> | string | null
    latitude?: FloatNullableFilter<"ScamReport"> | number | null
    longitude?: FloatNullableFilter<"ScamReport"> | number | null
    verified?: BoolFilter<"ScamReport"> | boolean
    trustScore?: IntFilter<"ScamReport"> | number
    reportCount?: IntFilter<"ScamReport"> | number
    reporterName?: StringNullableFilter<"ScamReport"> | string | null
    reporterEmail?: StringNullableFilter<"ScamReport"> | string | null
    anonymous?: BoolFilter<"ScamReport"> | boolean
    outcome?: JsonNullableFilter<"ScamReport">
    screenshots?: StringNullableFilter<"ScamReport"> | string | null
    evidence?: StringNullableFilter<"ScamReport"> | string | null
    scamTypeId?: StringNullableFilter<"ScamReport"> | string | null
    comments?: CommentListRelationFilter
    flags?: FlagListRelationFilter
    scamType?: XOR<ScamTypeNullableScalarRelationFilter, ScamTypeWhereInput> | null
    votes?: VoteListRelationFilter
  }, "id">

  export type ScamReportOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    scammerDetails?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    ipHash?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    verified?: SortOrder
    trustScore?: SortOrder
    reportCount?: SortOrder
    reporterName?: SortOrderInput | SortOrder
    reporterEmail?: SortOrderInput | SortOrder
    anonymous?: SortOrder
    outcome?: SortOrderInput | SortOrder
    screenshots?: SortOrderInput | SortOrder
    evidence?: SortOrderInput | SortOrder
    scamTypeId?: SortOrderInput | SortOrder
    _count?: ScamReportCountOrderByAggregateInput
    _avg?: ScamReportAvgOrderByAggregateInput
    _max?: ScamReportMaxOrderByAggregateInput
    _min?: ScamReportMinOrderByAggregateInput
    _sum?: ScamReportSumOrderByAggregateInput
  }

  export type ScamReportScalarWhereWithAggregatesInput = {
    AND?: ScamReportScalarWhereWithAggregatesInput | ScamReportScalarWhereWithAggregatesInput[]
    OR?: ScamReportScalarWhereWithAggregatesInput[]
    NOT?: ScamReportScalarWhereWithAggregatesInput | ScamReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScamReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScamReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScamReport"> | Date | string
    description?: StringWithAggregatesFilter<"ScamReport"> | string
    scammerDetails?: JsonNullableWithAggregatesFilter<"ScamReport">
    city?: StringNullableWithAggregatesFilter<"ScamReport"> | string | null
    country?: StringNullableWithAggregatesFilter<"ScamReport"> | string | null
    region?: StringNullableWithAggregatesFilter<"ScamReport"> | string | null
    ipHash?: StringNullableWithAggregatesFilter<"ScamReport"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"ScamReport"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"ScamReport"> | number | null
    verified?: BoolWithAggregatesFilter<"ScamReport"> | boolean
    trustScore?: IntWithAggregatesFilter<"ScamReport"> | number
    reportCount?: IntWithAggregatesFilter<"ScamReport"> | number
    reporterName?: StringNullableWithAggregatesFilter<"ScamReport"> | string | null
    reporterEmail?: StringNullableWithAggregatesFilter<"ScamReport"> | string | null
    anonymous?: BoolWithAggregatesFilter<"ScamReport"> | boolean
    outcome?: JsonNullableWithAggregatesFilter<"ScamReport">
    screenshots?: StringNullableWithAggregatesFilter<"ScamReport"> | string | null
    evidence?: StringNullableWithAggregatesFilter<"ScamReport"> | string | null
    scamTypeId?: StringNullableWithAggregatesFilter<"ScamReport"> | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    content?: StringFilter<"Comment"> | string
    reportId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    userId?: StringNullableFilter<"Comment"> | string | null
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    report?: XOR<ScamReportScalarRelationFilter, ScamReportWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reportId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    report?: ScamReportOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    content?: StringFilter<"Comment"> | string
    reportId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    userId?: StringNullableFilter<"Comment"> | string | null
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    report?: XOR<ScamReportScalarRelationFilter, ScamReportWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reportId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    reportId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    reportId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    voteType?: StringFilter<"Vote"> | string
    report?: XOR<ScamReportScalarRelationFilter, ScamReportWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    voteType?: SortOrder
    report?: ScamReportOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reportId_userId?: VoteReportIdUserIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    reportId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    voteType?: StringFilter<"Vote"> | string
    report?: XOR<ScamReportScalarRelationFilter, ScamReportWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "reportId_userId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    voteType?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    reportId?: StringWithAggregatesFilter<"Vote"> | string
    userId?: StringWithAggregatesFilter<"Vote"> | string
    voteType?: StringWithAggregatesFilter<"Vote"> | string
  }

  export type WikiPageWhereInput = {
    AND?: WikiPageWhereInput | WikiPageWhereInput[]
    OR?: WikiPageWhereInput[]
    NOT?: WikiPageWhereInput | WikiPageWhereInput[]
    id?: StringFilter<"WikiPage"> | string
    createdAt?: DateTimeFilter<"WikiPage"> | Date | string
    updatedAt?: DateTimeFilter<"WikiPage"> | Date | string
    title?: StringFilter<"WikiPage"> | string
    slug?: StringFilter<"WikiPage"> | string
    content?: StringFilter<"WikiPage"> | string
    category?: StringFilter<"WikiPage"> | string
    country?: StringNullableFilter<"WikiPage"> | string | null
    views?: IntFilter<"WikiPage"> | number
    featured?: BoolFilter<"WikiPage"> | boolean
  }

  export type WikiPageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    category?: SortOrder
    country?: SortOrderInput | SortOrder
    views?: SortOrder
    featured?: SortOrder
  }

  export type WikiPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    slug?: string
    AND?: WikiPageWhereInput | WikiPageWhereInput[]
    OR?: WikiPageWhereInput[]
    NOT?: WikiPageWhereInput | WikiPageWhereInput[]
    createdAt?: DateTimeFilter<"WikiPage"> | Date | string
    updatedAt?: DateTimeFilter<"WikiPage"> | Date | string
    content?: StringFilter<"WikiPage"> | string
    category?: StringFilter<"WikiPage"> | string
    country?: StringNullableFilter<"WikiPage"> | string | null
    views?: IntFilter<"WikiPage"> | number
    featured?: BoolFilter<"WikiPage"> | boolean
  }, "id" | "title" | "slug">

  export type WikiPageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    category?: SortOrder
    country?: SortOrderInput | SortOrder
    views?: SortOrder
    featured?: SortOrder
    _count?: WikiPageCountOrderByAggregateInput
    _avg?: WikiPageAvgOrderByAggregateInput
    _max?: WikiPageMaxOrderByAggregateInput
    _min?: WikiPageMinOrderByAggregateInput
    _sum?: WikiPageSumOrderByAggregateInput
  }

  export type WikiPageScalarWhereWithAggregatesInput = {
    AND?: WikiPageScalarWhereWithAggregatesInput | WikiPageScalarWhereWithAggregatesInput[]
    OR?: WikiPageScalarWhereWithAggregatesInput[]
    NOT?: WikiPageScalarWhereWithAggregatesInput | WikiPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WikiPage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WikiPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WikiPage"> | Date | string
    title?: StringWithAggregatesFilter<"WikiPage"> | string
    slug?: StringWithAggregatesFilter<"WikiPage"> | string
    content?: StringWithAggregatesFilter<"WikiPage"> | string
    category?: StringWithAggregatesFilter<"WikiPage"> | string
    country?: StringNullableWithAggregatesFilter<"WikiPage"> | string | null
    views?: IntWithAggregatesFilter<"WikiPage"> | number
    featured?: BoolWithAggregatesFilter<"WikiPage"> | boolean
  }

  export type SearchCacheWhereInput = {
    AND?: SearchCacheWhereInput | SearchCacheWhereInput[]
    OR?: SearchCacheWhereInput[]
    NOT?: SearchCacheWhereInput | SearchCacheWhereInput[]
    id?: StringFilter<"SearchCache"> | string
    query?: StringFilter<"SearchCache"> | string
    results?: StringFilter<"SearchCache"> | string
    lastUpdated?: DateTimeFilter<"SearchCache"> | Date | string
    hitCount?: IntFilter<"SearchCache"> | number
  }

  export type SearchCacheOrderByWithRelationInput = {
    id?: SortOrder
    query?: SortOrder
    results?: SortOrder
    lastUpdated?: SortOrder
    hitCount?: SortOrder
  }

  export type SearchCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    query?: string
    AND?: SearchCacheWhereInput | SearchCacheWhereInput[]
    OR?: SearchCacheWhereInput[]
    NOT?: SearchCacheWhereInput | SearchCacheWhereInput[]
    results?: StringFilter<"SearchCache"> | string
    lastUpdated?: DateTimeFilter<"SearchCache"> | Date | string
    hitCount?: IntFilter<"SearchCache"> | number
  }, "id" | "query">

  export type SearchCacheOrderByWithAggregationInput = {
    id?: SortOrder
    query?: SortOrder
    results?: SortOrder
    lastUpdated?: SortOrder
    hitCount?: SortOrder
    _count?: SearchCacheCountOrderByAggregateInput
    _avg?: SearchCacheAvgOrderByAggregateInput
    _max?: SearchCacheMaxOrderByAggregateInput
    _min?: SearchCacheMinOrderByAggregateInput
    _sum?: SearchCacheSumOrderByAggregateInput
  }

  export type SearchCacheScalarWhereWithAggregatesInput = {
    AND?: SearchCacheScalarWhereWithAggregatesInput | SearchCacheScalarWhereWithAggregatesInput[]
    OR?: SearchCacheScalarWhereWithAggregatesInput[]
    NOT?: SearchCacheScalarWhereWithAggregatesInput | SearchCacheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchCache"> | string
    query?: StringWithAggregatesFilter<"SearchCache"> | string
    results?: StringWithAggregatesFilter<"SearchCache"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"SearchCache"> | Date | string
    hitCount?: IntWithAggregatesFilter<"SearchCache"> | number
  }

  export type AIScamReportWhereInput = {
    AND?: AIScamReportWhereInput | AIScamReportWhereInput[]
    OR?: AIScamReportWhereInput[]
    NOT?: AIScamReportWhereInput | AIScamReportWhereInput[]
    id?: StringFilter<"AIScamReport"> | string
    createdAt?: DateTimeFilter<"AIScamReport"> | Date | string
    updatedAt?: DateTimeFilter<"AIScamReport"> | Date | string
    summary?: StringFilter<"AIScamReport"> | string
    averageRiskLevel?: StringFilter<"AIScamReport"> | string
    averageFinancialImpact?: FloatFilter<"AIScamReport"> | number
    category?: StringFilter<"AIScamReport"> | string
  }

  export type AIScamReportOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    summary?: SortOrder
    averageRiskLevel?: SortOrder
    averageFinancialImpact?: SortOrder
    category?: SortOrder
  }

  export type AIScamReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIScamReportWhereInput | AIScamReportWhereInput[]
    OR?: AIScamReportWhereInput[]
    NOT?: AIScamReportWhereInput | AIScamReportWhereInput[]
    createdAt?: DateTimeFilter<"AIScamReport"> | Date | string
    updatedAt?: DateTimeFilter<"AIScamReport"> | Date | string
    summary?: StringFilter<"AIScamReport"> | string
    averageRiskLevel?: StringFilter<"AIScamReport"> | string
    averageFinancialImpact?: FloatFilter<"AIScamReport"> | number
    category?: StringFilter<"AIScamReport"> | string
  }, "id">

  export type AIScamReportOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    summary?: SortOrder
    averageRiskLevel?: SortOrder
    averageFinancialImpact?: SortOrder
    category?: SortOrder
    _count?: AIScamReportCountOrderByAggregateInput
    _avg?: AIScamReportAvgOrderByAggregateInput
    _max?: AIScamReportMaxOrderByAggregateInput
    _min?: AIScamReportMinOrderByAggregateInput
    _sum?: AIScamReportSumOrderByAggregateInput
  }

  export type AIScamReportScalarWhereWithAggregatesInput = {
    AND?: AIScamReportScalarWhereWithAggregatesInput | AIScamReportScalarWhereWithAggregatesInput[]
    OR?: AIScamReportScalarWhereWithAggregatesInput[]
    NOT?: AIScamReportScalarWhereWithAggregatesInput | AIScamReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIScamReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AIScamReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIScamReport"> | Date | string
    summary?: StringWithAggregatesFilter<"AIScamReport"> | string
    averageRiskLevel?: StringWithAggregatesFilter<"AIScamReport"> | string
    averageFinancialImpact?: FloatWithAggregatesFilter<"AIScamReport"> | number
    category?: StringWithAggregatesFilter<"AIScamReport"> | string
  }

  export type ScamTypeWhereInput = {
    AND?: ScamTypeWhereInput | ScamTypeWhereInput[]
    OR?: ScamTypeWhereInput[]
    NOT?: ScamTypeWhereInput | ScamTypeWhereInput[]
    id?: StringFilter<"ScamType"> | string
    name?: StringFilter<"ScamType"> | string
    createdAt?: DateTimeFilter<"ScamType"> | Date | string
    createdBy?: StringNullableFilter<"ScamType"> | string | null
    isApproved?: BoolFilter<"ScamType"> | boolean
    isUserCreated?: BoolFilter<"ScamType"> | boolean
    moderatedAt?: DateTimeNullableFilter<"ScamType"> | Date | string | null
    moderatedBy?: StringNullableFilter<"ScamType"> | string | null
    reports?: ScamReportListRelationFilter
  }

  export type ScamTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    isUserCreated?: SortOrder
    moderatedAt?: SortOrderInput | SortOrder
    moderatedBy?: SortOrderInput | SortOrder
    reports?: ScamReportOrderByRelationAggregateInput
  }

  export type ScamTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ScamTypeWhereInput | ScamTypeWhereInput[]
    OR?: ScamTypeWhereInput[]
    NOT?: ScamTypeWhereInput | ScamTypeWhereInput[]
    createdAt?: DateTimeFilter<"ScamType"> | Date | string
    createdBy?: StringNullableFilter<"ScamType"> | string | null
    isApproved?: BoolFilter<"ScamType"> | boolean
    isUserCreated?: BoolFilter<"ScamType"> | boolean
    moderatedAt?: DateTimeNullableFilter<"ScamType"> | Date | string | null
    moderatedBy?: StringNullableFilter<"ScamType"> | string | null
    reports?: ScamReportListRelationFilter
  }, "id" | "name">

  export type ScamTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    isUserCreated?: SortOrder
    moderatedAt?: SortOrderInput | SortOrder
    moderatedBy?: SortOrderInput | SortOrder
    _count?: ScamTypeCountOrderByAggregateInput
    _max?: ScamTypeMaxOrderByAggregateInput
    _min?: ScamTypeMinOrderByAggregateInput
  }

  export type ScamTypeScalarWhereWithAggregatesInput = {
    AND?: ScamTypeScalarWhereWithAggregatesInput | ScamTypeScalarWhereWithAggregatesInput[]
    OR?: ScamTypeScalarWhereWithAggregatesInput[]
    NOT?: ScamTypeScalarWhereWithAggregatesInput | ScamTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScamType"> | string
    name?: StringWithAggregatesFilter<"ScamType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScamType"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"ScamType"> | string | null
    isApproved?: BoolWithAggregatesFilter<"ScamType"> | boolean
    isUserCreated?: BoolWithAggregatesFilter<"ScamType"> | boolean
    moderatedAt?: DateTimeNullableWithAggregatesFilter<"ScamType"> | Date | string | null
    moderatedBy?: StringNullableWithAggregatesFilter<"ScamType"> | string | null
  }

  export type FlagWhereInput = {
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    id?: StringFilter<"Flag"> | string
    createdAt?: DateTimeFilter<"Flag"> | Date | string
    reportId?: StringFilter<"Flag"> | string
    userId?: StringFilter<"Flag"> | string
    reason?: StringNullableFilter<"Flag"> | string | null
    report?: XOR<ScamReportScalarRelationFilter, ScamReportWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlagOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    reason?: SortOrderInput | SortOrder
    report?: ScamReportOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FlagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reportId_userId?: FlagReportIdUserIdCompoundUniqueInput
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    createdAt?: DateTimeFilter<"Flag"> | Date | string
    reportId?: StringFilter<"Flag"> | string
    userId?: StringFilter<"Flag"> | string
    reason?: StringNullableFilter<"Flag"> | string | null
    report?: XOR<ScamReportScalarRelationFilter, ScamReportWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "reportId_userId">

  export type FlagOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: FlagCountOrderByAggregateInput
    _max?: FlagMaxOrderByAggregateInput
    _min?: FlagMinOrderByAggregateInput
  }

  export type FlagScalarWhereWithAggregatesInput = {
    AND?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    OR?: FlagScalarWhereWithAggregatesInput[]
    NOT?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Flag"> | Date | string
    reportId?: StringWithAggregatesFilter<"Flag"> | string
    userId?: StringWithAggregatesFilter<"Flag"> | string
    reason?: StringNullableWithAggregatesFilter<"Flag"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    notificationSettings?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringFilter<"User"> | string
    comments?: CommentListRelationFilter
    flags?: FlagListRelationFilter
    notifications?: NotificationListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    notificationSettings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    flags?: FlagOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    notificationSettings?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringFilter<"User"> | string
    comments?: CommentListRelationFilter
    flags?: FlagListRelationFilter
    notifications?: NotificationListRelationFilter
    votes?: VoteListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    notificationSettings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    notificationSettings?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    data?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    data?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    data?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    data?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    data?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type OutcomeTypeWhereInput = {
    AND?: OutcomeTypeWhereInput | OutcomeTypeWhereInput[]
    OR?: OutcomeTypeWhereInput[]
    NOT?: OutcomeTypeWhereInput | OutcomeTypeWhereInput[]
    id?: StringFilter<"OutcomeType"> | string
    value?: StringFilter<"OutcomeType"> | string
    label?: StringFilter<"OutcomeType"> | string
    createdAt?: DateTimeFilter<"OutcomeType"> | Date | string
    updatedAt?: DateTimeFilter<"OutcomeType"> | Date | string
  }

  export type OutcomeTypeOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutcomeTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    value?: string
    AND?: OutcomeTypeWhereInput | OutcomeTypeWhereInput[]
    OR?: OutcomeTypeWhereInput[]
    NOT?: OutcomeTypeWhereInput | OutcomeTypeWhereInput[]
    label?: StringFilter<"OutcomeType"> | string
    createdAt?: DateTimeFilter<"OutcomeType"> | Date | string
    updatedAt?: DateTimeFilter<"OutcomeType"> | Date | string
  }, "id" | "value">

  export type OutcomeTypeOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OutcomeTypeCountOrderByAggregateInput
    _max?: OutcomeTypeMaxOrderByAggregateInput
    _min?: OutcomeTypeMinOrderByAggregateInput
  }

  export type OutcomeTypeScalarWhereWithAggregatesInput = {
    AND?: OutcomeTypeScalarWhereWithAggregatesInput | OutcomeTypeScalarWhereWithAggregatesInput[]
    OR?: OutcomeTypeScalarWhereWithAggregatesInput[]
    NOT?: OutcomeTypeScalarWhereWithAggregatesInput | OutcomeTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutcomeType"> | string
    value?: StringWithAggregatesFilter<"OutcomeType"> | string
    label?: StringWithAggregatesFilter<"OutcomeType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OutcomeType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OutcomeType"> | Date | string
  }

  export type ScamReportCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    comments?: CommentCreateNestedManyWithoutReportInput
    flags?: FlagCreateNestedManyWithoutReportInput
    scamType?: ScamTypeCreateNestedOneWithoutReportsInput
    votes?: VoteCreateNestedManyWithoutReportInput
  }

  export type ScamReportUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    scamTypeId?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutReportInput
    flags?: FlagUncheckedCreateNestedManyWithoutReportInput
    votes?: VoteUncheckedCreateNestedManyWithoutReportInput
  }

  export type ScamReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateManyWithoutReportNestedInput
    flags?: FlagUpdateManyWithoutReportNestedInput
    scamType?: ScamTypeUpdateOneWithoutReportsNestedInput
    votes?: VoteUpdateManyWithoutReportNestedInput
  }

  export type ScamReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    scamTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutReportNestedInput
    flags?: FlagUncheckedUpdateManyWithoutReportNestedInput
    votes?: VoteUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ScamReportCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    scamTypeId?: string | null
  }

  export type ScamReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScamReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    scamTypeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateInput = {
    id?: string
    createdAt?: Date | string
    content: string
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    report: ScamReportCreateNestedOneWithoutCommentsInput
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reportId: string
    parentId?: string | null
    userId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    report?: ScamReportUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reportId: string
    parentId?: string | null
    userId?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoteCreateInput = {
    id?: string
    voteType: string
    report: ScamReportCreateNestedOneWithoutVotesInput
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    reportId: string
    userId: string
    voteType: string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    report?: ScamReportUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyInput = {
    id?: string
    reportId: string
    userId: string
    voteType: string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
  }

  export type WikiPageCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    content: string
    category: string
    country?: string | null
    views?: number
    featured?: boolean
  }

  export type WikiPageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    content: string
    category: string
    country?: string | null
    views?: number
    featured?: boolean
  }

  export type WikiPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WikiPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WikiPageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    content: string
    category: string
    country?: string | null
    views?: number
    featured?: boolean
  }

  export type WikiPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WikiPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SearchCacheCreateInput = {
    id?: string
    query: string
    results: string
    lastUpdated?: Date | string
    hitCount?: number
  }

  export type SearchCacheUncheckedCreateInput = {
    id?: string
    query: string
    results: string
    lastUpdated?: Date | string
    hitCount?: number
  }

  export type SearchCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    hitCount?: IntFieldUpdateOperationsInput | number
  }

  export type SearchCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    hitCount?: IntFieldUpdateOperationsInput | number
  }

  export type SearchCacheCreateManyInput = {
    id?: string
    query: string
    results: string
    lastUpdated?: Date | string
    hitCount?: number
  }

  export type SearchCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    hitCount?: IntFieldUpdateOperationsInput | number
  }

  export type SearchCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    hitCount?: IntFieldUpdateOperationsInput | number
  }

  export type AIScamReportCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    summary: string
    averageRiskLevel: string
    averageFinancialImpact: number
    category: string
  }

  export type AIScamReportUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    summary: string
    averageRiskLevel: string
    averageFinancialImpact: number
    category: string
  }

  export type AIScamReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    averageRiskLevel?: StringFieldUpdateOperationsInput | string
    averageFinancialImpact?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type AIScamReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    averageRiskLevel?: StringFieldUpdateOperationsInput | string
    averageFinancialImpact?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type AIScamReportCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    summary: string
    averageRiskLevel: string
    averageFinancialImpact: number
    category: string
  }

  export type AIScamReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    averageRiskLevel?: StringFieldUpdateOperationsInput | string
    averageFinancialImpact?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type AIScamReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    averageRiskLevel?: StringFieldUpdateOperationsInput | string
    averageFinancialImpact?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ScamTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    isApproved?: boolean
    isUserCreated?: boolean
    moderatedAt?: Date | string | null
    moderatedBy?: string | null
    reports?: ScamReportCreateNestedManyWithoutScamTypeInput
  }

  export type ScamTypeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    isApproved?: boolean
    isUserCreated?: boolean
    moderatedAt?: Date | string | null
    moderatedBy?: string | null
    reports?: ScamReportUncheckedCreateNestedManyWithoutScamTypeInput
  }

  export type ScamTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isUserCreated?: BoolFieldUpdateOperationsInput | boolean
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: ScamReportUpdateManyWithoutScamTypeNestedInput
  }

  export type ScamTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isUserCreated?: BoolFieldUpdateOperationsInput | boolean
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reports?: ScamReportUncheckedUpdateManyWithoutScamTypeNestedInput
  }

  export type ScamTypeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    isApproved?: boolean
    isUserCreated?: boolean
    moderatedAt?: Date | string | null
    moderatedBy?: string | null
  }

  export type ScamTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isUserCreated?: BoolFieldUpdateOperationsInput | boolean
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScamTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isUserCreated?: BoolFieldUpdateOperationsInput | boolean
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlagCreateInput = {
    id?: string
    createdAt?: Date | string
    reason?: string | null
    report: ScamReportCreateNestedOneWithoutFlagsInput
    user: UserCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    reportId: string
    userId: string
    reason?: string | null
  }

  export type FlagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    report?: ScamReportUpdateOneRequiredWithoutFlagsNestedInput
    user?: UserUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlagCreateManyInput = {
    id?: string
    createdAt?: Date | string
    reportId: string
    userId: string
    reason?: string | null
  }

  export type FlagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    comments?: CommentCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    data?: string | null
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    data?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    data?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeTypeCreateInput = {
    id?: string
    value: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutcomeTypeUncheckedCreateInput = {
    id?: string
    value: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutcomeTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeTypeCreateManyInput = {
    id?: string
    value: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutcomeTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type FlagListRelationFilter = {
    every?: FlagWhereInput
    some?: FlagWhereInput
    none?: FlagWhereInput
  }

  export type ScamTypeNullableScalarRelationFilter = {
    is?: ScamTypeWhereInput | null
    isNot?: ScamTypeWhereInput | null
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScamReportCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    scammerDetails?: SortOrder
    city?: SortOrder
    country?: SortOrder
    region?: SortOrder
    ipHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    verified?: SortOrder
    trustScore?: SortOrder
    reportCount?: SortOrder
    reporterName?: SortOrder
    reporterEmail?: SortOrder
    anonymous?: SortOrder
    outcome?: SortOrder
    screenshots?: SortOrder
    evidence?: SortOrder
    scamTypeId?: SortOrder
  }

  export type ScamReportAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    trustScore?: SortOrder
    reportCount?: SortOrder
  }

  export type ScamReportMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    city?: SortOrder
    country?: SortOrder
    region?: SortOrder
    ipHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    verified?: SortOrder
    trustScore?: SortOrder
    reportCount?: SortOrder
    reporterName?: SortOrder
    reporterEmail?: SortOrder
    anonymous?: SortOrder
    screenshots?: SortOrder
    evidence?: SortOrder
    scamTypeId?: SortOrder
  }

  export type ScamReportMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    city?: SortOrder
    country?: SortOrder
    region?: SortOrder
    ipHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    verified?: SortOrder
    trustScore?: SortOrder
    reportCount?: SortOrder
    reporterName?: SortOrder
    reporterEmail?: SortOrder
    anonymous?: SortOrder
    screenshots?: SortOrder
    evidence?: SortOrder
    scamTypeId?: SortOrder
  }

  export type ScamReportSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    trustScore?: SortOrder
    reportCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type ScamReportScalarRelationFilter = {
    is?: ScamReportWhereInput
    isNot?: ScamReportWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reportId?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reportId?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reportId?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VoteReportIdUserIdCompoundUniqueInput = {
    reportId: string
    userId: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    voteType?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    voteType?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    voteType?: SortOrder
  }

  export type WikiPageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    category?: SortOrder
    country?: SortOrder
    views?: SortOrder
    featured?: SortOrder
  }

  export type WikiPageAvgOrderByAggregateInput = {
    views?: SortOrder
  }

  export type WikiPageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    category?: SortOrder
    country?: SortOrder
    views?: SortOrder
    featured?: SortOrder
  }

  export type WikiPageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    category?: SortOrder
    country?: SortOrder
    views?: SortOrder
    featured?: SortOrder
  }

  export type WikiPageSumOrderByAggregateInput = {
    views?: SortOrder
  }

  export type SearchCacheCountOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    results?: SortOrder
    lastUpdated?: SortOrder
    hitCount?: SortOrder
  }

  export type SearchCacheAvgOrderByAggregateInput = {
    hitCount?: SortOrder
  }

  export type SearchCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    results?: SortOrder
    lastUpdated?: SortOrder
    hitCount?: SortOrder
  }

  export type SearchCacheMinOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    results?: SortOrder
    lastUpdated?: SortOrder
    hitCount?: SortOrder
  }

  export type SearchCacheSumOrderByAggregateInput = {
    hitCount?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AIScamReportCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    summary?: SortOrder
    averageRiskLevel?: SortOrder
    averageFinancialImpact?: SortOrder
    category?: SortOrder
  }

  export type AIScamReportAvgOrderByAggregateInput = {
    averageFinancialImpact?: SortOrder
  }

  export type AIScamReportMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    summary?: SortOrder
    averageRiskLevel?: SortOrder
    averageFinancialImpact?: SortOrder
    category?: SortOrder
  }

  export type AIScamReportMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    summary?: SortOrder
    averageRiskLevel?: SortOrder
    averageFinancialImpact?: SortOrder
    category?: SortOrder
  }

  export type AIScamReportSumOrderByAggregateInput = {
    averageFinancialImpact?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ScamReportListRelationFilter = {
    every?: ScamReportWhereInput
    some?: ScamReportWhereInput
    none?: ScamReportWhereInput
  }

  export type ScamReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScamTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isApproved?: SortOrder
    isUserCreated?: SortOrder
    moderatedAt?: SortOrder
    moderatedBy?: SortOrder
  }

  export type ScamTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isApproved?: SortOrder
    isUserCreated?: SortOrder
    moderatedAt?: SortOrder
    moderatedBy?: SortOrder
  }

  export type ScamTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isApproved?: SortOrder
    isUserCreated?: SortOrder
    moderatedAt?: SortOrder
    moderatedBy?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FlagReportIdUserIdCompoundUniqueInput = {
    reportId: string
    userId: string
  }

  export type FlagCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
  }

  export type FlagMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
  }

  export type FlagMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reportId?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    notificationSettings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    notificationSettings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    notificationSettings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type OutcomeTypeCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutcomeTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutcomeTypeMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentCreateNestedManyWithoutReportInput = {
    create?: XOR<CommentCreateWithoutReportInput, CommentUncheckedCreateWithoutReportInput> | CommentCreateWithoutReportInput[] | CommentUncheckedCreateWithoutReportInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReportInput | CommentCreateOrConnectWithoutReportInput[]
    createMany?: CommentCreateManyReportInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FlagCreateNestedManyWithoutReportInput = {
    create?: XOR<FlagCreateWithoutReportInput, FlagUncheckedCreateWithoutReportInput> | FlagCreateWithoutReportInput[] | FlagUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutReportInput | FlagCreateOrConnectWithoutReportInput[]
    createMany?: FlagCreateManyReportInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type ScamTypeCreateNestedOneWithoutReportsInput = {
    create?: XOR<ScamTypeCreateWithoutReportsInput, ScamTypeUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ScamTypeCreateOrConnectWithoutReportsInput
    connect?: ScamTypeWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutReportInput = {
    create?: XOR<VoteCreateWithoutReportInput, VoteUncheckedCreateWithoutReportInput> | VoteCreateWithoutReportInput[] | VoteUncheckedCreateWithoutReportInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutReportInput | VoteCreateOrConnectWithoutReportInput[]
    createMany?: VoteCreateManyReportInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<CommentCreateWithoutReportInput, CommentUncheckedCreateWithoutReportInput> | CommentCreateWithoutReportInput[] | CommentUncheckedCreateWithoutReportInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReportInput | CommentCreateOrConnectWithoutReportInput[]
    createMany?: CommentCreateManyReportInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FlagUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<FlagCreateWithoutReportInput, FlagUncheckedCreateWithoutReportInput> | FlagCreateWithoutReportInput[] | FlagUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutReportInput | FlagCreateOrConnectWithoutReportInput[]
    createMany?: FlagCreateManyReportInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<VoteCreateWithoutReportInput, VoteUncheckedCreateWithoutReportInput> | VoteCreateWithoutReportInput[] | VoteUncheckedCreateWithoutReportInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutReportInput | VoteCreateOrConnectWithoutReportInput[]
    createMany?: VoteCreateManyReportInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUpdateManyWithoutReportNestedInput = {
    create?: XOR<CommentCreateWithoutReportInput, CommentUncheckedCreateWithoutReportInput> | CommentCreateWithoutReportInput[] | CommentUncheckedCreateWithoutReportInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReportInput | CommentCreateOrConnectWithoutReportInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReportInput | CommentUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: CommentCreateManyReportInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReportInput | CommentUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReportInput | CommentUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FlagUpdateManyWithoutReportNestedInput = {
    create?: XOR<FlagCreateWithoutReportInput, FlagUncheckedCreateWithoutReportInput> | FlagCreateWithoutReportInput[] | FlagUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutReportInput | FlagCreateOrConnectWithoutReportInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutReportInput | FlagUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: FlagCreateManyReportInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutReportInput | FlagUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutReportInput | FlagUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type ScamTypeUpdateOneWithoutReportsNestedInput = {
    create?: XOR<ScamTypeCreateWithoutReportsInput, ScamTypeUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ScamTypeCreateOrConnectWithoutReportsInput
    upsert?: ScamTypeUpsertWithoutReportsInput
    disconnect?: ScamTypeWhereInput | boolean
    delete?: ScamTypeWhereInput | boolean
    connect?: ScamTypeWhereUniqueInput
    update?: XOR<XOR<ScamTypeUpdateToOneWithWhereWithoutReportsInput, ScamTypeUpdateWithoutReportsInput>, ScamTypeUncheckedUpdateWithoutReportsInput>
  }

  export type VoteUpdateManyWithoutReportNestedInput = {
    create?: XOR<VoteCreateWithoutReportInput, VoteUncheckedCreateWithoutReportInput> | VoteCreateWithoutReportInput[] | VoteUncheckedCreateWithoutReportInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutReportInput | VoteCreateOrConnectWithoutReportInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutReportInput | VoteUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: VoteCreateManyReportInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutReportInput | VoteUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutReportInput | VoteUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<CommentCreateWithoutReportInput, CommentUncheckedCreateWithoutReportInput> | CommentCreateWithoutReportInput[] | CommentUncheckedCreateWithoutReportInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReportInput | CommentCreateOrConnectWithoutReportInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReportInput | CommentUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: CommentCreateManyReportInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReportInput | CommentUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReportInput | CommentUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FlagUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<FlagCreateWithoutReportInput, FlagUncheckedCreateWithoutReportInput> | FlagCreateWithoutReportInput[] | FlagUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutReportInput | FlagCreateOrConnectWithoutReportInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutReportInput | FlagUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: FlagCreateManyReportInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutReportInput | FlagUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutReportInput | FlagUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<VoteCreateWithoutReportInput, VoteUncheckedCreateWithoutReportInput> | VoteCreateWithoutReportInput[] | VoteUncheckedCreateWithoutReportInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutReportInput | VoteCreateOrConnectWithoutReportInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutReportInput | VoteUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: VoteCreateManyReportInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutReportInput | VoteUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutReportInput | VoteUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ScamReportCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ScamReportCreateWithoutCommentsInput, ScamReportUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ScamReportCreateOrConnectWithoutCommentsInput
    connect?: ScamReportWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ScamReportUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ScamReportCreateWithoutCommentsInput, ScamReportUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ScamReportCreateOrConnectWithoutCommentsInput
    upsert?: ScamReportUpsertWithoutCommentsInput
    connect?: ScamReportWhereUniqueInput
    update?: XOR<XOR<ScamReportUpdateToOneWithWhereWithoutCommentsInput, ScamReportUpdateWithoutCommentsInput>, ScamReportUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ScamReportCreateNestedOneWithoutVotesInput = {
    create?: XOR<ScamReportCreateWithoutVotesInput, ScamReportUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ScamReportCreateOrConnectWithoutVotesInput
    connect?: ScamReportWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type ScamReportUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<ScamReportCreateWithoutVotesInput, ScamReportUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ScamReportCreateOrConnectWithoutVotesInput
    upsert?: ScamReportUpsertWithoutVotesInput
    connect?: ScamReportWhereUniqueInput
    update?: XOR<XOR<ScamReportUpdateToOneWithWhereWithoutVotesInput, ScamReportUpdateWithoutVotesInput>, ScamReportUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScamReportCreateNestedManyWithoutScamTypeInput = {
    create?: XOR<ScamReportCreateWithoutScamTypeInput, ScamReportUncheckedCreateWithoutScamTypeInput> | ScamReportCreateWithoutScamTypeInput[] | ScamReportUncheckedCreateWithoutScamTypeInput[]
    connectOrCreate?: ScamReportCreateOrConnectWithoutScamTypeInput | ScamReportCreateOrConnectWithoutScamTypeInput[]
    createMany?: ScamReportCreateManyScamTypeInputEnvelope
    connect?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
  }

  export type ScamReportUncheckedCreateNestedManyWithoutScamTypeInput = {
    create?: XOR<ScamReportCreateWithoutScamTypeInput, ScamReportUncheckedCreateWithoutScamTypeInput> | ScamReportCreateWithoutScamTypeInput[] | ScamReportUncheckedCreateWithoutScamTypeInput[]
    connectOrCreate?: ScamReportCreateOrConnectWithoutScamTypeInput | ScamReportCreateOrConnectWithoutScamTypeInput[]
    createMany?: ScamReportCreateManyScamTypeInputEnvelope
    connect?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ScamReportUpdateManyWithoutScamTypeNestedInput = {
    create?: XOR<ScamReportCreateWithoutScamTypeInput, ScamReportUncheckedCreateWithoutScamTypeInput> | ScamReportCreateWithoutScamTypeInput[] | ScamReportUncheckedCreateWithoutScamTypeInput[]
    connectOrCreate?: ScamReportCreateOrConnectWithoutScamTypeInput | ScamReportCreateOrConnectWithoutScamTypeInput[]
    upsert?: ScamReportUpsertWithWhereUniqueWithoutScamTypeInput | ScamReportUpsertWithWhereUniqueWithoutScamTypeInput[]
    createMany?: ScamReportCreateManyScamTypeInputEnvelope
    set?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
    disconnect?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
    delete?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
    connect?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
    update?: ScamReportUpdateWithWhereUniqueWithoutScamTypeInput | ScamReportUpdateWithWhereUniqueWithoutScamTypeInput[]
    updateMany?: ScamReportUpdateManyWithWhereWithoutScamTypeInput | ScamReportUpdateManyWithWhereWithoutScamTypeInput[]
    deleteMany?: ScamReportScalarWhereInput | ScamReportScalarWhereInput[]
  }

  export type ScamReportUncheckedUpdateManyWithoutScamTypeNestedInput = {
    create?: XOR<ScamReportCreateWithoutScamTypeInput, ScamReportUncheckedCreateWithoutScamTypeInput> | ScamReportCreateWithoutScamTypeInput[] | ScamReportUncheckedCreateWithoutScamTypeInput[]
    connectOrCreate?: ScamReportCreateOrConnectWithoutScamTypeInput | ScamReportCreateOrConnectWithoutScamTypeInput[]
    upsert?: ScamReportUpsertWithWhereUniqueWithoutScamTypeInput | ScamReportUpsertWithWhereUniqueWithoutScamTypeInput[]
    createMany?: ScamReportCreateManyScamTypeInputEnvelope
    set?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
    disconnect?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
    delete?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
    connect?: ScamReportWhereUniqueInput | ScamReportWhereUniqueInput[]
    update?: ScamReportUpdateWithWhereUniqueWithoutScamTypeInput | ScamReportUpdateWithWhereUniqueWithoutScamTypeInput[]
    updateMany?: ScamReportUpdateManyWithWhereWithoutScamTypeInput | ScamReportUpdateManyWithWhereWithoutScamTypeInput[]
    deleteMany?: ScamReportScalarWhereInput | ScamReportScalarWhereInput[]
  }

  export type ScamReportCreateNestedOneWithoutFlagsInput = {
    create?: XOR<ScamReportCreateWithoutFlagsInput, ScamReportUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: ScamReportCreateOrConnectWithoutFlagsInput
    connect?: ScamReportWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlagsInput = {
    create?: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlagsInput
    connect?: UserWhereUniqueInput
  }

  export type ScamReportUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<ScamReportCreateWithoutFlagsInput, ScamReportUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: ScamReportCreateOrConnectWithoutFlagsInput
    upsert?: ScamReportUpsertWithoutFlagsInput
    connect?: ScamReportWhereUniqueInput
    update?: XOR<XOR<ScamReportUpdateToOneWithWhereWithoutFlagsInput, ScamReportUpdateWithoutFlagsInput>, ScamReportUncheckedUpdateWithoutFlagsInput>
  }

  export type UserUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlagsInput
    upsert?: UserUpsertWithoutFlagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlagsInput, UserUpdateWithoutFlagsInput>, UserUncheckedUpdateWithoutFlagsInput>
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FlagCreateNestedManyWithoutUserInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FlagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FlagUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutUserInput | FlagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutUserInput | FlagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutUserInput | FlagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FlagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutUserInput | FlagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutUserInput | FlagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutUserInput | FlagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CommentCreateWithoutReportInput = {
    id?: string
    createdAt?: Date | string
    content: string
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutReportInput = {
    id?: string
    createdAt?: Date | string
    content: string
    parentId?: string | null
    userId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutReportInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutReportInput, CommentUncheckedCreateWithoutReportInput>
  }

  export type CommentCreateManyReportInputEnvelope = {
    data: CommentCreateManyReportInput | CommentCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type FlagCreateWithoutReportInput = {
    id?: string
    createdAt?: Date | string
    reason?: string | null
    user: UserCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateWithoutReportInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    reason?: string | null
  }

  export type FlagCreateOrConnectWithoutReportInput = {
    where: FlagWhereUniqueInput
    create: XOR<FlagCreateWithoutReportInput, FlagUncheckedCreateWithoutReportInput>
  }

  export type FlagCreateManyReportInputEnvelope = {
    data: FlagCreateManyReportInput | FlagCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type ScamTypeCreateWithoutReportsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    isApproved?: boolean
    isUserCreated?: boolean
    moderatedAt?: Date | string | null
    moderatedBy?: string | null
  }

  export type ScamTypeUncheckedCreateWithoutReportsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    isApproved?: boolean
    isUserCreated?: boolean
    moderatedAt?: Date | string | null
    moderatedBy?: string | null
  }

  export type ScamTypeCreateOrConnectWithoutReportsInput = {
    where: ScamTypeWhereUniqueInput
    create: XOR<ScamTypeCreateWithoutReportsInput, ScamTypeUncheckedCreateWithoutReportsInput>
  }

  export type VoteCreateWithoutReportInput = {
    id?: string
    voteType: string
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutReportInput = {
    id?: string
    userId: string
    voteType: string
  }

  export type VoteCreateOrConnectWithoutReportInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutReportInput, VoteUncheckedCreateWithoutReportInput>
  }

  export type VoteCreateManyReportInputEnvelope = {
    data: VoteCreateManyReportInput | VoteCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutReportInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutReportInput, CommentUncheckedUpdateWithoutReportInput>
    create: XOR<CommentCreateWithoutReportInput, CommentUncheckedCreateWithoutReportInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutReportInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutReportInput, CommentUncheckedUpdateWithoutReportInput>
  }

  export type CommentUpdateManyWithWhereWithoutReportInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutReportInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    content?: StringFilter<"Comment"> | string
    reportId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    userId?: StringNullableFilter<"Comment"> | string | null
  }

  export type FlagUpsertWithWhereUniqueWithoutReportInput = {
    where: FlagWhereUniqueInput
    update: XOR<FlagUpdateWithoutReportInput, FlagUncheckedUpdateWithoutReportInput>
    create: XOR<FlagCreateWithoutReportInput, FlagUncheckedCreateWithoutReportInput>
  }

  export type FlagUpdateWithWhereUniqueWithoutReportInput = {
    where: FlagWhereUniqueInput
    data: XOR<FlagUpdateWithoutReportInput, FlagUncheckedUpdateWithoutReportInput>
  }

  export type FlagUpdateManyWithWhereWithoutReportInput = {
    where: FlagScalarWhereInput
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyWithoutReportInput>
  }

  export type FlagScalarWhereInput = {
    AND?: FlagScalarWhereInput | FlagScalarWhereInput[]
    OR?: FlagScalarWhereInput[]
    NOT?: FlagScalarWhereInput | FlagScalarWhereInput[]
    id?: StringFilter<"Flag"> | string
    createdAt?: DateTimeFilter<"Flag"> | Date | string
    reportId?: StringFilter<"Flag"> | string
    userId?: StringFilter<"Flag"> | string
    reason?: StringNullableFilter<"Flag"> | string | null
  }

  export type ScamTypeUpsertWithoutReportsInput = {
    update: XOR<ScamTypeUpdateWithoutReportsInput, ScamTypeUncheckedUpdateWithoutReportsInput>
    create: XOR<ScamTypeCreateWithoutReportsInput, ScamTypeUncheckedCreateWithoutReportsInput>
    where?: ScamTypeWhereInput
  }

  export type ScamTypeUpdateToOneWithWhereWithoutReportsInput = {
    where?: ScamTypeWhereInput
    data: XOR<ScamTypeUpdateWithoutReportsInput, ScamTypeUncheckedUpdateWithoutReportsInput>
  }

  export type ScamTypeUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isUserCreated?: BoolFieldUpdateOperationsInput | boolean
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScamTypeUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isUserCreated?: BoolFieldUpdateOperationsInput | boolean
    moderatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moderatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoteUpsertWithWhereUniqueWithoutReportInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutReportInput, VoteUncheckedUpdateWithoutReportInput>
    create: XOR<VoteCreateWithoutReportInput, VoteUncheckedCreateWithoutReportInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutReportInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutReportInput, VoteUncheckedUpdateWithoutReportInput>
  }

  export type VoteUpdateManyWithWhereWithoutReportInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutReportInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    reportId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    voteType?: StringFilter<"Vote"> | string
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    createdAt?: Date | string
    content: string
    parent?: CommentCreateNestedOneWithoutRepliesInput
    report: ScamReportCreateNestedOneWithoutCommentsInput
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reportId: string
    parentId?: string | null
    userId?: string | null
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    createdAt?: Date | string
    content: string
    replies?: CommentCreateNestedManyWithoutParentInput
    report: ScamReportCreateNestedOneWithoutCommentsInput
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reportId: string
    userId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ScamReportCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    flags?: FlagCreateNestedManyWithoutReportInput
    scamType?: ScamTypeCreateNestedOneWithoutReportsInput
    votes?: VoteCreateNestedManyWithoutReportInput
  }

  export type ScamReportUncheckedCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    scamTypeId?: string | null
    flags?: FlagUncheckedCreateNestedManyWithoutReportInput
    votes?: VoteUncheckedCreateNestedManyWithoutReportInput
  }

  export type ScamReportCreateOrConnectWithoutCommentsInput = {
    where: ScamReportWhereUniqueInput
    create: XOR<ScamReportCreateWithoutCommentsInput, ScamReportUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    flags?: FlagCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    report?: ScamReportUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type ScamReportUpsertWithoutCommentsInput = {
    update: XOR<ScamReportUpdateWithoutCommentsInput, ScamReportUncheckedUpdateWithoutCommentsInput>
    create: XOR<ScamReportCreateWithoutCommentsInput, ScamReportUncheckedCreateWithoutCommentsInput>
    where?: ScamReportWhereInput
  }

  export type ScamReportUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ScamReportWhereInput
    data: XOR<ScamReportUpdateWithoutCommentsInput, ScamReportUncheckedUpdateWithoutCommentsInput>
  }

  export type ScamReportUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: FlagUpdateManyWithoutReportNestedInput
    scamType?: ScamTypeUpdateOneWithoutReportsNestedInput
    votes?: VoteUpdateManyWithoutReportNestedInput
  }

  export type ScamReportUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    scamTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    flags?: FlagUncheckedUpdateManyWithoutReportNestedInput
    votes?: VoteUncheckedUpdateManyWithoutReportNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    flags?: FlagUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ScamReportCreateWithoutVotesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    comments?: CommentCreateNestedManyWithoutReportInput
    flags?: FlagCreateNestedManyWithoutReportInput
    scamType?: ScamTypeCreateNestedOneWithoutReportsInput
  }

  export type ScamReportUncheckedCreateWithoutVotesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    scamTypeId?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutReportInput
    flags?: FlagUncheckedCreateNestedManyWithoutReportInput
  }

  export type ScamReportCreateOrConnectWithoutVotesInput = {
    where: ScamReportWhereUniqueInput
    create: XOR<ScamReportCreateWithoutVotesInput, ScamReportUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    comments?: CommentCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type ScamReportUpsertWithoutVotesInput = {
    update: XOR<ScamReportUpdateWithoutVotesInput, ScamReportUncheckedUpdateWithoutVotesInput>
    create: XOR<ScamReportCreateWithoutVotesInput, ScamReportUncheckedCreateWithoutVotesInput>
    where?: ScamReportWhereInput
  }

  export type ScamReportUpdateToOneWithWhereWithoutVotesInput = {
    where?: ScamReportWhereInput
    data: XOR<ScamReportUpdateWithoutVotesInput, ScamReportUncheckedUpdateWithoutVotesInput>
  }

  export type ScamReportUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateManyWithoutReportNestedInput
    flags?: FlagUpdateManyWithoutReportNestedInput
    scamType?: ScamTypeUpdateOneWithoutReportsNestedInput
  }

  export type ScamReportUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    scamTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutReportNestedInput
    flags?: FlagUncheckedUpdateManyWithoutReportNestedInput
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ScamReportCreateWithoutScamTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    comments?: CommentCreateNestedManyWithoutReportInput
    flags?: FlagCreateNestedManyWithoutReportInput
    votes?: VoteCreateNestedManyWithoutReportInput
  }

  export type ScamReportUncheckedCreateWithoutScamTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutReportInput
    flags?: FlagUncheckedCreateNestedManyWithoutReportInput
    votes?: VoteUncheckedCreateNestedManyWithoutReportInput
  }

  export type ScamReportCreateOrConnectWithoutScamTypeInput = {
    where: ScamReportWhereUniqueInput
    create: XOR<ScamReportCreateWithoutScamTypeInput, ScamReportUncheckedCreateWithoutScamTypeInput>
  }

  export type ScamReportCreateManyScamTypeInputEnvelope = {
    data: ScamReportCreateManyScamTypeInput | ScamReportCreateManyScamTypeInput[]
    skipDuplicates?: boolean
  }

  export type ScamReportUpsertWithWhereUniqueWithoutScamTypeInput = {
    where: ScamReportWhereUniqueInput
    update: XOR<ScamReportUpdateWithoutScamTypeInput, ScamReportUncheckedUpdateWithoutScamTypeInput>
    create: XOR<ScamReportCreateWithoutScamTypeInput, ScamReportUncheckedCreateWithoutScamTypeInput>
  }

  export type ScamReportUpdateWithWhereUniqueWithoutScamTypeInput = {
    where: ScamReportWhereUniqueInput
    data: XOR<ScamReportUpdateWithoutScamTypeInput, ScamReportUncheckedUpdateWithoutScamTypeInput>
  }

  export type ScamReportUpdateManyWithWhereWithoutScamTypeInput = {
    where: ScamReportScalarWhereInput
    data: XOR<ScamReportUpdateManyMutationInput, ScamReportUncheckedUpdateManyWithoutScamTypeInput>
  }

  export type ScamReportScalarWhereInput = {
    AND?: ScamReportScalarWhereInput | ScamReportScalarWhereInput[]
    OR?: ScamReportScalarWhereInput[]
    NOT?: ScamReportScalarWhereInput | ScamReportScalarWhereInput[]
    id?: StringFilter<"ScamReport"> | string
    createdAt?: DateTimeFilter<"ScamReport"> | Date | string
    updatedAt?: DateTimeFilter<"ScamReport"> | Date | string
    description?: StringFilter<"ScamReport"> | string
    scammerDetails?: JsonNullableFilter<"ScamReport">
    city?: StringNullableFilter<"ScamReport"> | string | null
    country?: StringNullableFilter<"ScamReport"> | string | null
    region?: StringNullableFilter<"ScamReport"> | string | null
    ipHash?: StringNullableFilter<"ScamReport"> | string | null
    latitude?: FloatNullableFilter<"ScamReport"> | number | null
    longitude?: FloatNullableFilter<"ScamReport"> | number | null
    verified?: BoolFilter<"ScamReport"> | boolean
    trustScore?: IntFilter<"ScamReport"> | number
    reportCount?: IntFilter<"ScamReport"> | number
    reporterName?: StringNullableFilter<"ScamReport"> | string | null
    reporterEmail?: StringNullableFilter<"ScamReport"> | string | null
    anonymous?: BoolFilter<"ScamReport"> | boolean
    outcome?: JsonNullableFilter<"ScamReport">
    screenshots?: StringNullableFilter<"ScamReport"> | string | null
    evidence?: StringNullableFilter<"ScamReport"> | string | null
    scamTypeId?: StringNullableFilter<"ScamReport"> | string | null
  }

  export type ScamReportCreateWithoutFlagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    comments?: CommentCreateNestedManyWithoutReportInput
    scamType?: ScamTypeCreateNestedOneWithoutReportsInput
    votes?: VoteCreateNestedManyWithoutReportInput
  }

  export type ScamReportUncheckedCreateWithoutFlagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
    scamTypeId?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutReportInput
    votes?: VoteUncheckedCreateNestedManyWithoutReportInput
  }

  export type ScamReportCreateOrConnectWithoutFlagsInput = {
    where: ScamReportWhereUniqueInput
    create: XOR<ScamReportCreateWithoutFlagsInput, ScamReportUncheckedCreateWithoutFlagsInput>
  }

  export type UserCreateWithoutFlagsInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlagsInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
  }

  export type ScamReportUpsertWithoutFlagsInput = {
    update: XOR<ScamReportUpdateWithoutFlagsInput, ScamReportUncheckedUpdateWithoutFlagsInput>
    create: XOR<ScamReportCreateWithoutFlagsInput, ScamReportUncheckedCreateWithoutFlagsInput>
    where?: ScamReportWhereInput
  }

  export type ScamReportUpdateToOneWithWhereWithoutFlagsInput = {
    where?: ScamReportWhereInput
    data: XOR<ScamReportUpdateWithoutFlagsInput, ScamReportUncheckedUpdateWithoutFlagsInput>
  }

  export type ScamReportUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateManyWithoutReportNestedInput
    scamType?: ScamTypeUpdateOneWithoutReportsNestedInput
    votes?: VoteUpdateManyWithoutReportNestedInput
  }

  export type ScamReportUncheckedUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    scamTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutReportNestedInput
    votes?: VoteUncheckedUpdateManyWithoutReportNestedInput
  }

  export type UserUpsertWithoutFlagsInput = {
    update: XOR<UserUpdateWithoutFlagsInput, UserUncheckedUpdateWithoutFlagsInput>
    create: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlagsInput, UserUncheckedUpdateWithoutFlagsInput>
  }

  export type UserUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    content: string
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    report: ScamReportCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reportId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlagCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    reason?: string | null
    report: ScamReportCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    reportId: string
    reason?: string | null
  }

  export type FlagCreateOrConnectWithoutUserInput = {
    where: FlagWhereUniqueInput
    create: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput>
  }

  export type FlagCreateManyUserInputEnvelope = {
    data: FlagCreateManyUserInput | FlagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    data?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    data?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutUserInput = {
    id?: string
    voteType: string
    report: ScamReportCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutUserInput = {
    id?: string
    reportId: string
    voteType: string
  }

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type FlagUpsertWithWhereUniqueWithoutUserInput = {
    where: FlagWhereUniqueInput
    update: XOR<FlagUpdateWithoutUserInput, FlagUncheckedUpdateWithoutUserInput>
    create: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput>
  }

  export type FlagUpdateWithWhereUniqueWithoutUserInput = {
    where: FlagWhereUniqueInput
    data: XOR<FlagUpdateWithoutUserInput, FlagUncheckedUpdateWithoutUserInput>
  }

  export type FlagUpdateManyWithWhereWithoutUserInput = {
    where: FlagScalarWhereInput
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    data?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    comments?: CommentCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    username: string
    name?: string | null
    image?: string | null
    notificationSettings?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notificationSettings?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentCreateManyReportInput = {
    id?: string
    createdAt?: Date | string
    content: string
    parentId?: string | null
    userId?: string | null
  }

  export type FlagCreateManyReportInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    reason?: string | null
  }

  export type VoteCreateManyReportInput = {
    id?: string
    userId: string
    voteType: string
  }

  export type CommentUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlagUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlagUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoteUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyParentInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reportId: string
    userId?: string | null
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    replies?: CommentUpdateManyWithoutParentNestedInput
    report?: ScamReportUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScamReportCreateManyScamTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: string | null
    country?: string | null
    region?: string | null
    ipHash?: string | null
    latitude?: number | null
    longitude?: number | null
    verified?: boolean
    trustScore?: number
    reportCount?: number
    reporterName?: string | null
    reporterEmail?: string | null
    anonymous?: boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: string | null
    evidence?: string | null
  }

  export type ScamReportUpdateWithoutScamTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateManyWithoutReportNestedInput
    flags?: FlagUpdateManyWithoutReportNestedInput
    votes?: VoteUpdateManyWithoutReportNestedInput
  }

  export type ScamReportUncheckedUpdateWithoutScamTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutReportNestedInput
    flags?: FlagUncheckedUpdateManyWithoutReportNestedInput
    votes?: VoteUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ScamReportUncheckedUpdateManyWithoutScamTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    scammerDetails?: NullableJsonNullValueInput | InputJsonValue
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    trustScore?: IntFieldUpdateOperationsInput | number
    reportCount?: IntFieldUpdateOperationsInput | number
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    anonymous?: BoolFieldUpdateOperationsInput | boolean
    outcome?: NullableJsonNullValueInput | InputJsonValue
    screenshots?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reportId: string
    parentId?: string | null
  }

  export type FlagCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    reportId: string
    reason?: string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    data?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type VoteCreateManyUserInput = {
    id?: string
    reportId: string
    voteType: string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    report?: ScamReportUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlagUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    report?: ScamReportUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlagUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
    report?: ScamReportUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    voteType?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}