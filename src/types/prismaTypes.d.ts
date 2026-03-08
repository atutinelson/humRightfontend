
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TipPlan
 * 
 */
export type TipPlan = $Result.DefaultSelection<Prisma.$TipPlanPayload>
/**
 * Model Fixture
 * 
 */
export type Fixture = $Result.DefaultSelection<Prisma.$FixturePayload>
/**
 * Model Jackpot
 * 
 */
export type Jackpot = $Result.DefaultSelection<Prisma.$JackpotPayload>
/**
 * Model Prediction
 * 
 */
export type Prediction = $Result.DefaultSelection<Prisma.$PredictionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model TipAccessLog
 * 
 */
export type TipAccessLog = $Result.DefaultSelection<Prisma.$TipAccessLogPayload>
/**
 * Model TipResult
 * 
 */
export type TipResult = $Result.DefaultSelection<Prisma.$TipResultPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MatchStatus: {
  SCHEDULED: 'SCHEDULED',
  PLAYED: 'PLAYED',
  CANCELLED: 'CANCELLED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const TipOutcome: {
  WIN: 'WIN',
  LOSS: 'LOSS',
  VOID: 'VOID'
};

export type TipOutcome = (typeof TipOutcome)[keyof typeof TipOutcome]


export const Role: {
  ADMIN: 'ADMIN',
  REGULAR: 'REGULAR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type TipOutcome = $Enums.TipOutcome

export const TipOutcome: typeof $Enums.TipOutcome

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TipPlans
 * const tipPlans = await prisma.tipPlan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more TipPlans
   * const tipPlans = await prisma.tipPlan.findMany()
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
   * `prisma.tipPlan`: Exposes CRUD operations for the **TipPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipPlans
    * const tipPlans = await prisma.tipPlan.findMany()
    * ```
    */
  get tipPlan(): Prisma.TipPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fixture`: Exposes CRUD operations for the **Fixture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fixtures
    * const fixtures = await prisma.fixture.findMany()
    * ```
    */
  get fixture(): Prisma.FixtureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jackpot`: Exposes CRUD operations for the **Jackpot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jackpots
    * const jackpots = await prisma.jackpot.findMany()
    * ```
    */
  get jackpot(): Prisma.JackpotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prediction`: Exposes CRUD operations for the **Prediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Predictions
    * const predictions = await prisma.prediction.findMany()
    * ```
    */
  get prediction(): Prisma.PredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipAccessLog`: Exposes CRUD operations for the **TipAccessLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipAccessLogs
    * const tipAccessLogs = await prisma.tipAccessLog.findMany()
    * ```
    */
  get tipAccessLog(): Prisma.TipAccessLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipResult`: Exposes CRUD operations for the **TipResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipResults
    * const tipResults = await prisma.tipResult.findMany()
    * ```
    */
  get tipResult(): Prisma.TipResultDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    TipPlan: 'TipPlan',
    Fixture: 'Fixture',
    Jackpot: 'Jackpot',
    Prediction: 'Prediction',
    Payment: 'Payment',
    TipAccessLog: 'TipAccessLog',
    TipResult: 'TipResult',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
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
      modelProps: "tipPlan" | "fixture" | "jackpot" | "prediction" | "payment" | "tipAccessLog" | "tipResult" | "user" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TipPlan: {
        payload: Prisma.$TipPlanPayload<ExtArgs>
        fields: Prisma.TipPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPlanPayload>
          }
          findFirst: {
            args: Prisma.TipPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPlanPayload>
          }
          findMany: {
            args: Prisma.TipPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPlanPayload>[]
          }
          create: {
            args: Prisma.TipPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPlanPayload>
          }
          createMany: {
            args: Prisma.TipPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPlanPayload>
          }
          update: {
            args: Prisma.TipPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPlanPayload>
          }
          deleteMany: {
            args: Prisma.TipPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPlanPayload>
          }
          aggregate: {
            args: Prisma.TipPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipPlan>
          }
          groupBy: {
            args: Prisma.TipPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TipPlanCountAggregateOutputType> | number
          }
        }
      }
      Fixture: {
        payload: Prisma.$FixturePayload<ExtArgs>
        fields: Prisma.FixtureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FixtureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FixtureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findFirst: {
            args: Prisma.FixtureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FixtureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findMany: {
            args: Prisma.FixtureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          create: {
            args: Prisma.FixtureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          createMany: {
            args: Prisma.FixtureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FixtureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          update: {
            args: Prisma.FixtureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          deleteMany: {
            args: Prisma.FixtureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FixtureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FixtureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          aggregate: {
            args: Prisma.FixtureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFixture>
          }
          groupBy: {
            args: Prisma.FixtureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FixtureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FixtureCountArgs<ExtArgs>
            result: $Utils.Optional<FixtureCountAggregateOutputType> | number
          }
        }
      }
      Jackpot: {
        payload: Prisma.$JackpotPayload<ExtArgs>
        fields: Prisma.JackpotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JackpotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JackpotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JackpotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JackpotPayload>
          }
          findFirst: {
            args: Prisma.JackpotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JackpotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JackpotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JackpotPayload>
          }
          findMany: {
            args: Prisma.JackpotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JackpotPayload>[]
          }
          create: {
            args: Prisma.JackpotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JackpotPayload>
          }
          createMany: {
            args: Prisma.JackpotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JackpotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JackpotPayload>
          }
          update: {
            args: Prisma.JackpotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JackpotPayload>
          }
          deleteMany: {
            args: Prisma.JackpotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JackpotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JackpotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JackpotPayload>
          }
          aggregate: {
            args: Prisma.JackpotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJackpot>
          }
          groupBy: {
            args: Prisma.JackpotGroupByArgs<ExtArgs>
            result: $Utils.Optional<JackpotGroupByOutputType>[]
          }
          count: {
            args: Prisma.JackpotCountArgs<ExtArgs>
            result: $Utils.Optional<JackpotCountAggregateOutputType> | number
          }
        }
      }
      Prediction: {
        payload: Prisma.$PredictionPayload<ExtArgs>
        fields: Prisma.PredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findFirst: {
            args: Prisma.PredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findMany: {
            args: Prisma.PredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          create: {
            args: Prisma.PredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          createMany: {
            args: Prisma.PredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          update: {
            args: Prisma.PredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          deleteMany: {
            args: Prisma.PredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          aggregate: {
            args: Prisma.PredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrediction>
          }
          groupBy: {
            args: Prisma.PredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredictionCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      TipAccessLog: {
        payload: Prisma.$TipAccessLogPayload<ExtArgs>
        fields: Prisma.TipAccessLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipAccessLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipAccessLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipAccessLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipAccessLogPayload>
          }
          findFirst: {
            args: Prisma.TipAccessLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipAccessLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipAccessLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipAccessLogPayload>
          }
          findMany: {
            args: Prisma.TipAccessLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipAccessLogPayload>[]
          }
          create: {
            args: Prisma.TipAccessLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipAccessLogPayload>
          }
          createMany: {
            args: Prisma.TipAccessLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipAccessLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipAccessLogPayload>
          }
          update: {
            args: Prisma.TipAccessLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipAccessLogPayload>
          }
          deleteMany: {
            args: Prisma.TipAccessLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipAccessLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipAccessLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipAccessLogPayload>
          }
          aggregate: {
            args: Prisma.TipAccessLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipAccessLog>
          }
          groupBy: {
            args: Prisma.TipAccessLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipAccessLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipAccessLogCountArgs<ExtArgs>
            result: $Utils.Optional<TipAccessLogCountAggregateOutputType> | number
          }
        }
      }
      TipResult: {
        payload: Prisma.$TipResultPayload<ExtArgs>
        fields: Prisma.TipResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipResultPayload>
          }
          findFirst: {
            args: Prisma.TipResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipResultPayload>
          }
          findMany: {
            args: Prisma.TipResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipResultPayload>[]
          }
          create: {
            args: Prisma.TipResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipResultPayload>
          }
          createMany: {
            args: Prisma.TipResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipResultPayload>
          }
          update: {
            args: Prisma.TipResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipResultPayload>
          }
          deleteMany: {
            args: Prisma.TipResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipResultPayload>
          }
          aggregate: {
            args: Prisma.TipResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipResult>
          }
          groupBy: {
            args: Prisma.TipResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipResultCountArgs<ExtArgs>
            result: $Utils.Optional<TipResultCountAggregateOutputType> | number
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    tipPlan?: TipPlanOmit
    fixture?: FixtureOmit
    jackpot?: JackpotOmit
    prediction?: PredictionOmit
    payment?: PaymentOmit
    tipAccessLog?: TipAccessLogOmit
    tipResult?: TipResultOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TipPlanCountOutputType
   */

  export type TipPlanCountOutputType = {
    predictions: number
    payments: number
  }

  export type TipPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | TipPlanCountOutputTypeCountPredictionsArgs
    payments?: boolean | TipPlanCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * TipPlanCountOutputType without action
   */
  export type TipPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlanCountOutputType
     */
    select?: TipPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipPlanCountOutputType without action
   */
  export type TipPlanCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
  }

  /**
   * TipPlanCountOutputType without action
   */
  export type TipPlanCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type FixtureCountOutputType
   */

  export type FixtureCountOutputType = {
    predictions: number
    jackpot: number
  }

  export type FixtureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | FixtureCountOutputTypeCountPredictionsArgs
    jackpot?: boolean | FixtureCountOutputTypeCountJackpotArgs
  }

  // Custom InputTypes
  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixtureCountOutputType
     */
    select?: FixtureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
  }

  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeCountJackpotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JackpotWhereInput
  }


  /**
   * Count Type PredictionCountOutputType
   */

  export type PredictionCountOutputType = {
    payments: number
  }

  export type PredictionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PredictionCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PredictionCountOutputType without action
   */
  export type PredictionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionCountOutputType
     */
    select?: PredictionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PredictionCountOutputType without action
   */
  export type PredictionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    tipAccessLogs: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipAccessLogs?: boolean | PaymentCountOutputTypeCountTipAccessLogsArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountTipAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipAccessLogWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TipPlan
   */

  export type AggregateTipPlan = {
    _count: TipPlanCountAggregateOutputType | null
    _avg: TipPlanAvgAggregateOutputType | null
    _sum: TipPlanSumAggregateOutputType | null
    _min: TipPlanMinAggregateOutputType | null
    _max: TipPlanMaxAggregateOutputType | null
  }

  export type TipPlanAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type TipPlanSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type TipPlanMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    oddRange: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipPlanMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    oddRange: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipPlanCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    oddRange: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TipPlanAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type TipPlanSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type TipPlanMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    oddRange?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipPlanMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    oddRange?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipPlanCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    oddRange?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TipPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipPlan to aggregate.
     */
    where?: TipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipPlans to fetch.
     */
    orderBy?: TipPlanOrderByWithRelationInput | TipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipPlans
    **/
    _count?: true | TipPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipPlanMaxAggregateInputType
  }

  export type GetTipPlanAggregateType<T extends TipPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTipPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipPlan[P]>
      : GetScalarType<T[P], AggregateTipPlan[P]>
  }




  export type TipPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipPlanWhereInput
    orderBy?: TipPlanOrderByWithAggregationInput | TipPlanOrderByWithAggregationInput[]
    by: TipPlanScalarFieldEnum[] | TipPlanScalarFieldEnum
    having?: TipPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipPlanCountAggregateInputType | true
    _avg?: TipPlanAvgAggregateInputType
    _sum?: TipPlanSumAggregateInputType
    _min?: TipPlanMinAggregateInputType
    _max?: TipPlanMaxAggregateInputType
  }

  export type TipPlanGroupByOutputType = {
    id: number
    name: string
    price: number
    description: string
    oddRange: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TipPlanCountAggregateOutputType | null
    _avg: TipPlanAvgAggregateOutputType | null
    _sum: TipPlanSumAggregateOutputType | null
    _min: TipPlanMinAggregateOutputType | null
    _max: TipPlanMaxAggregateOutputType | null
  }

  type GetTipPlanGroupByPayload<T extends TipPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TipPlanGroupByOutputType[P]>
        }
      >
    >


  export type TipPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    oddRange?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    predictions?: boolean | TipPlan$predictionsArgs<ExtArgs>
    payments?: boolean | TipPlan$paymentsArgs<ExtArgs>
    _count?: boolean | TipPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipPlan"]>



  export type TipPlanSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    oddRange?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TipPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "oddRange" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["tipPlan"]>
  export type TipPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | TipPlan$predictionsArgs<ExtArgs>
    payments?: boolean | TipPlan$paymentsArgs<ExtArgs>
    _count?: boolean | TipPlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipPlan"
    objects: {
      predictions: Prisma.$PredictionPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      description: string
      oddRange: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tipPlan"]>
    composites: {}
  }

  type TipPlanGetPayload<S extends boolean | null | undefined | TipPlanDefaultArgs> = $Result.GetResult<Prisma.$TipPlanPayload, S>

  type TipPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipPlanCountAggregateInputType | true
    }

  export interface TipPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipPlan'], meta: { name: 'TipPlan' } }
    /**
     * Find zero or one TipPlan that matches the filter.
     * @param {TipPlanFindUniqueArgs} args - Arguments to find a TipPlan
     * @example
     * // Get one TipPlan
     * const tipPlan = await prisma.tipPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipPlanFindUniqueArgs>(args: SelectSubset<T, TipPlanFindUniqueArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipPlanFindUniqueOrThrowArgs} args - Arguments to find a TipPlan
     * @example
     * // Get one TipPlan
     * const tipPlan = await prisma.tipPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TipPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipPlanFindFirstArgs} args - Arguments to find a TipPlan
     * @example
     * // Get one TipPlan
     * const tipPlan = await prisma.tipPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipPlanFindFirstArgs>(args?: SelectSubset<T, TipPlanFindFirstArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipPlanFindFirstOrThrowArgs} args - Arguments to find a TipPlan
     * @example
     * // Get one TipPlan
     * const tipPlan = await prisma.tipPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TipPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipPlans
     * const tipPlans = await prisma.tipPlan.findMany()
     * 
     * // Get first 10 TipPlans
     * const tipPlans = await prisma.tipPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipPlanWithIdOnly = await prisma.tipPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipPlanFindManyArgs>(args?: SelectSubset<T, TipPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipPlan.
     * @param {TipPlanCreateArgs} args - Arguments to create a TipPlan.
     * @example
     * // Create one TipPlan
     * const TipPlan = await prisma.tipPlan.create({
     *   data: {
     *     // ... data to create a TipPlan
     *   }
     * })
     * 
     */
    create<T extends TipPlanCreateArgs>(args: SelectSubset<T, TipPlanCreateArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipPlans.
     * @param {TipPlanCreateManyArgs} args - Arguments to create many TipPlans.
     * @example
     * // Create many TipPlans
     * const tipPlan = await prisma.tipPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipPlanCreateManyArgs>(args?: SelectSubset<T, TipPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipPlan.
     * @param {TipPlanDeleteArgs} args - Arguments to delete one TipPlan.
     * @example
     * // Delete one TipPlan
     * const TipPlan = await prisma.tipPlan.delete({
     *   where: {
     *     // ... filter to delete one TipPlan
     *   }
     * })
     * 
     */
    delete<T extends TipPlanDeleteArgs>(args: SelectSubset<T, TipPlanDeleteArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipPlan.
     * @param {TipPlanUpdateArgs} args - Arguments to update one TipPlan.
     * @example
     * // Update one TipPlan
     * const tipPlan = await prisma.tipPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipPlanUpdateArgs>(args: SelectSubset<T, TipPlanUpdateArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipPlans.
     * @param {TipPlanDeleteManyArgs} args - Arguments to filter TipPlans to delete.
     * @example
     * // Delete a few TipPlans
     * const { count } = await prisma.tipPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipPlanDeleteManyArgs>(args?: SelectSubset<T, TipPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipPlans
     * const tipPlan = await prisma.tipPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipPlanUpdateManyArgs>(args: SelectSubset<T, TipPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipPlan.
     * @param {TipPlanUpsertArgs} args - Arguments to update or create a TipPlan.
     * @example
     * // Update or create a TipPlan
     * const tipPlan = await prisma.tipPlan.upsert({
     *   create: {
     *     // ... data to create a TipPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipPlan we want to update
     *   }
     * })
     */
    upsert<T extends TipPlanUpsertArgs>(args: SelectSubset<T, TipPlanUpsertArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipPlanCountArgs} args - Arguments to filter TipPlans to count.
     * @example
     * // Count the number of TipPlans
     * const count = await prisma.tipPlan.count({
     *   where: {
     *     // ... the filter for the TipPlans we want to count
     *   }
     * })
    **/
    count<T extends TipPlanCountArgs>(
      args?: Subset<T, TipPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipPlanAggregateArgs>(args: Subset<T, TipPlanAggregateArgs>): Prisma.PrismaPromise<GetTipPlanAggregateType<T>>

    /**
     * Group by TipPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipPlanGroupByArgs} args - Group by arguments.
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
      T extends TipPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipPlanGroupByArgs['orderBy'] }
        : { orderBy?: TipPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipPlan model
   */
  readonly fields: TipPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    predictions<T extends TipPlan$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, TipPlan$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends TipPlan$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, TipPlan$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipPlan model
   */
  interface TipPlanFieldRefs {
    readonly id: FieldRef<"TipPlan", 'Int'>
    readonly name: FieldRef<"TipPlan", 'String'>
    readonly price: FieldRef<"TipPlan", 'Float'>
    readonly description: FieldRef<"TipPlan", 'String'>
    readonly oddRange: FieldRef<"TipPlan", 'String'>
    readonly isActive: FieldRef<"TipPlan", 'Boolean'>
    readonly createdAt: FieldRef<"TipPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"TipPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipPlan findUnique
   */
  export type TipPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    /**
     * Filter, which TipPlan to fetch.
     */
    where: TipPlanWhereUniqueInput
  }

  /**
   * TipPlan findUniqueOrThrow
   */
  export type TipPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    /**
     * Filter, which TipPlan to fetch.
     */
    where: TipPlanWhereUniqueInput
  }

  /**
   * TipPlan findFirst
   */
  export type TipPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    /**
     * Filter, which TipPlan to fetch.
     */
    where?: TipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipPlans to fetch.
     */
    orderBy?: TipPlanOrderByWithRelationInput | TipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipPlans.
     */
    cursor?: TipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipPlans.
     */
    distinct?: TipPlanScalarFieldEnum | TipPlanScalarFieldEnum[]
  }

  /**
   * TipPlan findFirstOrThrow
   */
  export type TipPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    /**
     * Filter, which TipPlan to fetch.
     */
    where?: TipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipPlans to fetch.
     */
    orderBy?: TipPlanOrderByWithRelationInput | TipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipPlans.
     */
    cursor?: TipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipPlans.
     */
    distinct?: TipPlanScalarFieldEnum | TipPlanScalarFieldEnum[]
  }

  /**
   * TipPlan findMany
   */
  export type TipPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    /**
     * Filter, which TipPlans to fetch.
     */
    where?: TipPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipPlans to fetch.
     */
    orderBy?: TipPlanOrderByWithRelationInput | TipPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipPlans.
     */
    cursor?: TipPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipPlans.
     */
    skip?: number
    distinct?: TipPlanScalarFieldEnum | TipPlanScalarFieldEnum[]
  }

  /**
   * TipPlan create
   */
  export type TipPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TipPlan.
     */
    data: XOR<TipPlanCreateInput, TipPlanUncheckedCreateInput>
  }

  /**
   * TipPlan createMany
   */
  export type TipPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipPlans.
     */
    data: TipPlanCreateManyInput | TipPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipPlan update
   */
  export type TipPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TipPlan.
     */
    data: XOR<TipPlanUpdateInput, TipPlanUncheckedUpdateInput>
    /**
     * Choose, which TipPlan to update.
     */
    where: TipPlanWhereUniqueInput
  }

  /**
   * TipPlan updateMany
   */
  export type TipPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipPlans.
     */
    data: XOR<TipPlanUpdateManyMutationInput, TipPlanUncheckedUpdateManyInput>
    /**
     * Filter which TipPlans to update
     */
    where?: TipPlanWhereInput
    /**
     * Limit how many TipPlans to update.
     */
    limit?: number
  }

  /**
   * TipPlan upsert
   */
  export type TipPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TipPlan to update in case it exists.
     */
    where: TipPlanWhereUniqueInput
    /**
     * In case the TipPlan found by the `where` argument doesn't exist, create a new TipPlan with this data.
     */
    create: XOR<TipPlanCreateInput, TipPlanUncheckedCreateInput>
    /**
     * In case the TipPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipPlanUpdateInput, TipPlanUncheckedUpdateInput>
  }

  /**
   * TipPlan delete
   */
  export type TipPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    /**
     * Filter which TipPlan to delete.
     */
    where: TipPlanWhereUniqueInput
  }

  /**
   * TipPlan deleteMany
   */
  export type TipPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipPlans to delete
     */
    where?: TipPlanWhereInput
    /**
     * Limit how many TipPlans to delete.
     */
    limit?: number
  }

  /**
   * TipPlan.predictions
   */
  export type TipPlan$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    cursor?: PredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * TipPlan.payments
   */
  export type TipPlan$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * TipPlan without action
   */
  export type TipPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
  }


  /**
   * Model Fixture
   */

  export type AggregateFixture = {
    _count: FixtureCountAggregateOutputType | null
    _avg: FixtureAvgAggregateOutputType | null
    _sum: FixtureSumAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  export type FixtureAvgAggregateOutputType = {
    id: number | null
  }

  export type FixtureSumAggregateOutputType = {
    id: number | null
  }

  export type FixtureMinAggregateOutputType = {
    id: number | null
    matchDate: Date | null
    homeTeam: string | null
    awayTeam: string | null
    competition: string | null
    result: string | null
    status: $Enums.MatchStatus | null
    fixtureTip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FixtureMaxAggregateOutputType = {
    id: number | null
    matchDate: Date | null
    homeTeam: string | null
    awayTeam: string | null
    competition: string | null
    result: string | null
    status: $Enums.MatchStatus | null
    fixtureTip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FixtureCountAggregateOutputType = {
    id: number
    matchDate: number
    homeTeam: number
    awayTeam: number
    competition: number
    result: number
    status: number
    fixtureTip: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FixtureAvgAggregateInputType = {
    id?: true
  }

  export type FixtureSumAggregateInputType = {
    id?: true
  }

  export type FixtureMinAggregateInputType = {
    id?: true
    matchDate?: true
    homeTeam?: true
    awayTeam?: true
    competition?: true
    result?: true
    status?: true
    fixtureTip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FixtureMaxAggregateInputType = {
    id?: true
    matchDate?: true
    homeTeam?: true
    awayTeam?: true
    competition?: true
    result?: true
    status?: true
    fixtureTip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FixtureCountAggregateInputType = {
    id?: true
    matchDate?: true
    homeTeam?: true
    awayTeam?: true
    competition?: true
    result?: true
    status?: true
    fixtureTip?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FixtureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixture to aggregate.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fixtures
    **/
    _count?: true | FixtureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FixtureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FixtureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FixtureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FixtureMaxAggregateInputType
  }

  export type GetFixtureAggregateType<T extends FixtureAggregateArgs> = {
        [P in keyof T & keyof AggregateFixture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFixture[P]>
      : GetScalarType<T[P], AggregateFixture[P]>
  }




  export type FixtureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithAggregationInput | FixtureOrderByWithAggregationInput[]
    by: FixtureScalarFieldEnum[] | FixtureScalarFieldEnum
    having?: FixtureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FixtureCountAggregateInputType | true
    _avg?: FixtureAvgAggregateInputType
    _sum?: FixtureSumAggregateInputType
    _min?: FixtureMinAggregateInputType
    _max?: FixtureMaxAggregateInputType
  }

  export type FixtureGroupByOutputType = {
    id: number
    matchDate: Date
    homeTeam: string
    awayTeam: string
    competition: string
    result: string | null
    status: $Enums.MatchStatus
    fixtureTip: string
    createdAt: Date
    updatedAt: Date
    _count: FixtureCountAggregateOutputType | null
    _avg: FixtureAvgAggregateOutputType | null
    _sum: FixtureSumAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  type GetFixtureGroupByPayload<T extends FixtureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FixtureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FixtureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FixtureGroupByOutputType[P]>
            : GetScalarType<T[P], FixtureGroupByOutputType[P]>
        }
      >
    >


  export type FixtureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchDate?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    competition?: boolean
    result?: boolean
    status?: boolean
    fixtureTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    predictions?: boolean | Fixture$predictionsArgs<ExtArgs>
    jackpot?: boolean | Fixture$jackpotArgs<ExtArgs>
    _count?: boolean | FixtureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>



  export type FixtureSelectScalar = {
    id?: boolean
    matchDate?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    competition?: boolean
    result?: boolean
    status?: boolean
    fixtureTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FixtureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchDate" | "homeTeam" | "awayTeam" | "competition" | "result" | "status" | "fixtureTip" | "createdAt" | "updatedAt", ExtArgs["result"]["fixture"]>
  export type FixtureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | Fixture$predictionsArgs<ExtArgs>
    jackpot?: boolean | Fixture$jackpotArgs<ExtArgs>
    _count?: boolean | FixtureCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FixturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fixture"
    objects: {
      predictions: Prisma.$PredictionPayload<ExtArgs>[]
      jackpot: Prisma.$JackpotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      matchDate: Date
      homeTeam: string
      awayTeam: string
      competition: string
      result: string | null
      status: $Enums.MatchStatus
      fixtureTip: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fixture"]>
    composites: {}
  }

  type FixtureGetPayload<S extends boolean | null | undefined | FixtureDefaultArgs> = $Result.GetResult<Prisma.$FixturePayload, S>

  type FixtureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FixtureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FixtureCountAggregateInputType | true
    }

  export interface FixtureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fixture'], meta: { name: 'Fixture' } }
    /**
     * Find zero or one Fixture that matches the filter.
     * @param {FixtureFindUniqueArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FixtureFindUniqueArgs>(args: SelectSubset<T, FixtureFindUniqueArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fixture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FixtureFindUniqueOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FixtureFindUniqueOrThrowArgs>(args: SelectSubset<T, FixtureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fixture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FixtureFindFirstArgs>(args?: SelectSubset<T, FixtureFindFirstArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fixture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FixtureFindFirstOrThrowArgs>(args?: SelectSubset<T, FixtureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fixtures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fixtures
     * const fixtures = await prisma.fixture.findMany()
     * 
     * // Get first 10 Fixtures
     * const fixtures = await prisma.fixture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fixtureWithIdOnly = await prisma.fixture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FixtureFindManyArgs>(args?: SelectSubset<T, FixtureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fixture.
     * @param {FixtureCreateArgs} args - Arguments to create a Fixture.
     * @example
     * // Create one Fixture
     * const Fixture = await prisma.fixture.create({
     *   data: {
     *     // ... data to create a Fixture
     *   }
     * })
     * 
     */
    create<T extends FixtureCreateArgs>(args: SelectSubset<T, FixtureCreateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fixtures.
     * @param {FixtureCreateManyArgs} args - Arguments to create many Fixtures.
     * @example
     * // Create many Fixtures
     * const fixture = await prisma.fixture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FixtureCreateManyArgs>(args?: SelectSubset<T, FixtureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fixture.
     * @param {FixtureDeleteArgs} args - Arguments to delete one Fixture.
     * @example
     * // Delete one Fixture
     * const Fixture = await prisma.fixture.delete({
     *   where: {
     *     // ... filter to delete one Fixture
     *   }
     * })
     * 
     */
    delete<T extends FixtureDeleteArgs>(args: SelectSubset<T, FixtureDeleteArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fixture.
     * @param {FixtureUpdateArgs} args - Arguments to update one Fixture.
     * @example
     * // Update one Fixture
     * const fixture = await prisma.fixture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FixtureUpdateArgs>(args: SelectSubset<T, FixtureUpdateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fixtures.
     * @param {FixtureDeleteManyArgs} args - Arguments to filter Fixtures to delete.
     * @example
     * // Delete a few Fixtures
     * const { count } = await prisma.fixture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FixtureDeleteManyArgs>(args?: SelectSubset<T, FixtureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fixtures
     * const fixture = await prisma.fixture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FixtureUpdateManyArgs>(args: SelectSubset<T, FixtureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fixture.
     * @param {FixtureUpsertArgs} args - Arguments to update or create a Fixture.
     * @example
     * // Update or create a Fixture
     * const fixture = await prisma.fixture.upsert({
     *   create: {
     *     // ... data to create a Fixture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fixture we want to update
     *   }
     * })
     */
    upsert<T extends FixtureUpsertArgs>(args: SelectSubset<T, FixtureUpsertArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureCountArgs} args - Arguments to filter Fixtures to count.
     * @example
     * // Count the number of Fixtures
     * const count = await prisma.fixture.count({
     *   where: {
     *     // ... the filter for the Fixtures we want to count
     *   }
     * })
    **/
    count<T extends FixtureCountArgs>(
      args?: Subset<T, FixtureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FixtureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FixtureAggregateArgs>(args: Subset<T, FixtureAggregateArgs>): Prisma.PrismaPromise<GetFixtureAggregateType<T>>

    /**
     * Group by Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureGroupByArgs} args - Group by arguments.
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
      T extends FixtureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FixtureGroupByArgs['orderBy'] }
        : { orderBy?: FixtureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FixtureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFixtureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fixture model
   */
  readonly fields: FixtureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fixture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FixtureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    predictions<T extends Fixture$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jackpot<T extends Fixture$jackpotArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$jackpotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fixture model
   */
  interface FixtureFieldRefs {
    readonly id: FieldRef<"Fixture", 'Int'>
    readonly matchDate: FieldRef<"Fixture", 'DateTime'>
    readonly homeTeam: FieldRef<"Fixture", 'String'>
    readonly awayTeam: FieldRef<"Fixture", 'String'>
    readonly competition: FieldRef<"Fixture", 'String'>
    readonly result: FieldRef<"Fixture", 'String'>
    readonly status: FieldRef<"Fixture", 'MatchStatus'>
    readonly fixtureTip: FieldRef<"Fixture", 'String'>
    readonly createdAt: FieldRef<"Fixture", 'DateTime'>
    readonly updatedAt: FieldRef<"Fixture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fixture findUnique
   */
  export type FixtureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findUniqueOrThrow
   */
  export type FixtureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findFirst
   */
  export type FixtureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findFirstOrThrow
   */
  export type FixtureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findMany
   */
  export type FixtureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixtures to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture create
   */
  export type FixtureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to create a Fixture.
     */
    data: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
  }

  /**
   * Fixture createMany
   */
  export type FixtureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fixtures.
     */
    data: FixtureCreateManyInput | FixtureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fixture update
   */
  export type FixtureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to update a Fixture.
     */
    data: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
    /**
     * Choose, which Fixture to update.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture updateMany
   */
  export type FixtureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fixtures.
     */
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyInput>
    /**
     * Filter which Fixtures to update
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to update.
     */
    limit?: number
  }

  /**
   * Fixture upsert
   */
  export type FixtureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The filter to search for the Fixture to update in case it exists.
     */
    where: FixtureWhereUniqueInput
    /**
     * In case the Fixture found by the `where` argument doesn't exist, create a new Fixture with this data.
     */
    create: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
    /**
     * In case the Fixture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
  }

  /**
   * Fixture delete
   */
  export type FixtureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter which Fixture to delete.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture deleteMany
   */
  export type FixtureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixtures to delete
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to delete.
     */
    limit?: number
  }

  /**
   * Fixture.predictions
   */
  export type Fixture$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    cursor?: PredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Fixture.jackpot
   */
  export type Fixture$jackpotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    where?: JackpotWhereInput
    orderBy?: JackpotOrderByWithRelationInput | JackpotOrderByWithRelationInput[]
    cursor?: JackpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JackpotScalarFieldEnum | JackpotScalarFieldEnum[]
  }

  /**
   * Fixture without action
   */
  export type FixtureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
  }


  /**
   * Model Jackpot
   */

  export type AggregateJackpot = {
    _count: JackpotCountAggregateOutputType | null
    _avg: JackpotAvgAggregateOutputType | null
    _sum: JackpotSumAggregateOutputType | null
    _min: JackpotMinAggregateOutputType | null
    _max: JackpotMaxAggregateOutputType | null
  }

  export type JackpotAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    fixtureId: number | null
  }

  export type JackpotSumAggregateOutputType = {
    id: number | null
    amount: number | null
    fixtureId: number | null
  }

  export type JackpotMinAggregateOutputType = {
    id: number | null
    startDatetime: Date | null
    endDatetime: Date | null
    amount: number | null
    isActive: boolean | null
    fixtureId: number | null
  }

  export type JackpotMaxAggregateOutputType = {
    id: number | null
    startDatetime: Date | null
    endDatetime: Date | null
    amount: number | null
    isActive: boolean | null
    fixtureId: number | null
  }

  export type JackpotCountAggregateOutputType = {
    id: number
    startDatetime: number
    endDatetime: number
    amount: number
    isActive: number
    fixtureId: number
    _all: number
  }


  export type JackpotAvgAggregateInputType = {
    id?: true
    amount?: true
    fixtureId?: true
  }

  export type JackpotSumAggregateInputType = {
    id?: true
    amount?: true
    fixtureId?: true
  }

  export type JackpotMinAggregateInputType = {
    id?: true
    startDatetime?: true
    endDatetime?: true
    amount?: true
    isActive?: true
    fixtureId?: true
  }

  export type JackpotMaxAggregateInputType = {
    id?: true
    startDatetime?: true
    endDatetime?: true
    amount?: true
    isActive?: true
    fixtureId?: true
  }

  export type JackpotCountAggregateInputType = {
    id?: true
    startDatetime?: true
    endDatetime?: true
    amount?: true
    isActive?: true
    fixtureId?: true
    _all?: true
  }

  export type JackpotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jackpot to aggregate.
     */
    where?: JackpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jackpots to fetch.
     */
    orderBy?: JackpotOrderByWithRelationInput | JackpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JackpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jackpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jackpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jackpots
    **/
    _count?: true | JackpotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JackpotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JackpotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JackpotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JackpotMaxAggregateInputType
  }

  export type GetJackpotAggregateType<T extends JackpotAggregateArgs> = {
        [P in keyof T & keyof AggregateJackpot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJackpot[P]>
      : GetScalarType<T[P], AggregateJackpot[P]>
  }




  export type JackpotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JackpotWhereInput
    orderBy?: JackpotOrderByWithAggregationInput | JackpotOrderByWithAggregationInput[]
    by: JackpotScalarFieldEnum[] | JackpotScalarFieldEnum
    having?: JackpotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JackpotCountAggregateInputType | true
    _avg?: JackpotAvgAggregateInputType
    _sum?: JackpotSumAggregateInputType
    _min?: JackpotMinAggregateInputType
    _max?: JackpotMaxAggregateInputType
  }

  export type JackpotGroupByOutputType = {
    id: number
    startDatetime: Date
    endDatetime: Date
    amount: number
    isActive: boolean
    fixtureId: number
    _count: JackpotCountAggregateOutputType | null
    _avg: JackpotAvgAggregateOutputType | null
    _sum: JackpotSumAggregateOutputType | null
    _min: JackpotMinAggregateOutputType | null
    _max: JackpotMaxAggregateOutputType | null
  }

  type GetJackpotGroupByPayload<T extends JackpotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JackpotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JackpotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JackpotGroupByOutputType[P]>
            : GetScalarType<T[P], JackpotGroupByOutputType[P]>
        }
      >
    >


  export type JackpotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDatetime?: boolean
    endDatetime?: boolean
    amount?: boolean
    isActive?: boolean
    fixtureId?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jackpot"]>



  export type JackpotSelectScalar = {
    id?: boolean
    startDatetime?: boolean
    endDatetime?: boolean
    amount?: boolean
    isActive?: boolean
    fixtureId?: boolean
  }

  export type JackpotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDatetime" | "endDatetime" | "amount" | "isActive" | "fixtureId", ExtArgs["result"]["jackpot"]>
  export type JackpotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }

  export type $JackpotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jackpot"
    objects: {
      fixture: Prisma.$FixturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDatetime: Date
      endDatetime: Date
      amount: number
      isActive: boolean
      fixtureId: number
    }, ExtArgs["result"]["jackpot"]>
    composites: {}
  }

  type JackpotGetPayload<S extends boolean | null | undefined | JackpotDefaultArgs> = $Result.GetResult<Prisma.$JackpotPayload, S>

  type JackpotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JackpotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JackpotCountAggregateInputType | true
    }

  export interface JackpotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jackpot'], meta: { name: 'Jackpot' } }
    /**
     * Find zero or one Jackpot that matches the filter.
     * @param {JackpotFindUniqueArgs} args - Arguments to find a Jackpot
     * @example
     * // Get one Jackpot
     * const jackpot = await prisma.jackpot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JackpotFindUniqueArgs>(args: SelectSubset<T, JackpotFindUniqueArgs<ExtArgs>>): Prisma__JackpotClient<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jackpot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JackpotFindUniqueOrThrowArgs} args - Arguments to find a Jackpot
     * @example
     * // Get one Jackpot
     * const jackpot = await prisma.jackpot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JackpotFindUniqueOrThrowArgs>(args: SelectSubset<T, JackpotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JackpotClient<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jackpot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JackpotFindFirstArgs} args - Arguments to find a Jackpot
     * @example
     * // Get one Jackpot
     * const jackpot = await prisma.jackpot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JackpotFindFirstArgs>(args?: SelectSubset<T, JackpotFindFirstArgs<ExtArgs>>): Prisma__JackpotClient<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jackpot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JackpotFindFirstOrThrowArgs} args - Arguments to find a Jackpot
     * @example
     * // Get one Jackpot
     * const jackpot = await prisma.jackpot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JackpotFindFirstOrThrowArgs>(args?: SelectSubset<T, JackpotFindFirstOrThrowArgs<ExtArgs>>): Prisma__JackpotClient<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jackpots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JackpotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jackpots
     * const jackpots = await prisma.jackpot.findMany()
     * 
     * // Get first 10 Jackpots
     * const jackpots = await prisma.jackpot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jackpotWithIdOnly = await prisma.jackpot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JackpotFindManyArgs>(args?: SelectSubset<T, JackpotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jackpot.
     * @param {JackpotCreateArgs} args - Arguments to create a Jackpot.
     * @example
     * // Create one Jackpot
     * const Jackpot = await prisma.jackpot.create({
     *   data: {
     *     // ... data to create a Jackpot
     *   }
     * })
     * 
     */
    create<T extends JackpotCreateArgs>(args: SelectSubset<T, JackpotCreateArgs<ExtArgs>>): Prisma__JackpotClient<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jackpots.
     * @param {JackpotCreateManyArgs} args - Arguments to create many Jackpots.
     * @example
     * // Create many Jackpots
     * const jackpot = await prisma.jackpot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JackpotCreateManyArgs>(args?: SelectSubset<T, JackpotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jackpot.
     * @param {JackpotDeleteArgs} args - Arguments to delete one Jackpot.
     * @example
     * // Delete one Jackpot
     * const Jackpot = await prisma.jackpot.delete({
     *   where: {
     *     // ... filter to delete one Jackpot
     *   }
     * })
     * 
     */
    delete<T extends JackpotDeleteArgs>(args: SelectSubset<T, JackpotDeleteArgs<ExtArgs>>): Prisma__JackpotClient<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jackpot.
     * @param {JackpotUpdateArgs} args - Arguments to update one Jackpot.
     * @example
     * // Update one Jackpot
     * const jackpot = await prisma.jackpot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JackpotUpdateArgs>(args: SelectSubset<T, JackpotUpdateArgs<ExtArgs>>): Prisma__JackpotClient<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jackpots.
     * @param {JackpotDeleteManyArgs} args - Arguments to filter Jackpots to delete.
     * @example
     * // Delete a few Jackpots
     * const { count } = await prisma.jackpot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JackpotDeleteManyArgs>(args?: SelectSubset<T, JackpotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jackpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JackpotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jackpots
     * const jackpot = await prisma.jackpot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JackpotUpdateManyArgs>(args: SelectSubset<T, JackpotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jackpot.
     * @param {JackpotUpsertArgs} args - Arguments to update or create a Jackpot.
     * @example
     * // Update or create a Jackpot
     * const jackpot = await prisma.jackpot.upsert({
     *   create: {
     *     // ... data to create a Jackpot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jackpot we want to update
     *   }
     * })
     */
    upsert<T extends JackpotUpsertArgs>(args: SelectSubset<T, JackpotUpsertArgs<ExtArgs>>): Prisma__JackpotClient<$Result.GetResult<Prisma.$JackpotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jackpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JackpotCountArgs} args - Arguments to filter Jackpots to count.
     * @example
     * // Count the number of Jackpots
     * const count = await prisma.jackpot.count({
     *   where: {
     *     // ... the filter for the Jackpots we want to count
     *   }
     * })
    **/
    count<T extends JackpotCountArgs>(
      args?: Subset<T, JackpotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JackpotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jackpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JackpotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JackpotAggregateArgs>(args: Subset<T, JackpotAggregateArgs>): Prisma.PrismaPromise<GetJackpotAggregateType<T>>

    /**
     * Group by Jackpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JackpotGroupByArgs} args - Group by arguments.
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
      T extends JackpotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JackpotGroupByArgs['orderBy'] }
        : { orderBy?: JackpotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JackpotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJackpotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jackpot model
   */
  readonly fields: JackpotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jackpot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JackpotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fixture<T extends FixtureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FixtureDefaultArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Jackpot model
   */
  interface JackpotFieldRefs {
    readonly id: FieldRef<"Jackpot", 'Int'>
    readonly startDatetime: FieldRef<"Jackpot", 'DateTime'>
    readonly endDatetime: FieldRef<"Jackpot", 'DateTime'>
    readonly amount: FieldRef<"Jackpot", 'Float'>
    readonly isActive: FieldRef<"Jackpot", 'Boolean'>
    readonly fixtureId: FieldRef<"Jackpot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Jackpot findUnique
   */
  export type JackpotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    /**
     * Filter, which Jackpot to fetch.
     */
    where: JackpotWhereUniqueInput
  }

  /**
   * Jackpot findUniqueOrThrow
   */
  export type JackpotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    /**
     * Filter, which Jackpot to fetch.
     */
    where: JackpotWhereUniqueInput
  }

  /**
   * Jackpot findFirst
   */
  export type JackpotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    /**
     * Filter, which Jackpot to fetch.
     */
    where?: JackpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jackpots to fetch.
     */
    orderBy?: JackpotOrderByWithRelationInput | JackpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jackpots.
     */
    cursor?: JackpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jackpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jackpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jackpots.
     */
    distinct?: JackpotScalarFieldEnum | JackpotScalarFieldEnum[]
  }

  /**
   * Jackpot findFirstOrThrow
   */
  export type JackpotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    /**
     * Filter, which Jackpot to fetch.
     */
    where?: JackpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jackpots to fetch.
     */
    orderBy?: JackpotOrderByWithRelationInput | JackpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jackpots.
     */
    cursor?: JackpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jackpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jackpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jackpots.
     */
    distinct?: JackpotScalarFieldEnum | JackpotScalarFieldEnum[]
  }

  /**
   * Jackpot findMany
   */
  export type JackpotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    /**
     * Filter, which Jackpots to fetch.
     */
    where?: JackpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jackpots to fetch.
     */
    orderBy?: JackpotOrderByWithRelationInput | JackpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jackpots.
     */
    cursor?: JackpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jackpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jackpots.
     */
    skip?: number
    distinct?: JackpotScalarFieldEnum | JackpotScalarFieldEnum[]
  }

  /**
   * Jackpot create
   */
  export type JackpotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    /**
     * The data needed to create a Jackpot.
     */
    data: XOR<JackpotCreateInput, JackpotUncheckedCreateInput>
  }

  /**
   * Jackpot createMany
   */
  export type JackpotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jackpots.
     */
    data: JackpotCreateManyInput | JackpotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jackpot update
   */
  export type JackpotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    /**
     * The data needed to update a Jackpot.
     */
    data: XOR<JackpotUpdateInput, JackpotUncheckedUpdateInput>
    /**
     * Choose, which Jackpot to update.
     */
    where: JackpotWhereUniqueInput
  }

  /**
   * Jackpot updateMany
   */
  export type JackpotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jackpots.
     */
    data: XOR<JackpotUpdateManyMutationInput, JackpotUncheckedUpdateManyInput>
    /**
     * Filter which Jackpots to update
     */
    where?: JackpotWhereInput
    /**
     * Limit how many Jackpots to update.
     */
    limit?: number
  }

  /**
   * Jackpot upsert
   */
  export type JackpotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    /**
     * The filter to search for the Jackpot to update in case it exists.
     */
    where: JackpotWhereUniqueInput
    /**
     * In case the Jackpot found by the `where` argument doesn't exist, create a new Jackpot with this data.
     */
    create: XOR<JackpotCreateInput, JackpotUncheckedCreateInput>
    /**
     * In case the Jackpot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JackpotUpdateInput, JackpotUncheckedUpdateInput>
  }

  /**
   * Jackpot delete
   */
  export type JackpotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
    /**
     * Filter which Jackpot to delete.
     */
    where: JackpotWhereUniqueInput
  }

  /**
   * Jackpot deleteMany
   */
  export type JackpotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jackpots to delete
     */
    where?: JackpotWhereInput
    /**
     * Limit how many Jackpots to delete.
     */
    limit?: number
  }

  /**
   * Jackpot without action
   */
  export type JackpotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jackpot
     */
    select?: JackpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jackpot
     */
    omit?: JackpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JackpotInclude<ExtArgs> | null
  }


  /**
   * Model Prediction
   */

  export type AggregatePrediction = {
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  export type PredictionAvgAggregateOutputType = {
    id: number | null
    odd: number | null
    fixtureId: number | null
    planId: number | null
  }

  export type PredictionSumAggregateOutputType = {
    id: number | null
    odd: number | null
    fixtureId: number | null
    planId: number | null
  }

  export type PredictionMinAggregateOutputType = {
    id: number | null
    tipText: string | null
    odd: number | null
    tipDate: Date | null
    isPublished: boolean | null
    fixtureId: number | null
    planId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredictionMaxAggregateOutputType = {
    id: number | null
    tipText: string | null
    odd: number | null
    tipDate: Date | null
    isPublished: boolean | null
    fixtureId: number | null
    planId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredictionCountAggregateOutputType = {
    id: number
    tipText: number
    odd: number
    tipDate: number
    isPublished: number
    fixtureId: number
    planId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PredictionAvgAggregateInputType = {
    id?: true
    odd?: true
    fixtureId?: true
    planId?: true
  }

  export type PredictionSumAggregateInputType = {
    id?: true
    odd?: true
    fixtureId?: true
    planId?: true
  }

  export type PredictionMinAggregateInputType = {
    id?: true
    tipText?: true
    odd?: true
    tipDate?: true
    isPublished?: true
    fixtureId?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredictionMaxAggregateInputType = {
    id?: true
    tipText?: true
    odd?: true
    tipDate?: true
    isPublished?: true
    fixtureId?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredictionCountAggregateInputType = {
    id?: true
    tipText?: true
    odd?: true
    tipDate?: true
    isPublished?: true
    fixtureId?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prediction to aggregate.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Predictions
    **/
    _count?: true | PredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionMaxAggregateInputType
  }

  export type GetPredictionAggregateType<T extends PredictionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrediction[P]>
      : GetScalarType<T[P], AggregatePrediction[P]>
  }




  export type PredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithAggregationInput | PredictionOrderByWithAggregationInput[]
    by: PredictionScalarFieldEnum[] | PredictionScalarFieldEnum
    having?: PredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionCountAggregateInputType | true
    _avg?: PredictionAvgAggregateInputType
    _sum?: PredictionSumAggregateInputType
    _min?: PredictionMinAggregateInputType
    _max?: PredictionMaxAggregateInputType
  }

  export type PredictionGroupByOutputType = {
    id: number
    tipText: string
    odd: number
    tipDate: Date
    isPublished: boolean
    fixtureId: number
    planId: number | null
    createdAt: Date
    updatedAt: Date
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  type GetPredictionGroupByPayload<T extends PredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionGroupByOutputType[P]>
        }
      >
    >


  export type PredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipText?: boolean
    odd?: boolean
    tipDate?: boolean
    isPublished?: boolean
    fixtureId?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
    plan?: boolean | Prediction$planArgs<ExtArgs>
    result?: boolean | Prediction$resultArgs<ExtArgs>
    payments?: boolean | Prediction$paymentsArgs<ExtArgs>
    _count?: boolean | PredictionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>



  export type PredictionSelectScalar = {
    id?: boolean
    tipText?: boolean
    odd?: boolean
    tipDate?: boolean
    isPublished?: boolean
    fixtureId?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipText" | "odd" | "tipDate" | "isPublished" | "fixtureId" | "planId" | "createdAt" | "updatedAt", ExtArgs["result"]["prediction"]>
  export type PredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
    plan?: boolean | Prediction$planArgs<ExtArgs>
    result?: boolean | Prediction$resultArgs<ExtArgs>
    payments?: boolean | Prediction$paymentsArgs<ExtArgs>
    _count?: boolean | PredictionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prediction"
    objects: {
      fixture: Prisma.$FixturePayload<ExtArgs>
      plan: Prisma.$TipPlanPayload<ExtArgs> | null
      result: Prisma.$TipResultPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipText: string
      odd: number
      tipDate: Date
      isPublished: boolean
      fixtureId: number
      planId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prediction"]>
    composites: {}
  }

  type PredictionGetPayload<S extends boolean | null | undefined | PredictionDefaultArgs> = $Result.GetResult<Prisma.$PredictionPayload, S>

  type PredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredictionCountAggregateInputType | true
    }

  export interface PredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prediction'], meta: { name: 'Prediction' } }
    /**
     * Find zero or one Prediction that matches the filter.
     * @param {PredictionFindUniqueArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionFindUniqueArgs>(args: SelectSubset<T, PredictionFindUniqueArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredictionFindUniqueOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionFindFirstArgs>(args?: SelectSubset<T, PredictionFindFirstArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Predictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Predictions
     * const predictions = await prisma.prediction.findMany()
     * 
     * // Get first 10 Predictions
     * const predictions = await prisma.prediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionWithIdOnly = await prisma.prediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionFindManyArgs>(args?: SelectSubset<T, PredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prediction.
     * @param {PredictionCreateArgs} args - Arguments to create a Prediction.
     * @example
     * // Create one Prediction
     * const Prediction = await prisma.prediction.create({
     *   data: {
     *     // ... data to create a Prediction
     *   }
     * })
     * 
     */
    create<T extends PredictionCreateArgs>(args: SelectSubset<T, PredictionCreateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Predictions.
     * @param {PredictionCreateManyArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionCreateManyArgs>(args?: SelectSubset<T, PredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prediction.
     * @param {PredictionDeleteArgs} args - Arguments to delete one Prediction.
     * @example
     * // Delete one Prediction
     * const Prediction = await prisma.prediction.delete({
     *   where: {
     *     // ... filter to delete one Prediction
     *   }
     * })
     * 
     */
    delete<T extends PredictionDeleteArgs>(args: SelectSubset<T, PredictionDeleteArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prediction.
     * @param {PredictionUpdateArgs} args - Arguments to update one Prediction.
     * @example
     * // Update one Prediction
     * const prediction = await prisma.prediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionUpdateArgs>(args: SelectSubset<T, PredictionUpdateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Predictions.
     * @param {PredictionDeleteManyArgs} args - Arguments to filter Predictions to delete.
     * @example
     * // Delete a few Predictions
     * const { count } = await prisma.prediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionDeleteManyArgs>(args?: SelectSubset<T, PredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Predictions
     * const prediction = await prisma.prediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionUpdateManyArgs>(args: SelectSubset<T, PredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prediction.
     * @param {PredictionUpsertArgs} args - Arguments to update or create a Prediction.
     * @example
     * // Update or create a Prediction
     * const prediction = await prisma.prediction.upsert({
     *   create: {
     *     // ... data to create a Prediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prediction we want to update
     *   }
     * })
     */
    upsert<T extends PredictionUpsertArgs>(args: SelectSubset<T, PredictionUpsertArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionCountArgs} args - Arguments to filter Predictions to count.
     * @example
     * // Count the number of Predictions
     * const count = await prisma.prediction.count({
     *   where: {
     *     // ... the filter for the Predictions we want to count
     *   }
     * })
    **/
    count<T extends PredictionCountArgs>(
      args?: Subset<T, PredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PredictionAggregateArgs>(args: Subset<T, PredictionAggregateArgs>): Prisma.PrismaPromise<GetPredictionAggregateType<T>>

    /**
     * Group by Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionGroupByArgs} args - Group by arguments.
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
      T extends PredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionGroupByArgs['orderBy'] }
        : { orderBy?: PredictionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prediction model
   */
  readonly fields: PredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fixture<T extends FixtureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FixtureDefaultArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends Prediction$planArgs<ExtArgs> = {}>(args?: Subset<T, Prediction$planArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    result<T extends Prediction$resultArgs<ExtArgs> = {}>(args?: Subset<T, Prediction$resultArgs<ExtArgs>>): Prisma__TipResultClient<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends Prediction$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Prediction$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prediction model
   */
  interface PredictionFieldRefs {
    readonly id: FieldRef<"Prediction", 'Int'>
    readonly tipText: FieldRef<"Prediction", 'String'>
    readonly odd: FieldRef<"Prediction", 'Float'>
    readonly tipDate: FieldRef<"Prediction", 'DateTime'>
    readonly isPublished: FieldRef<"Prediction", 'Boolean'>
    readonly fixtureId: FieldRef<"Prediction", 'Int'>
    readonly planId: FieldRef<"Prediction", 'Int'>
    readonly createdAt: FieldRef<"Prediction", 'DateTime'>
    readonly updatedAt: FieldRef<"Prediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prediction findUnique
   */
  export type PredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findUniqueOrThrow
   */
  export type PredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findFirst
   */
  export type PredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findFirstOrThrow
   */
  export type PredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findMany
   */
  export type PredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction create
   */
  export type PredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prediction.
     */
    data: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
  }

  /**
   * Prediction createMany
   */
  export type PredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prediction update
   */
  export type PredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prediction.
     */
    data: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
    /**
     * Choose, which Prediction to update.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction updateMany
   */
  export type PredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
  }

  /**
   * Prediction upsert
   */
  export type PredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prediction to update in case it exists.
     */
    where: PredictionWhereUniqueInput
    /**
     * In case the Prediction found by the `where` argument doesn't exist, create a new Prediction with this data.
     */
    create: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
    /**
     * In case the Prediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
  }

  /**
   * Prediction delete
   */
  export type PredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter which Prediction to delete.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction deleteMany
   */
  export type PredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Predictions to delete
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to delete.
     */
    limit?: number
  }

  /**
   * Prediction.plan
   */
  export type Prediction$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipPlan
     */
    select?: TipPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipPlan
     */
    omit?: TipPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipPlanInclude<ExtArgs> | null
    where?: TipPlanWhereInput
  }

  /**
   * Prediction.result
   */
  export type Prediction$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    where?: TipResultWhereInput
  }

  /**
   * Prediction.payments
   */
  export type Prediction$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Prediction without action
   */
  export type PredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    predictionId: number | null
    planId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    predictionId: number | null
    planId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    mobileNumber: string | null
    mpesaRequestId: string | null
    predictionId: number | null
    planId: number | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    mobileNumber: string | null
    mpesaRequestId: string | null
    predictionId: number | null
    planId: number | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    mobileNumber: number
    mpesaRequestId: number
    predictionId: number
    planId: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    predictionId?: true
    planId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    predictionId?: true
    planId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    mobileNumber?: true
    mpesaRequestId?: true
    predictionId?: true
    planId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    mobileNumber?: true
    mpesaRequestId?: true
    predictionId?: true
    planId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    mobileNumber?: true
    mpesaRequestId?: true
    predictionId?: true
    planId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    mobileNumber: string
    mpesaRequestId: string
    predictionId: number
    planId: number
    amount: number
    status: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobileNumber?: boolean
    mpesaRequestId?: boolean
    predictionId?: boolean
    planId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    plan?: boolean | TipPlanDefaultArgs<ExtArgs>
    tipAccessLogs?: boolean | Payment$tipAccessLogsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    mobileNumber?: boolean
    mpesaRequestId?: boolean
    predictionId?: boolean
    planId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mobileNumber" | "mpesaRequestId" | "predictionId" | "planId" | "amount" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    plan?: boolean | TipPlanDefaultArgs<ExtArgs>
    tipAccessLogs?: boolean | Payment$tipAccessLogsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      prediction: Prisma.$PredictionPayload<ExtArgs>
      plan: Prisma.$TipPlanPayload<ExtArgs>
      tipAccessLogs: Prisma.$TipAccessLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mobileNumber: string
      mpesaRequestId: string
      predictionId: number
      planId: number
      amount: number
      status: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prediction<T extends PredictionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PredictionDefaultArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends TipPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipPlanDefaultArgs<ExtArgs>>): Prisma__TipPlanClient<$Result.GetResult<Prisma.$TipPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipAccessLogs<T extends Payment$tipAccessLogsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$tipAccessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly mobileNumber: FieldRef<"Payment", 'String'>
    readonly mpesaRequestId: FieldRef<"Payment", 'String'>
    readonly predictionId: FieldRef<"Payment", 'Int'>
    readonly planId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.tipAccessLogs
   */
  export type Payment$tipAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    where?: TipAccessLogWhereInput
    orderBy?: TipAccessLogOrderByWithRelationInput | TipAccessLogOrderByWithRelationInput[]
    cursor?: TipAccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TipAccessLogScalarFieldEnum | TipAccessLogScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model TipAccessLog
   */

  export type AggregateTipAccessLog = {
    _count: TipAccessLogCountAggregateOutputType | null
    _avg: TipAccessLogAvgAggregateOutputType | null
    _sum: TipAccessLogSumAggregateOutputType | null
    _min: TipAccessLogMinAggregateOutputType | null
    _max: TipAccessLogMaxAggregateOutputType | null
  }

  export type TipAccessLogAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type TipAccessLogSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type TipAccessLogMinAggregateOutputType = {
    id: number | null
    paymentId: number | null
    ipAddress: string | null
    accessedAt: Date | null
  }

  export type TipAccessLogMaxAggregateOutputType = {
    id: number | null
    paymentId: number | null
    ipAddress: string | null
    accessedAt: Date | null
  }

  export type TipAccessLogCountAggregateOutputType = {
    id: number
    paymentId: number
    ipAddress: number
    accessedAt: number
    _all: number
  }


  export type TipAccessLogAvgAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type TipAccessLogSumAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type TipAccessLogMinAggregateInputType = {
    id?: true
    paymentId?: true
    ipAddress?: true
    accessedAt?: true
  }

  export type TipAccessLogMaxAggregateInputType = {
    id?: true
    paymentId?: true
    ipAddress?: true
    accessedAt?: true
  }

  export type TipAccessLogCountAggregateInputType = {
    id?: true
    paymentId?: true
    ipAddress?: true
    accessedAt?: true
    _all?: true
  }

  export type TipAccessLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipAccessLog to aggregate.
     */
    where?: TipAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipAccessLogs to fetch.
     */
    orderBy?: TipAccessLogOrderByWithRelationInput | TipAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipAccessLogs
    **/
    _count?: true | TipAccessLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipAccessLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipAccessLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipAccessLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipAccessLogMaxAggregateInputType
  }

  export type GetTipAccessLogAggregateType<T extends TipAccessLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTipAccessLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipAccessLog[P]>
      : GetScalarType<T[P], AggregateTipAccessLog[P]>
  }




  export type TipAccessLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipAccessLogWhereInput
    orderBy?: TipAccessLogOrderByWithAggregationInput | TipAccessLogOrderByWithAggregationInput[]
    by: TipAccessLogScalarFieldEnum[] | TipAccessLogScalarFieldEnum
    having?: TipAccessLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipAccessLogCountAggregateInputType | true
    _avg?: TipAccessLogAvgAggregateInputType
    _sum?: TipAccessLogSumAggregateInputType
    _min?: TipAccessLogMinAggregateInputType
    _max?: TipAccessLogMaxAggregateInputType
  }

  export type TipAccessLogGroupByOutputType = {
    id: number
    paymentId: number
    ipAddress: string | null
    accessedAt: Date
    _count: TipAccessLogCountAggregateOutputType | null
    _avg: TipAccessLogAvgAggregateOutputType | null
    _sum: TipAccessLogSumAggregateOutputType | null
    _min: TipAccessLogMinAggregateOutputType | null
    _max: TipAccessLogMaxAggregateOutputType | null
  }

  type GetTipAccessLogGroupByPayload<T extends TipAccessLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipAccessLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipAccessLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipAccessLogGroupByOutputType[P]>
            : GetScalarType<T[P], TipAccessLogGroupByOutputType[P]>
        }
      >
    >


  export type TipAccessLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    ipAddress?: boolean
    accessedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipAccessLog"]>



  export type TipAccessLogSelectScalar = {
    id?: boolean
    paymentId?: boolean
    ipAddress?: boolean
    accessedAt?: boolean
  }

  export type TipAccessLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "ipAddress" | "accessedAt", ExtArgs["result"]["tipAccessLog"]>
  export type TipAccessLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $TipAccessLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipAccessLog"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentId: number
      ipAddress: string | null
      accessedAt: Date
    }, ExtArgs["result"]["tipAccessLog"]>
    composites: {}
  }

  type TipAccessLogGetPayload<S extends boolean | null | undefined | TipAccessLogDefaultArgs> = $Result.GetResult<Prisma.$TipAccessLogPayload, S>

  type TipAccessLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipAccessLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipAccessLogCountAggregateInputType | true
    }

  export interface TipAccessLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipAccessLog'], meta: { name: 'TipAccessLog' } }
    /**
     * Find zero or one TipAccessLog that matches the filter.
     * @param {TipAccessLogFindUniqueArgs} args - Arguments to find a TipAccessLog
     * @example
     * // Get one TipAccessLog
     * const tipAccessLog = await prisma.tipAccessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipAccessLogFindUniqueArgs>(args: SelectSubset<T, TipAccessLogFindUniqueArgs<ExtArgs>>): Prisma__TipAccessLogClient<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipAccessLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipAccessLogFindUniqueOrThrowArgs} args - Arguments to find a TipAccessLog
     * @example
     * // Get one TipAccessLog
     * const tipAccessLog = await prisma.tipAccessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipAccessLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TipAccessLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipAccessLogClient<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipAccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipAccessLogFindFirstArgs} args - Arguments to find a TipAccessLog
     * @example
     * // Get one TipAccessLog
     * const tipAccessLog = await prisma.tipAccessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipAccessLogFindFirstArgs>(args?: SelectSubset<T, TipAccessLogFindFirstArgs<ExtArgs>>): Prisma__TipAccessLogClient<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipAccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipAccessLogFindFirstOrThrowArgs} args - Arguments to find a TipAccessLog
     * @example
     * // Get one TipAccessLog
     * const tipAccessLog = await prisma.tipAccessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipAccessLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TipAccessLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipAccessLogClient<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipAccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipAccessLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipAccessLogs
     * const tipAccessLogs = await prisma.tipAccessLog.findMany()
     * 
     * // Get first 10 TipAccessLogs
     * const tipAccessLogs = await prisma.tipAccessLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipAccessLogWithIdOnly = await prisma.tipAccessLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipAccessLogFindManyArgs>(args?: SelectSubset<T, TipAccessLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipAccessLog.
     * @param {TipAccessLogCreateArgs} args - Arguments to create a TipAccessLog.
     * @example
     * // Create one TipAccessLog
     * const TipAccessLog = await prisma.tipAccessLog.create({
     *   data: {
     *     // ... data to create a TipAccessLog
     *   }
     * })
     * 
     */
    create<T extends TipAccessLogCreateArgs>(args: SelectSubset<T, TipAccessLogCreateArgs<ExtArgs>>): Prisma__TipAccessLogClient<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipAccessLogs.
     * @param {TipAccessLogCreateManyArgs} args - Arguments to create many TipAccessLogs.
     * @example
     * // Create many TipAccessLogs
     * const tipAccessLog = await prisma.tipAccessLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipAccessLogCreateManyArgs>(args?: SelectSubset<T, TipAccessLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipAccessLog.
     * @param {TipAccessLogDeleteArgs} args - Arguments to delete one TipAccessLog.
     * @example
     * // Delete one TipAccessLog
     * const TipAccessLog = await prisma.tipAccessLog.delete({
     *   where: {
     *     // ... filter to delete one TipAccessLog
     *   }
     * })
     * 
     */
    delete<T extends TipAccessLogDeleteArgs>(args: SelectSubset<T, TipAccessLogDeleteArgs<ExtArgs>>): Prisma__TipAccessLogClient<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipAccessLog.
     * @param {TipAccessLogUpdateArgs} args - Arguments to update one TipAccessLog.
     * @example
     * // Update one TipAccessLog
     * const tipAccessLog = await prisma.tipAccessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipAccessLogUpdateArgs>(args: SelectSubset<T, TipAccessLogUpdateArgs<ExtArgs>>): Prisma__TipAccessLogClient<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipAccessLogs.
     * @param {TipAccessLogDeleteManyArgs} args - Arguments to filter TipAccessLogs to delete.
     * @example
     * // Delete a few TipAccessLogs
     * const { count } = await prisma.tipAccessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipAccessLogDeleteManyArgs>(args?: SelectSubset<T, TipAccessLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipAccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipAccessLogs
     * const tipAccessLog = await prisma.tipAccessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipAccessLogUpdateManyArgs>(args: SelectSubset<T, TipAccessLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipAccessLog.
     * @param {TipAccessLogUpsertArgs} args - Arguments to update or create a TipAccessLog.
     * @example
     * // Update or create a TipAccessLog
     * const tipAccessLog = await prisma.tipAccessLog.upsert({
     *   create: {
     *     // ... data to create a TipAccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipAccessLog we want to update
     *   }
     * })
     */
    upsert<T extends TipAccessLogUpsertArgs>(args: SelectSubset<T, TipAccessLogUpsertArgs<ExtArgs>>): Prisma__TipAccessLogClient<$Result.GetResult<Prisma.$TipAccessLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipAccessLogCountArgs} args - Arguments to filter TipAccessLogs to count.
     * @example
     * // Count the number of TipAccessLogs
     * const count = await prisma.tipAccessLog.count({
     *   where: {
     *     // ... the filter for the TipAccessLogs we want to count
     *   }
     * })
    **/
    count<T extends TipAccessLogCountArgs>(
      args?: Subset<T, TipAccessLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipAccessLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipAccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipAccessLogAggregateArgs>(args: Subset<T, TipAccessLogAggregateArgs>): Prisma.PrismaPromise<GetTipAccessLogAggregateType<T>>

    /**
     * Group by TipAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipAccessLogGroupByArgs} args - Group by arguments.
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
      T extends TipAccessLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipAccessLogGroupByArgs['orderBy'] }
        : { orderBy?: TipAccessLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipAccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipAccessLog model
   */
  readonly fields: TipAccessLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipAccessLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipAccessLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TipAccessLog model
   */
  interface TipAccessLogFieldRefs {
    readonly id: FieldRef<"TipAccessLog", 'Int'>
    readonly paymentId: FieldRef<"TipAccessLog", 'Int'>
    readonly ipAddress: FieldRef<"TipAccessLog", 'String'>
    readonly accessedAt: FieldRef<"TipAccessLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipAccessLog findUnique
   */
  export type TipAccessLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TipAccessLog to fetch.
     */
    where: TipAccessLogWhereUniqueInput
  }

  /**
   * TipAccessLog findUniqueOrThrow
   */
  export type TipAccessLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TipAccessLog to fetch.
     */
    where: TipAccessLogWhereUniqueInput
  }

  /**
   * TipAccessLog findFirst
   */
  export type TipAccessLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TipAccessLog to fetch.
     */
    where?: TipAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipAccessLogs to fetch.
     */
    orderBy?: TipAccessLogOrderByWithRelationInput | TipAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipAccessLogs.
     */
    cursor?: TipAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipAccessLogs.
     */
    distinct?: TipAccessLogScalarFieldEnum | TipAccessLogScalarFieldEnum[]
  }

  /**
   * TipAccessLog findFirstOrThrow
   */
  export type TipAccessLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TipAccessLog to fetch.
     */
    where?: TipAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipAccessLogs to fetch.
     */
    orderBy?: TipAccessLogOrderByWithRelationInput | TipAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipAccessLogs.
     */
    cursor?: TipAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipAccessLogs.
     */
    distinct?: TipAccessLogScalarFieldEnum | TipAccessLogScalarFieldEnum[]
  }

  /**
   * TipAccessLog findMany
   */
  export type TipAccessLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TipAccessLogs to fetch.
     */
    where?: TipAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipAccessLogs to fetch.
     */
    orderBy?: TipAccessLogOrderByWithRelationInput | TipAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipAccessLogs.
     */
    cursor?: TipAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipAccessLogs.
     */
    skip?: number
    distinct?: TipAccessLogScalarFieldEnum | TipAccessLogScalarFieldEnum[]
  }

  /**
   * TipAccessLog create
   */
  export type TipAccessLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TipAccessLog.
     */
    data: XOR<TipAccessLogCreateInput, TipAccessLogUncheckedCreateInput>
  }

  /**
   * TipAccessLog createMany
   */
  export type TipAccessLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipAccessLogs.
     */
    data: TipAccessLogCreateManyInput | TipAccessLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipAccessLog update
   */
  export type TipAccessLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TipAccessLog.
     */
    data: XOR<TipAccessLogUpdateInput, TipAccessLogUncheckedUpdateInput>
    /**
     * Choose, which TipAccessLog to update.
     */
    where: TipAccessLogWhereUniqueInput
  }

  /**
   * TipAccessLog updateMany
   */
  export type TipAccessLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipAccessLogs.
     */
    data: XOR<TipAccessLogUpdateManyMutationInput, TipAccessLogUncheckedUpdateManyInput>
    /**
     * Filter which TipAccessLogs to update
     */
    where?: TipAccessLogWhereInput
    /**
     * Limit how many TipAccessLogs to update.
     */
    limit?: number
  }

  /**
   * TipAccessLog upsert
   */
  export type TipAccessLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TipAccessLog to update in case it exists.
     */
    where: TipAccessLogWhereUniqueInput
    /**
     * In case the TipAccessLog found by the `where` argument doesn't exist, create a new TipAccessLog with this data.
     */
    create: XOR<TipAccessLogCreateInput, TipAccessLogUncheckedCreateInput>
    /**
     * In case the TipAccessLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipAccessLogUpdateInput, TipAccessLogUncheckedUpdateInput>
  }

  /**
   * TipAccessLog delete
   */
  export type TipAccessLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
    /**
     * Filter which TipAccessLog to delete.
     */
    where: TipAccessLogWhereUniqueInput
  }

  /**
   * TipAccessLog deleteMany
   */
  export type TipAccessLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipAccessLogs to delete
     */
    where?: TipAccessLogWhereInput
    /**
     * Limit how many TipAccessLogs to delete.
     */
    limit?: number
  }

  /**
   * TipAccessLog without action
   */
  export type TipAccessLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipAccessLog
     */
    select?: TipAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipAccessLog
     */
    omit?: TipAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipAccessLogInclude<ExtArgs> | null
  }


  /**
   * Model TipResult
   */

  export type AggregateTipResult = {
    _count: TipResultCountAggregateOutputType | null
    _avg: TipResultAvgAggregateOutputType | null
    _sum: TipResultSumAggregateOutputType | null
    _min: TipResultMinAggregateOutputType | null
    _max: TipResultMaxAggregateOutputType | null
  }

  export type TipResultAvgAggregateOutputType = {
    id: number | null
    predictionId: number | null
  }

  export type TipResultSumAggregateOutputType = {
    id: number | null
    predictionId: number | null
  }

  export type TipResultMinAggregateOutputType = {
    id: number | null
    predictionId: number | null
    outcome: $Enums.TipOutcome | null
    evaluatedAt: Date | null
  }

  export type TipResultMaxAggregateOutputType = {
    id: number | null
    predictionId: number | null
    outcome: $Enums.TipOutcome | null
    evaluatedAt: Date | null
  }

  export type TipResultCountAggregateOutputType = {
    id: number
    predictionId: number
    outcome: number
    evaluatedAt: number
    _all: number
  }


  export type TipResultAvgAggregateInputType = {
    id?: true
    predictionId?: true
  }

  export type TipResultSumAggregateInputType = {
    id?: true
    predictionId?: true
  }

  export type TipResultMinAggregateInputType = {
    id?: true
    predictionId?: true
    outcome?: true
    evaluatedAt?: true
  }

  export type TipResultMaxAggregateInputType = {
    id?: true
    predictionId?: true
    outcome?: true
    evaluatedAt?: true
  }

  export type TipResultCountAggregateInputType = {
    id?: true
    predictionId?: true
    outcome?: true
    evaluatedAt?: true
    _all?: true
  }

  export type TipResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipResult to aggregate.
     */
    where?: TipResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipResults to fetch.
     */
    orderBy?: TipResultOrderByWithRelationInput | TipResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipResults
    **/
    _count?: true | TipResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipResultMaxAggregateInputType
  }

  export type GetTipResultAggregateType<T extends TipResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTipResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipResult[P]>
      : GetScalarType<T[P], AggregateTipResult[P]>
  }




  export type TipResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipResultWhereInput
    orderBy?: TipResultOrderByWithAggregationInput | TipResultOrderByWithAggregationInput[]
    by: TipResultScalarFieldEnum[] | TipResultScalarFieldEnum
    having?: TipResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipResultCountAggregateInputType | true
    _avg?: TipResultAvgAggregateInputType
    _sum?: TipResultSumAggregateInputType
    _min?: TipResultMinAggregateInputType
    _max?: TipResultMaxAggregateInputType
  }

  export type TipResultGroupByOutputType = {
    id: number
    predictionId: number
    outcome: $Enums.TipOutcome
    evaluatedAt: Date
    _count: TipResultCountAggregateOutputType | null
    _avg: TipResultAvgAggregateOutputType | null
    _sum: TipResultSumAggregateOutputType | null
    _min: TipResultMinAggregateOutputType | null
    _max: TipResultMaxAggregateOutputType | null
  }

  type GetTipResultGroupByPayload<T extends TipResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipResultGroupByOutputType[P]>
            : GetScalarType<T[P], TipResultGroupByOutputType[P]>
        }
      >
    >


  export type TipResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    predictionId?: boolean
    outcome?: boolean
    evaluatedAt?: boolean
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipResult"]>



  export type TipResultSelectScalar = {
    id?: boolean
    predictionId?: boolean
    outcome?: boolean
    evaluatedAt?: boolean
  }

  export type TipResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "predictionId" | "outcome" | "evaluatedAt", ExtArgs["result"]["tipResult"]>
  export type TipResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
  }

  export type $TipResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipResult"
    objects: {
      prediction: Prisma.$PredictionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      predictionId: number
      outcome: $Enums.TipOutcome
      evaluatedAt: Date
    }, ExtArgs["result"]["tipResult"]>
    composites: {}
  }

  type TipResultGetPayload<S extends boolean | null | undefined | TipResultDefaultArgs> = $Result.GetResult<Prisma.$TipResultPayload, S>

  type TipResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipResultCountAggregateInputType | true
    }

  export interface TipResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipResult'], meta: { name: 'TipResult' } }
    /**
     * Find zero or one TipResult that matches the filter.
     * @param {TipResultFindUniqueArgs} args - Arguments to find a TipResult
     * @example
     * // Get one TipResult
     * const tipResult = await prisma.tipResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipResultFindUniqueArgs>(args: SelectSubset<T, TipResultFindUniqueArgs<ExtArgs>>): Prisma__TipResultClient<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipResultFindUniqueOrThrowArgs} args - Arguments to find a TipResult
     * @example
     * // Get one TipResult
     * const tipResult = await prisma.tipResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TipResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipResultClient<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipResultFindFirstArgs} args - Arguments to find a TipResult
     * @example
     * // Get one TipResult
     * const tipResult = await prisma.tipResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipResultFindFirstArgs>(args?: SelectSubset<T, TipResultFindFirstArgs<ExtArgs>>): Prisma__TipResultClient<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipResultFindFirstOrThrowArgs} args - Arguments to find a TipResult
     * @example
     * // Get one TipResult
     * const tipResult = await prisma.tipResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TipResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipResultClient<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipResults
     * const tipResults = await prisma.tipResult.findMany()
     * 
     * // Get first 10 TipResults
     * const tipResults = await prisma.tipResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipResultWithIdOnly = await prisma.tipResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipResultFindManyArgs>(args?: SelectSubset<T, TipResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipResult.
     * @param {TipResultCreateArgs} args - Arguments to create a TipResult.
     * @example
     * // Create one TipResult
     * const TipResult = await prisma.tipResult.create({
     *   data: {
     *     // ... data to create a TipResult
     *   }
     * })
     * 
     */
    create<T extends TipResultCreateArgs>(args: SelectSubset<T, TipResultCreateArgs<ExtArgs>>): Prisma__TipResultClient<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipResults.
     * @param {TipResultCreateManyArgs} args - Arguments to create many TipResults.
     * @example
     * // Create many TipResults
     * const tipResult = await prisma.tipResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipResultCreateManyArgs>(args?: SelectSubset<T, TipResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipResult.
     * @param {TipResultDeleteArgs} args - Arguments to delete one TipResult.
     * @example
     * // Delete one TipResult
     * const TipResult = await prisma.tipResult.delete({
     *   where: {
     *     // ... filter to delete one TipResult
     *   }
     * })
     * 
     */
    delete<T extends TipResultDeleteArgs>(args: SelectSubset<T, TipResultDeleteArgs<ExtArgs>>): Prisma__TipResultClient<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipResult.
     * @param {TipResultUpdateArgs} args - Arguments to update one TipResult.
     * @example
     * // Update one TipResult
     * const tipResult = await prisma.tipResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipResultUpdateArgs>(args: SelectSubset<T, TipResultUpdateArgs<ExtArgs>>): Prisma__TipResultClient<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipResults.
     * @param {TipResultDeleteManyArgs} args - Arguments to filter TipResults to delete.
     * @example
     * // Delete a few TipResults
     * const { count } = await prisma.tipResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipResultDeleteManyArgs>(args?: SelectSubset<T, TipResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipResults
     * const tipResult = await prisma.tipResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipResultUpdateManyArgs>(args: SelectSubset<T, TipResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipResult.
     * @param {TipResultUpsertArgs} args - Arguments to update or create a TipResult.
     * @example
     * // Update or create a TipResult
     * const tipResult = await prisma.tipResult.upsert({
     *   create: {
     *     // ... data to create a TipResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipResult we want to update
     *   }
     * })
     */
    upsert<T extends TipResultUpsertArgs>(args: SelectSubset<T, TipResultUpsertArgs<ExtArgs>>): Prisma__TipResultClient<$Result.GetResult<Prisma.$TipResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipResultCountArgs} args - Arguments to filter TipResults to count.
     * @example
     * // Count the number of TipResults
     * const count = await prisma.tipResult.count({
     *   where: {
     *     // ... the filter for the TipResults we want to count
     *   }
     * })
    **/
    count<T extends TipResultCountArgs>(
      args?: Subset<T, TipResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipResultAggregateArgs>(args: Subset<T, TipResultAggregateArgs>): Prisma.PrismaPromise<GetTipResultAggregateType<T>>

    /**
     * Group by TipResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipResultGroupByArgs} args - Group by arguments.
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
      T extends TipResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipResultGroupByArgs['orderBy'] }
        : { orderBy?: TipResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipResult model
   */
  readonly fields: TipResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prediction<T extends PredictionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PredictionDefaultArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TipResult model
   */
  interface TipResultFieldRefs {
    readonly id: FieldRef<"TipResult", 'Int'>
    readonly predictionId: FieldRef<"TipResult", 'Int'>
    readonly outcome: FieldRef<"TipResult", 'TipOutcome'>
    readonly evaluatedAt: FieldRef<"TipResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipResult findUnique
   */
  export type TipResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    /**
     * Filter, which TipResult to fetch.
     */
    where: TipResultWhereUniqueInput
  }

  /**
   * TipResult findUniqueOrThrow
   */
  export type TipResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    /**
     * Filter, which TipResult to fetch.
     */
    where: TipResultWhereUniqueInput
  }

  /**
   * TipResult findFirst
   */
  export type TipResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    /**
     * Filter, which TipResult to fetch.
     */
    where?: TipResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipResults to fetch.
     */
    orderBy?: TipResultOrderByWithRelationInput | TipResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipResults.
     */
    cursor?: TipResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipResults.
     */
    distinct?: TipResultScalarFieldEnum | TipResultScalarFieldEnum[]
  }

  /**
   * TipResult findFirstOrThrow
   */
  export type TipResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    /**
     * Filter, which TipResult to fetch.
     */
    where?: TipResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipResults to fetch.
     */
    orderBy?: TipResultOrderByWithRelationInput | TipResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipResults.
     */
    cursor?: TipResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipResults.
     */
    distinct?: TipResultScalarFieldEnum | TipResultScalarFieldEnum[]
  }

  /**
   * TipResult findMany
   */
  export type TipResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    /**
     * Filter, which TipResults to fetch.
     */
    where?: TipResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipResults to fetch.
     */
    orderBy?: TipResultOrderByWithRelationInput | TipResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipResults.
     */
    cursor?: TipResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipResults.
     */
    skip?: number
    distinct?: TipResultScalarFieldEnum | TipResultScalarFieldEnum[]
  }

  /**
   * TipResult create
   */
  export type TipResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TipResult.
     */
    data: XOR<TipResultCreateInput, TipResultUncheckedCreateInput>
  }

  /**
   * TipResult createMany
   */
  export type TipResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipResults.
     */
    data: TipResultCreateManyInput | TipResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipResult update
   */
  export type TipResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TipResult.
     */
    data: XOR<TipResultUpdateInput, TipResultUncheckedUpdateInput>
    /**
     * Choose, which TipResult to update.
     */
    where: TipResultWhereUniqueInput
  }

  /**
   * TipResult updateMany
   */
  export type TipResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipResults.
     */
    data: XOR<TipResultUpdateManyMutationInput, TipResultUncheckedUpdateManyInput>
    /**
     * Filter which TipResults to update
     */
    where?: TipResultWhereInput
    /**
     * Limit how many TipResults to update.
     */
    limit?: number
  }

  /**
   * TipResult upsert
   */
  export type TipResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TipResult to update in case it exists.
     */
    where: TipResultWhereUniqueInput
    /**
     * In case the TipResult found by the `where` argument doesn't exist, create a new TipResult with this data.
     */
    create: XOR<TipResultCreateInput, TipResultUncheckedCreateInput>
    /**
     * In case the TipResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipResultUpdateInput, TipResultUncheckedUpdateInput>
  }

  /**
   * TipResult delete
   */
  export type TipResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
    /**
     * Filter which TipResult to delete.
     */
    where: TipResultWhereUniqueInput
  }

  /**
   * TipResult deleteMany
   */
  export type TipResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipResults to delete
     */
    where?: TipResultWhereInput
    /**
     * Limit how many TipResults to delete.
     */
    limit?: number
  }

  /**
   * TipResult without action
   */
  export type TipResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipResult
     */
    select?: TipResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipResult
     */
    omit?: TipResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipResultInclude<ExtArgs> | null
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
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    role: $Enums.Role | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    role: $Enums.Role | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    role: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    role?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    role?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    role?: true
    updatedAt?: true
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
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    role: $Enums.Role
    updatedAt: Date
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    role?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    role?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "role" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      role: $Enums.Role
      updatedAt: Date
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>



  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
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


  export const TipPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    oddRange: 'oddRange',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TipPlanScalarFieldEnum = (typeof TipPlanScalarFieldEnum)[keyof typeof TipPlanScalarFieldEnum]


  export const FixtureScalarFieldEnum: {
    id: 'id',
    matchDate: 'matchDate',
    homeTeam: 'homeTeam',
    awayTeam: 'awayTeam',
    competition: 'competition',
    result: 'result',
    status: 'status',
    fixtureTip: 'fixtureTip',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FixtureScalarFieldEnum = (typeof FixtureScalarFieldEnum)[keyof typeof FixtureScalarFieldEnum]


  export const JackpotScalarFieldEnum: {
    id: 'id',
    startDatetime: 'startDatetime',
    endDatetime: 'endDatetime',
    amount: 'amount',
    isActive: 'isActive',
    fixtureId: 'fixtureId'
  };

  export type JackpotScalarFieldEnum = (typeof JackpotScalarFieldEnum)[keyof typeof JackpotScalarFieldEnum]


  export const PredictionScalarFieldEnum: {
    id: 'id',
    tipText: 'tipText',
    odd: 'odd',
    tipDate: 'tipDate',
    isPublished: 'isPublished',
    fixtureId: 'fixtureId',
    planId: 'planId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PredictionScalarFieldEnum = (typeof PredictionScalarFieldEnum)[keyof typeof PredictionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    mobileNumber: 'mobileNumber',
    mpesaRequestId: 'mpesaRequestId',
    predictionId: 'predictionId',
    planId: 'planId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const TipAccessLogScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    ipAddress: 'ipAddress',
    accessedAt: 'accessedAt'
  };

  export type TipAccessLogScalarFieldEnum = (typeof TipAccessLogScalarFieldEnum)[keyof typeof TipAccessLogScalarFieldEnum]


  export const TipResultScalarFieldEnum: {
    id: 'id',
    predictionId: 'predictionId',
    outcome: 'outcome',
    evaluatedAt: 'evaluatedAt'
  };

  export type TipResultScalarFieldEnum = (typeof TipResultScalarFieldEnum)[keyof typeof TipResultScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    role: 'role',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TipPlanOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    oddRange: 'oddRange'
  };

  export type TipPlanOrderByRelevanceFieldEnum = (typeof TipPlanOrderByRelevanceFieldEnum)[keyof typeof TipPlanOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const FixtureOrderByRelevanceFieldEnum: {
    homeTeam: 'homeTeam',
    awayTeam: 'awayTeam',
    competition: 'competition',
    result: 'result',
    fixtureTip: 'fixtureTip'
  };

  export type FixtureOrderByRelevanceFieldEnum = (typeof FixtureOrderByRelevanceFieldEnum)[keyof typeof FixtureOrderByRelevanceFieldEnum]


  export const PredictionOrderByRelevanceFieldEnum: {
    tipText: 'tipText'
  };

  export type PredictionOrderByRelevanceFieldEnum = (typeof PredictionOrderByRelevanceFieldEnum)[keyof typeof PredictionOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    mobileNumber: 'mobileNumber',
    mpesaRequestId: 'mpesaRequestId'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const TipAccessLogOrderByRelevanceFieldEnum: {
    ipAddress: 'ipAddress'
  };

  export type TipAccessLogOrderByRelevanceFieldEnum = (typeof TipAccessLogOrderByRelevanceFieldEnum)[keyof typeof TipAccessLogOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    scope: 'scope',
    password: 'password'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const VerificationOrderByRelevanceFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value'
  };

  export type VerificationOrderByRelevanceFieldEnum = (typeof VerificationOrderByRelevanceFieldEnum)[keyof typeof VerificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'TipOutcome'
   */
  export type EnumTipOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipOutcome'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    
  /**
   * Deep Input Types
   */


  export type TipPlanWhereInput = {
    AND?: TipPlanWhereInput | TipPlanWhereInput[]
    OR?: TipPlanWhereInput[]
    NOT?: TipPlanWhereInput | TipPlanWhereInput[]
    id?: IntFilter<"TipPlan"> | number
    name?: StringFilter<"TipPlan"> | string
    price?: FloatFilter<"TipPlan"> | number
    description?: StringFilter<"TipPlan"> | string
    oddRange?: StringFilter<"TipPlan"> | string
    isActive?: BoolFilter<"TipPlan"> | boolean
    createdAt?: DateTimeFilter<"TipPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TipPlan"> | Date | string
    predictions?: PredictionListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type TipPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    oddRange?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    predictions?: PredictionOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: TipPlanOrderByRelevanceInput
  }

  export type TipPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipPlanWhereInput | TipPlanWhereInput[]
    OR?: TipPlanWhereInput[]
    NOT?: TipPlanWhereInput | TipPlanWhereInput[]
    name?: StringFilter<"TipPlan"> | string
    price?: FloatFilter<"TipPlan"> | number
    description?: StringFilter<"TipPlan"> | string
    oddRange?: StringFilter<"TipPlan"> | string
    isActive?: BoolFilter<"TipPlan"> | boolean
    createdAt?: DateTimeFilter<"TipPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TipPlan"> | Date | string
    predictions?: PredictionListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type TipPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    oddRange?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TipPlanCountOrderByAggregateInput
    _avg?: TipPlanAvgOrderByAggregateInput
    _max?: TipPlanMaxOrderByAggregateInput
    _min?: TipPlanMinOrderByAggregateInput
    _sum?: TipPlanSumOrderByAggregateInput
  }

  export type TipPlanScalarWhereWithAggregatesInput = {
    AND?: TipPlanScalarWhereWithAggregatesInput | TipPlanScalarWhereWithAggregatesInput[]
    OR?: TipPlanScalarWhereWithAggregatesInput[]
    NOT?: TipPlanScalarWhereWithAggregatesInput | TipPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipPlan"> | number
    name?: StringWithAggregatesFilter<"TipPlan"> | string
    price?: FloatWithAggregatesFilter<"TipPlan"> | number
    description?: StringWithAggregatesFilter<"TipPlan"> | string
    oddRange?: StringWithAggregatesFilter<"TipPlan"> | string
    isActive?: BoolWithAggregatesFilter<"TipPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TipPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TipPlan"> | Date | string
  }

  export type FixtureWhereInput = {
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    id?: IntFilter<"Fixture"> | number
    matchDate?: DateTimeFilter<"Fixture"> | Date | string
    homeTeam?: StringFilter<"Fixture"> | string
    awayTeam?: StringFilter<"Fixture"> | string
    competition?: StringFilter<"Fixture"> | string
    result?: StringNullableFilter<"Fixture"> | string | null
    status?: EnumMatchStatusFilter<"Fixture"> | $Enums.MatchStatus
    fixtureTip?: StringFilter<"Fixture"> | string
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
    updatedAt?: DateTimeFilter<"Fixture"> | Date | string
    predictions?: PredictionListRelationFilter
    jackpot?: JackpotListRelationFilter
  }

  export type FixtureOrderByWithRelationInput = {
    id?: SortOrder
    matchDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    competition?: SortOrder
    result?: SortOrderInput | SortOrder
    status?: SortOrder
    fixtureTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    predictions?: PredictionOrderByRelationAggregateInput
    jackpot?: JackpotOrderByRelationAggregateInput
    _relevance?: FixtureOrderByRelevanceInput
  }

  export type FixtureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    matchDate?: DateTimeFilter<"Fixture"> | Date | string
    homeTeam?: StringFilter<"Fixture"> | string
    awayTeam?: StringFilter<"Fixture"> | string
    competition?: StringFilter<"Fixture"> | string
    result?: StringNullableFilter<"Fixture"> | string | null
    status?: EnumMatchStatusFilter<"Fixture"> | $Enums.MatchStatus
    fixtureTip?: StringFilter<"Fixture"> | string
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
    updatedAt?: DateTimeFilter<"Fixture"> | Date | string
    predictions?: PredictionListRelationFilter
    jackpot?: JackpotListRelationFilter
  }, "id">

  export type FixtureOrderByWithAggregationInput = {
    id?: SortOrder
    matchDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    competition?: SortOrder
    result?: SortOrderInput | SortOrder
    status?: SortOrder
    fixtureTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FixtureCountOrderByAggregateInput
    _avg?: FixtureAvgOrderByAggregateInput
    _max?: FixtureMaxOrderByAggregateInput
    _min?: FixtureMinOrderByAggregateInput
    _sum?: FixtureSumOrderByAggregateInput
  }

  export type FixtureScalarWhereWithAggregatesInput = {
    AND?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    OR?: FixtureScalarWhereWithAggregatesInput[]
    NOT?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fixture"> | number
    matchDate?: DateTimeWithAggregatesFilter<"Fixture"> | Date | string
    homeTeam?: StringWithAggregatesFilter<"Fixture"> | string
    awayTeam?: StringWithAggregatesFilter<"Fixture"> | string
    competition?: StringWithAggregatesFilter<"Fixture"> | string
    result?: StringNullableWithAggregatesFilter<"Fixture"> | string | null
    status?: EnumMatchStatusWithAggregatesFilter<"Fixture"> | $Enums.MatchStatus
    fixtureTip?: StringWithAggregatesFilter<"Fixture"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fixture"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fixture"> | Date | string
  }

  export type JackpotWhereInput = {
    AND?: JackpotWhereInput | JackpotWhereInput[]
    OR?: JackpotWhereInput[]
    NOT?: JackpotWhereInput | JackpotWhereInput[]
    id?: IntFilter<"Jackpot"> | number
    startDatetime?: DateTimeFilter<"Jackpot"> | Date | string
    endDatetime?: DateTimeFilter<"Jackpot"> | Date | string
    amount?: FloatFilter<"Jackpot"> | number
    isActive?: BoolFilter<"Jackpot"> | boolean
    fixtureId?: IntFilter<"Jackpot"> | number
    fixture?: XOR<FixtureScalarRelationFilter, FixtureWhereInput>
  }

  export type JackpotOrderByWithRelationInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    fixtureId?: SortOrder
    fixture?: FixtureOrderByWithRelationInput
  }

  export type JackpotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JackpotWhereInput | JackpotWhereInput[]
    OR?: JackpotWhereInput[]
    NOT?: JackpotWhereInput | JackpotWhereInput[]
    startDatetime?: DateTimeFilter<"Jackpot"> | Date | string
    endDatetime?: DateTimeFilter<"Jackpot"> | Date | string
    amount?: FloatFilter<"Jackpot"> | number
    isActive?: BoolFilter<"Jackpot"> | boolean
    fixtureId?: IntFilter<"Jackpot"> | number
    fixture?: XOR<FixtureScalarRelationFilter, FixtureWhereInput>
  }, "id">

  export type JackpotOrderByWithAggregationInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    fixtureId?: SortOrder
    _count?: JackpotCountOrderByAggregateInput
    _avg?: JackpotAvgOrderByAggregateInput
    _max?: JackpotMaxOrderByAggregateInput
    _min?: JackpotMinOrderByAggregateInput
    _sum?: JackpotSumOrderByAggregateInput
  }

  export type JackpotScalarWhereWithAggregatesInput = {
    AND?: JackpotScalarWhereWithAggregatesInput | JackpotScalarWhereWithAggregatesInput[]
    OR?: JackpotScalarWhereWithAggregatesInput[]
    NOT?: JackpotScalarWhereWithAggregatesInput | JackpotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jackpot"> | number
    startDatetime?: DateTimeWithAggregatesFilter<"Jackpot"> | Date | string
    endDatetime?: DateTimeWithAggregatesFilter<"Jackpot"> | Date | string
    amount?: FloatWithAggregatesFilter<"Jackpot"> | number
    isActive?: BoolWithAggregatesFilter<"Jackpot"> | boolean
    fixtureId?: IntWithAggregatesFilter<"Jackpot"> | number
  }

  export type PredictionWhereInput = {
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    id?: IntFilter<"Prediction"> | number
    tipText?: StringFilter<"Prediction"> | string
    odd?: FloatFilter<"Prediction"> | number
    tipDate?: DateTimeFilter<"Prediction"> | Date | string
    isPublished?: BoolFilter<"Prediction"> | boolean
    fixtureId?: IntFilter<"Prediction"> | number
    planId?: IntNullableFilter<"Prediction"> | number | null
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeFilter<"Prediction"> | Date | string
    fixture?: XOR<FixtureScalarRelationFilter, FixtureWhereInput>
    plan?: XOR<TipPlanNullableScalarRelationFilter, TipPlanWhereInput> | null
    result?: XOR<TipResultNullableScalarRelationFilter, TipResultWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type PredictionOrderByWithRelationInput = {
    id?: SortOrder
    tipText?: SortOrder
    odd?: SortOrder
    tipDate?: SortOrder
    isPublished?: SortOrder
    fixtureId?: SortOrder
    planId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fixture?: FixtureOrderByWithRelationInput
    plan?: TipPlanOrderByWithRelationInput
    result?: TipResultOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: PredictionOrderByRelevanceInput
  }

  export type PredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    tipText?: StringFilter<"Prediction"> | string
    odd?: FloatFilter<"Prediction"> | number
    tipDate?: DateTimeFilter<"Prediction"> | Date | string
    isPublished?: BoolFilter<"Prediction"> | boolean
    fixtureId?: IntFilter<"Prediction"> | number
    planId?: IntNullableFilter<"Prediction"> | number | null
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeFilter<"Prediction"> | Date | string
    fixture?: XOR<FixtureScalarRelationFilter, FixtureWhereInput>
    plan?: XOR<TipPlanNullableScalarRelationFilter, TipPlanWhereInput> | null
    result?: XOR<TipResultNullableScalarRelationFilter, TipResultWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id">

  export type PredictionOrderByWithAggregationInput = {
    id?: SortOrder
    tipText?: SortOrder
    odd?: SortOrder
    tipDate?: SortOrder
    isPublished?: SortOrder
    fixtureId?: SortOrder
    planId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PredictionCountOrderByAggregateInput
    _avg?: PredictionAvgOrderByAggregateInput
    _max?: PredictionMaxOrderByAggregateInput
    _min?: PredictionMinOrderByAggregateInput
    _sum?: PredictionSumOrderByAggregateInput
  }

  export type PredictionScalarWhereWithAggregatesInput = {
    AND?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    OR?: PredictionScalarWhereWithAggregatesInput[]
    NOT?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prediction"> | number
    tipText?: StringWithAggregatesFilter<"Prediction"> | string
    odd?: FloatWithAggregatesFilter<"Prediction"> | number
    tipDate?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
    isPublished?: BoolWithAggregatesFilter<"Prediction"> | boolean
    fixtureId?: IntWithAggregatesFilter<"Prediction"> | number
    planId?: IntNullableWithAggregatesFilter<"Prediction"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    mobileNumber?: StringFilter<"Payment"> | string
    mpesaRequestId?: StringFilter<"Payment"> | string
    predictionId?: IntFilter<"Payment"> | number
    planId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    prediction?: XOR<PredictionScalarRelationFilter, PredictionWhereInput>
    plan?: XOR<TipPlanScalarRelationFilter, TipPlanWhereInput>
    tipAccessLogs?: TipAccessLogListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    mpesaRequestId?: SortOrder
    predictionId?: SortOrder
    planId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prediction?: PredictionOrderByWithRelationInput
    plan?: TipPlanOrderByWithRelationInput
    tipAccessLogs?: TipAccessLogOrderByRelationAggregateInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mpesaRequestId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    mobileNumber?: StringFilter<"Payment"> | string
    predictionId?: IntFilter<"Payment"> | number
    planId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    prediction?: XOR<PredictionScalarRelationFilter, PredictionWhereInput>
    plan?: XOR<TipPlanScalarRelationFilter, TipPlanWhereInput>
    tipAccessLogs?: TipAccessLogListRelationFilter
  }, "id" | "mpesaRequestId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    mpesaRequestId?: SortOrder
    predictionId?: SortOrder
    planId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    mobileNumber?: StringWithAggregatesFilter<"Payment"> | string
    mpesaRequestId?: StringWithAggregatesFilter<"Payment"> | string
    predictionId?: IntWithAggregatesFilter<"Payment"> | number
    planId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type TipAccessLogWhereInput = {
    AND?: TipAccessLogWhereInput | TipAccessLogWhereInput[]
    OR?: TipAccessLogWhereInput[]
    NOT?: TipAccessLogWhereInput | TipAccessLogWhereInput[]
    id?: IntFilter<"TipAccessLog"> | number
    paymentId?: IntFilter<"TipAccessLog"> | number
    ipAddress?: StringNullableFilter<"TipAccessLog"> | string | null
    accessedAt?: DateTimeFilter<"TipAccessLog"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type TipAccessLogOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    accessedAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
    _relevance?: TipAccessLogOrderByRelevanceInput
  }

  export type TipAccessLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipAccessLogWhereInput | TipAccessLogWhereInput[]
    OR?: TipAccessLogWhereInput[]
    NOT?: TipAccessLogWhereInput | TipAccessLogWhereInput[]
    paymentId?: IntFilter<"TipAccessLog"> | number
    ipAddress?: StringNullableFilter<"TipAccessLog"> | string | null
    accessedAt?: DateTimeFilter<"TipAccessLog"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id">

  export type TipAccessLogOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    accessedAt?: SortOrder
    _count?: TipAccessLogCountOrderByAggregateInput
    _avg?: TipAccessLogAvgOrderByAggregateInput
    _max?: TipAccessLogMaxOrderByAggregateInput
    _min?: TipAccessLogMinOrderByAggregateInput
    _sum?: TipAccessLogSumOrderByAggregateInput
  }

  export type TipAccessLogScalarWhereWithAggregatesInput = {
    AND?: TipAccessLogScalarWhereWithAggregatesInput | TipAccessLogScalarWhereWithAggregatesInput[]
    OR?: TipAccessLogScalarWhereWithAggregatesInput[]
    NOT?: TipAccessLogScalarWhereWithAggregatesInput | TipAccessLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipAccessLog"> | number
    paymentId?: IntWithAggregatesFilter<"TipAccessLog"> | number
    ipAddress?: StringNullableWithAggregatesFilter<"TipAccessLog"> | string | null
    accessedAt?: DateTimeWithAggregatesFilter<"TipAccessLog"> | Date | string
  }

  export type TipResultWhereInput = {
    AND?: TipResultWhereInput | TipResultWhereInput[]
    OR?: TipResultWhereInput[]
    NOT?: TipResultWhereInput | TipResultWhereInput[]
    id?: IntFilter<"TipResult"> | number
    predictionId?: IntFilter<"TipResult"> | number
    outcome?: EnumTipOutcomeFilter<"TipResult"> | $Enums.TipOutcome
    evaluatedAt?: DateTimeFilter<"TipResult"> | Date | string
    prediction?: XOR<PredictionScalarRelationFilter, PredictionWhereInput>
  }

  export type TipResultOrderByWithRelationInput = {
    id?: SortOrder
    predictionId?: SortOrder
    outcome?: SortOrder
    evaluatedAt?: SortOrder
    prediction?: PredictionOrderByWithRelationInput
  }

  export type TipResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    predictionId?: number
    AND?: TipResultWhereInput | TipResultWhereInput[]
    OR?: TipResultWhereInput[]
    NOT?: TipResultWhereInput | TipResultWhereInput[]
    outcome?: EnumTipOutcomeFilter<"TipResult"> | $Enums.TipOutcome
    evaluatedAt?: DateTimeFilter<"TipResult"> | Date | string
    prediction?: XOR<PredictionScalarRelationFilter, PredictionWhereInput>
  }, "id" | "predictionId">

  export type TipResultOrderByWithAggregationInput = {
    id?: SortOrder
    predictionId?: SortOrder
    outcome?: SortOrder
    evaluatedAt?: SortOrder
    _count?: TipResultCountOrderByAggregateInput
    _avg?: TipResultAvgOrderByAggregateInput
    _max?: TipResultMaxOrderByAggregateInput
    _min?: TipResultMinOrderByAggregateInput
    _sum?: TipResultSumOrderByAggregateInput
  }

  export type TipResultScalarWhereWithAggregatesInput = {
    AND?: TipResultScalarWhereWithAggregatesInput | TipResultScalarWhereWithAggregatesInput[]
    OR?: TipResultScalarWhereWithAggregatesInput[]
    NOT?: TipResultScalarWhereWithAggregatesInput | TipResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipResult"> | number
    predictionId?: IntWithAggregatesFilter<"TipResult"> | number
    outcome?: EnumTipOutcomeWithAggregatesFilter<"TipResult"> | $Enums.TipOutcome
    evaluatedAt?: DateTimeWithAggregatesFilter<"TipResult"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: VerificationOrderByRelevanceInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type TipPlanCreateInput = {
    name: string
    price: number
    description: string
    oddRange: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: PredictionCreateNestedManyWithoutPlanInput
    payments?: PaymentCreateNestedManyWithoutPlanInput
  }

  export type TipPlanUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    description: string
    oddRange: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: PredictionUncheckedCreateNestedManyWithoutPlanInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TipPlanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    oddRange?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionUpdateManyWithoutPlanNestedInput
    payments?: PaymentUpdateManyWithoutPlanNestedInput
  }

  export type TipPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    oddRange?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionUncheckedUpdateManyWithoutPlanNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TipPlanCreateManyInput = {
    id?: number
    name: string
    price: number
    description: string
    oddRange: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipPlanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    oddRange?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    oddRange?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureCreateInput = {
    matchDate: Date | string
    homeTeam: string
    awayTeam: string
    competition: string
    result?: string | null
    status?: $Enums.MatchStatus
    fixtureTip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: PredictionCreateNestedManyWithoutFixtureInput
    jackpot?: JackpotCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUncheckedCreateInput = {
    id?: number
    matchDate: Date | string
    homeTeam: string
    awayTeam: string
    competition: string
    result?: string | null
    status?: $Enums.MatchStatus
    fixtureTip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: PredictionUncheckedCreateNestedManyWithoutFixtureInput
    jackpot?: JackpotUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUpdateInput = {
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    fixtureTip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionUpdateManyWithoutFixtureNestedInput
    jackpot?: JackpotUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    fixtureTip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionUncheckedUpdateManyWithoutFixtureNestedInput
    jackpot?: JackpotUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureCreateManyInput = {
    id?: number
    matchDate: Date | string
    homeTeam: string
    awayTeam: string
    competition: string
    result?: string | null
    status?: $Enums.MatchStatus
    fixtureTip: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FixtureUpdateManyMutationInput = {
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    fixtureTip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    fixtureTip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JackpotCreateInput = {
    startDatetime: Date | string
    endDatetime: Date | string
    amount: number
    isActive?: boolean
    fixture: FixtureCreateNestedOneWithoutJackpotInput
  }

  export type JackpotUncheckedCreateInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    amount: number
    isActive?: boolean
    fixtureId: number
  }

  export type JackpotUpdateInput = {
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    fixture?: FixtureUpdateOneRequiredWithoutJackpotNestedInput
  }

  export type JackpotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    fixtureId?: IntFieldUpdateOperationsInput | number
  }

  export type JackpotCreateManyInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    amount: number
    isActive?: boolean
    fixtureId: number
  }

  export type JackpotUpdateManyMutationInput = {
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JackpotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    fixtureId?: IntFieldUpdateOperationsInput | number
  }

  export type PredictionCreateInput = {
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutPredictionsInput
    plan?: TipPlanCreateNestedOneWithoutPredictionsInput
    result?: TipResultCreateNestedOneWithoutPredictionInput
    payments?: PaymentCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUncheckedCreateInput = {
    id?: number
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    fixtureId: number
    planId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    result?: TipResultUncheckedCreateNestedOneWithoutPredictionInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUpdateInput = {
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutPredictionsNestedInput
    plan?: TipPlanUpdateOneWithoutPredictionsNestedInput
    result?: TipResultUpdateOneWithoutPredictionNestedInput
    payments?: PaymentUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    fixtureId?: IntFieldUpdateOperationsInput | number
    planId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: TipResultUncheckedUpdateOneWithoutPredictionNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionCreateManyInput = {
    id?: number
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    fixtureId: number
    planId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionUpdateManyMutationInput = {
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    fixtureId?: IntFieldUpdateOperationsInput | number
    planId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    mobileNumber: string
    mpesaRequestId: string
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction: PredictionCreateNestedOneWithoutPaymentsInput
    plan: TipPlanCreateNestedOneWithoutPaymentsInput
    tipAccessLogs?: TipAccessLogCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    mobileNumber: string
    mpesaRequestId: string
    predictionId: number
    planId: number
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tipAccessLogs?: TipAccessLogUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUpdateOneRequiredWithoutPaymentsNestedInput
    plan?: TipPlanUpdateOneRequiredWithoutPaymentsNestedInput
    tipAccessLogs?: TipAccessLogUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    predictionId?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipAccessLogs?: TipAccessLogUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: number
    mobileNumber: string
    mpesaRequestId: string
    predictionId: number
    planId: number
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    predictionId?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipAccessLogCreateInput = {
    ipAddress?: string | null
    accessedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutTipAccessLogsInput
  }

  export type TipAccessLogUncheckedCreateInput = {
    id?: number
    paymentId: number
    ipAddress?: string | null
    accessedAt?: Date | string
  }

  export type TipAccessLogUpdateInput = {
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutTipAccessLogsNestedInput
  }

  export type TipAccessLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipAccessLogCreateManyInput = {
    id?: number
    paymentId: number
    ipAddress?: string | null
    accessedAt?: Date | string
  }

  export type TipAccessLogUpdateManyMutationInput = {
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipAccessLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipResultCreateInput = {
    outcome: $Enums.TipOutcome
    evaluatedAt?: Date | string
    prediction: PredictionCreateNestedOneWithoutResultInput
  }

  export type TipResultUncheckedCreateInput = {
    id?: number
    predictionId: number
    outcome: $Enums.TipOutcome
    evaluatedAt?: Date | string
  }

  export type TipResultUpdateInput = {
    outcome?: EnumTipOutcomeFieldUpdateOperationsInput | $Enums.TipOutcome
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUpdateOneRequiredWithoutResultNestedInput
  }

  export type TipResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    predictionId?: IntFieldUpdateOperationsInput | number
    outcome?: EnumTipOutcomeFieldUpdateOperationsInput | $Enums.TipOutcome
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipResultCreateManyInput = {
    id?: number
    predictionId: number
    outcome: $Enums.TipOutcome
    evaluatedAt?: Date | string
  }

  export type TipResultUpdateManyMutationInput = {
    outcome?: EnumTipOutcomeFieldUpdateOperationsInput | $Enums.TipOutcome
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    predictionId?: IntFieldUpdateOperationsInput | number
    outcome?: EnumTipOutcomeFieldUpdateOperationsInput | $Enums.TipOutcome
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PredictionListRelationFilter = {
    every?: PredictionWhereInput
    some?: PredictionWhereInput
    none?: PredictionWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipPlanOrderByRelevanceInput = {
    fields: TipPlanOrderByRelevanceFieldEnum | TipPlanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TipPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    oddRange?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type TipPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    oddRange?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    oddRange?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipPlanSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[]
    notIn?: $Enums.MatchStatus[]
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type JackpotListRelationFilter = {
    every?: JackpotWhereInput
    some?: JackpotWhereInput
    none?: JackpotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JackpotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FixtureOrderByRelevanceInput = {
    fields: FixtureOrderByRelevanceFieldEnum | FixtureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FixtureCountOrderByAggregateInput = {
    id?: SortOrder
    matchDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    competition?: SortOrder
    result?: SortOrder
    status?: SortOrder
    fixtureTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FixtureAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FixtureMaxOrderByAggregateInput = {
    id?: SortOrder
    matchDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    competition?: SortOrder
    result?: SortOrder
    status?: SortOrder
    fixtureTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FixtureMinOrderByAggregateInput = {
    id?: SortOrder
    matchDate?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    competition?: SortOrder
    result?: SortOrder
    status?: SortOrder
    fixtureTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FixtureSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[]
    notIn?: $Enums.MatchStatus[]
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type FixtureScalarRelationFilter = {
    is?: FixtureWhereInput
    isNot?: FixtureWhereInput
  }

  export type JackpotCountOrderByAggregateInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    fixtureId?: SortOrder
  }

  export type JackpotAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    fixtureId?: SortOrder
  }

  export type JackpotMaxOrderByAggregateInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    fixtureId?: SortOrder
  }

  export type JackpotMinOrderByAggregateInput = {
    id?: SortOrder
    startDatetime?: SortOrder
    endDatetime?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    fixtureId?: SortOrder
  }

  export type JackpotSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    fixtureId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TipPlanNullableScalarRelationFilter = {
    is?: TipPlanWhereInput | null
    isNot?: TipPlanWhereInput | null
  }

  export type TipResultNullableScalarRelationFilter = {
    is?: TipResultWhereInput | null
    isNot?: TipResultWhereInput | null
  }

  export type PredictionOrderByRelevanceInput = {
    fields: PredictionOrderByRelevanceFieldEnum | PredictionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PredictionCountOrderByAggregateInput = {
    id?: SortOrder
    tipText?: SortOrder
    odd?: SortOrder
    tipDate?: SortOrder
    isPublished?: SortOrder
    fixtureId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionAvgOrderByAggregateInput = {
    id?: SortOrder
    odd?: SortOrder
    fixtureId?: SortOrder
    planId?: SortOrder
  }

  export type PredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    tipText?: SortOrder
    odd?: SortOrder
    tipDate?: SortOrder
    isPublished?: SortOrder
    fixtureId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionMinOrderByAggregateInput = {
    id?: SortOrder
    tipText?: SortOrder
    odd?: SortOrder
    tipDate?: SortOrder
    isPublished?: SortOrder
    fixtureId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionSumOrderByAggregateInput = {
    id?: SortOrder
    odd?: SortOrder
    fixtureId?: SortOrder
    planId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PredictionScalarRelationFilter = {
    is?: PredictionWhereInput
    isNot?: PredictionWhereInput
  }

  export type TipPlanScalarRelationFilter = {
    is?: TipPlanWhereInput
    isNot?: TipPlanWhereInput
  }

  export type TipAccessLogListRelationFilter = {
    every?: TipAccessLogWhereInput
    some?: TipAccessLogWhereInput
    none?: TipAccessLogWhereInput
  }

  export type TipAccessLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    mpesaRequestId?: SortOrder
    predictionId?: SortOrder
    planId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    planId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    mpesaRequestId?: SortOrder
    predictionId?: SortOrder
    planId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    mpesaRequestId?: SortOrder
    predictionId?: SortOrder
    planId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    planId?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type TipAccessLogOrderByRelevanceInput = {
    fields: TipAccessLogOrderByRelevanceFieldEnum | TipAccessLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TipAccessLogCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    ipAddress?: SortOrder
    accessedAt?: SortOrder
  }

  export type TipAccessLogAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type TipAccessLogMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    ipAddress?: SortOrder
    accessedAt?: SortOrder
  }

  export type TipAccessLogMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    ipAddress?: SortOrder
    accessedAt?: SortOrder
  }

  export type TipAccessLogSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type EnumTipOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipOutcome | EnumTipOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.TipOutcome[]
    notIn?: $Enums.TipOutcome[]
    not?: NestedEnumTipOutcomeFilter<$PrismaModel> | $Enums.TipOutcome
  }

  export type TipResultCountOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    outcome?: SortOrder
    evaluatedAt?: SortOrder
  }

  export type TipResultAvgOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
  }

  export type TipResultMaxOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    outcome?: SortOrder
    evaluatedAt?: SortOrder
  }

  export type TipResultMinOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    outcome?: SortOrder
    evaluatedAt?: SortOrder
  }

  export type TipResultSumOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
  }

  export type EnumTipOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipOutcome | EnumTipOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.TipOutcome[]
    notIn?: $Enums.TipOutcome[]
    not?: NestedEnumTipOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.TipOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipOutcomeFilter<$PrismaModel>
    _max?: NestedEnumTipOutcomeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationOrderByRelevanceInput = {
    fields: VerificationOrderByRelevanceFieldEnum | VerificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionCreateNestedManyWithoutPlanInput = {
    create?: XOR<PredictionCreateWithoutPlanInput, PredictionUncheckedCreateWithoutPlanInput> | PredictionCreateWithoutPlanInput[] | PredictionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutPlanInput | PredictionCreateOrConnectWithoutPlanInput[]
    createMany?: PredictionCreateManyPlanInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutPlanInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PredictionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PredictionCreateWithoutPlanInput, PredictionUncheckedCreateWithoutPlanInput> | PredictionCreateWithoutPlanInput[] | PredictionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutPlanInput | PredictionCreateOrConnectWithoutPlanInput[]
    createMany?: PredictionCreateManyPlanInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PredictionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PredictionCreateWithoutPlanInput, PredictionUncheckedCreateWithoutPlanInput> | PredictionCreateWithoutPlanInput[] | PredictionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutPlanInput | PredictionCreateOrConnectWithoutPlanInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutPlanInput | PredictionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PredictionCreateManyPlanInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutPlanInput | PredictionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutPlanInput | PredictionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPlanInput | PaymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPlanInput | PaymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPlanInput | PaymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PredictionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PredictionCreateWithoutPlanInput, PredictionUncheckedCreateWithoutPlanInput> | PredictionCreateWithoutPlanInput[] | PredictionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutPlanInput | PredictionCreateOrConnectWithoutPlanInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutPlanInput | PredictionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PredictionCreateManyPlanInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutPlanInput | PredictionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutPlanInput | PredictionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPlanInput | PaymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPlanInput | PaymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPlanInput | PaymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PredictionCreateNestedManyWithoutFixtureInput = {
    create?: XOR<PredictionCreateWithoutFixtureInput, PredictionUncheckedCreateWithoutFixtureInput> | PredictionCreateWithoutFixtureInput[] | PredictionUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutFixtureInput | PredictionCreateOrConnectWithoutFixtureInput[]
    createMany?: PredictionCreateManyFixtureInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type JackpotCreateNestedManyWithoutFixtureInput = {
    create?: XOR<JackpotCreateWithoutFixtureInput, JackpotUncheckedCreateWithoutFixtureInput> | JackpotCreateWithoutFixtureInput[] | JackpotUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: JackpotCreateOrConnectWithoutFixtureInput | JackpotCreateOrConnectWithoutFixtureInput[]
    createMany?: JackpotCreateManyFixtureInputEnvelope
    connect?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
  }

  export type PredictionUncheckedCreateNestedManyWithoutFixtureInput = {
    create?: XOR<PredictionCreateWithoutFixtureInput, PredictionUncheckedCreateWithoutFixtureInput> | PredictionCreateWithoutFixtureInput[] | PredictionUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutFixtureInput | PredictionCreateOrConnectWithoutFixtureInput[]
    createMany?: PredictionCreateManyFixtureInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type JackpotUncheckedCreateNestedManyWithoutFixtureInput = {
    create?: XOR<JackpotCreateWithoutFixtureInput, JackpotUncheckedCreateWithoutFixtureInput> | JackpotCreateWithoutFixtureInput[] | JackpotUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: JackpotCreateOrConnectWithoutFixtureInput | JackpotCreateOrConnectWithoutFixtureInput[]
    createMany?: JackpotCreateManyFixtureInputEnvelope
    connect?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type PredictionUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<PredictionCreateWithoutFixtureInput, PredictionUncheckedCreateWithoutFixtureInput> | PredictionCreateWithoutFixtureInput[] | PredictionUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutFixtureInput | PredictionCreateOrConnectWithoutFixtureInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutFixtureInput | PredictionUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: PredictionCreateManyFixtureInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutFixtureInput | PredictionUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutFixtureInput | PredictionUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type JackpotUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<JackpotCreateWithoutFixtureInput, JackpotUncheckedCreateWithoutFixtureInput> | JackpotCreateWithoutFixtureInput[] | JackpotUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: JackpotCreateOrConnectWithoutFixtureInput | JackpotCreateOrConnectWithoutFixtureInput[]
    upsert?: JackpotUpsertWithWhereUniqueWithoutFixtureInput | JackpotUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: JackpotCreateManyFixtureInputEnvelope
    set?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
    disconnect?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
    delete?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
    connect?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
    update?: JackpotUpdateWithWhereUniqueWithoutFixtureInput | JackpotUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: JackpotUpdateManyWithWhereWithoutFixtureInput | JackpotUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: JackpotScalarWhereInput | JackpotScalarWhereInput[]
  }

  export type PredictionUncheckedUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<PredictionCreateWithoutFixtureInput, PredictionUncheckedCreateWithoutFixtureInput> | PredictionCreateWithoutFixtureInput[] | PredictionUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutFixtureInput | PredictionCreateOrConnectWithoutFixtureInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutFixtureInput | PredictionUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: PredictionCreateManyFixtureInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutFixtureInput | PredictionUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutFixtureInput | PredictionUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type JackpotUncheckedUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<JackpotCreateWithoutFixtureInput, JackpotUncheckedCreateWithoutFixtureInput> | JackpotCreateWithoutFixtureInput[] | JackpotUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: JackpotCreateOrConnectWithoutFixtureInput | JackpotCreateOrConnectWithoutFixtureInput[]
    upsert?: JackpotUpsertWithWhereUniqueWithoutFixtureInput | JackpotUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: JackpotCreateManyFixtureInputEnvelope
    set?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
    disconnect?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
    delete?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
    connect?: JackpotWhereUniqueInput | JackpotWhereUniqueInput[]
    update?: JackpotUpdateWithWhereUniqueWithoutFixtureInput | JackpotUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: JackpotUpdateManyWithWhereWithoutFixtureInput | JackpotUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: JackpotScalarWhereInput | JackpotScalarWhereInput[]
  }

  export type FixtureCreateNestedOneWithoutJackpotInput = {
    create?: XOR<FixtureCreateWithoutJackpotInput, FixtureUncheckedCreateWithoutJackpotInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutJackpotInput
    connect?: FixtureWhereUniqueInput
  }

  export type FixtureUpdateOneRequiredWithoutJackpotNestedInput = {
    create?: XOR<FixtureCreateWithoutJackpotInput, FixtureUncheckedCreateWithoutJackpotInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutJackpotInput
    upsert?: FixtureUpsertWithoutJackpotInput
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutJackpotInput, FixtureUpdateWithoutJackpotInput>, FixtureUncheckedUpdateWithoutJackpotInput>
  }

  export type FixtureCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<FixtureCreateWithoutPredictionsInput, FixtureUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutPredictionsInput
    connect?: FixtureWhereUniqueInput
  }

  export type TipPlanCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<TipPlanCreateWithoutPredictionsInput, TipPlanUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: TipPlanCreateOrConnectWithoutPredictionsInput
    connect?: TipPlanWhereUniqueInput
  }

  export type TipResultCreateNestedOneWithoutPredictionInput = {
    create?: XOR<TipResultCreateWithoutPredictionInput, TipResultUncheckedCreateWithoutPredictionInput>
    connectOrCreate?: TipResultCreateOrConnectWithoutPredictionInput
    connect?: TipResultWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutPredictionInput = {
    create?: XOR<PaymentCreateWithoutPredictionInput, PaymentUncheckedCreateWithoutPredictionInput> | PaymentCreateWithoutPredictionInput[] | PaymentUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPredictionInput | PaymentCreateOrConnectWithoutPredictionInput[]
    createMany?: PaymentCreateManyPredictionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TipResultUncheckedCreateNestedOneWithoutPredictionInput = {
    create?: XOR<TipResultCreateWithoutPredictionInput, TipResultUncheckedCreateWithoutPredictionInput>
    connectOrCreate?: TipResultCreateOrConnectWithoutPredictionInput
    connect?: TipResultWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutPredictionInput = {
    create?: XOR<PaymentCreateWithoutPredictionInput, PaymentUncheckedCreateWithoutPredictionInput> | PaymentCreateWithoutPredictionInput[] | PaymentUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPredictionInput | PaymentCreateOrConnectWithoutPredictionInput[]
    createMany?: PaymentCreateManyPredictionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FixtureUpdateOneRequiredWithoutPredictionsNestedInput = {
    create?: XOR<FixtureCreateWithoutPredictionsInput, FixtureUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutPredictionsInput
    upsert?: FixtureUpsertWithoutPredictionsInput
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutPredictionsInput, FixtureUpdateWithoutPredictionsInput>, FixtureUncheckedUpdateWithoutPredictionsInput>
  }

  export type TipPlanUpdateOneWithoutPredictionsNestedInput = {
    create?: XOR<TipPlanCreateWithoutPredictionsInput, TipPlanUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: TipPlanCreateOrConnectWithoutPredictionsInput
    upsert?: TipPlanUpsertWithoutPredictionsInput
    disconnect?: TipPlanWhereInput | boolean
    delete?: TipPlanWhereInput | boolean
    connect?: TipPlanWhereUniqueInput
    update?: XOR<XOR<TipPlanUpdateToOneWithWhereWithoutPredictionsInput, TipPlanUpdateWithoutPredictionsInput>, TipPlanUncheckedUpdateWithoutPredictionsInput>
  }

  export type TipResultUpdateOneWithoutPredictionNestedInput = {
    create?: XOR<TipResultCreateWithoutPredictionInput, TipResultUncheckedCreateWithoutPredictionInput>
    connectOrCreate?: TipResultCreateOrConnectWithoutPredictionInput
    upsert?: TipResultUpsertWithoutPredictionInput
    disconnect?: TipResultWhereInput | boolean
    delete?: TipResultWhereInput | boolean
    connect?: TipResultWhereUniqueInput
    update?: XOR<XOR<TipResultUpdateToOneWithWhereWithoutPredictionInput, TipResultUpdateWithoutPredictionInput>, TipResultUncheckedUpdateWithoutPredictionInput>
  }

  export type PaymentUpdateManyWithoutPredictionNestedInput = {
    create?: XOR<PaymentCreateWithoutPredictionInput, PaymentUncheckedCreateWithoutPredictionInput> | PaymentCreateWithoutPredictionInput[] | PaymentUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPredictionInput | PaymentCreateOrConnectWithoutPredictionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPredictionInput | PaymentUpsertWithWhereUniqueWithoutPredictionInput[]
    createMany?: PaymentCreateManyPredictionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPredictionInput | PaymentUpdateWithWhereUniqueWithoutPredictionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPredictionInput | PaymentUpdateManyWithWhereWithoutPredictionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TipResultUncheckedUpdateOneWithoutPredictionNestedInput = {
    create?: XOR<TipResultCreateWithoutPredictionInput, TipResultUncheckedCreateWithoutPredictionInput>
    connectOrCreate?: TipResultCreateOrConnectWithoutPredictionInput
    upsert?: TipResultUpsertWithoutPredictionInput
    disconnect?: TipResultWhereInput | boolean
    delete?: TipResultWhereInput | boolean
    connect?: TipResultWhereUniqueInput
    update?: XOR<XOR<TipResultUpdateToOneWithWhereWithoutPredictionInput, TipResultUpdateWithoutPredictionInput>, TipResultUncheckedUpdateWithoutPredictionInput>
  }

  export type PaymentUncheckedUpdateManyWithoutPredictionNestedInput = {
    create?: XOR<PaymentCreateWithoutPredictionInput, PaymentUncheckedCreateWithoutPredictionInput> | PaymentCreateWithoutPredictionInput[] | PaymentUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPredictionInput | PaymentCreateOrConnectWithoutPredictionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPredictionInput | PaymentUpsertWithWhereUniqueWithoutPredictionInput[]
    createMany?: PaymentCreateManyPredictionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPredictionInput | PaymentUpdateWithWhereUniqueWithoutPredictionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPredictionInput | PaymentUpdateManyWithWhereWithoutPredictionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PredictionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PredictionCreateWithoutPaymentsInput, PredictionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutPaymentsInput
    connect?: PredictionWhereUniqueInput
  }

  export type TipPlanCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<TipPlanCreateWithoutPaymentsInput, TipPlanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TipPlanCreateOrConnectWithoutPaymentsInput
    connect?: TipPlanWhereUniqueInput
  }

  export type TipAccessLogCreateNestedManyWithoutPaymentInput = {
    create?: XOR<TipAccessLogCreateWithoutPaymentInput, TipAccessLogUncheckedCreateWithoutPaymentInput> | TipAccessLogCreateWithoutPaymentInput[] | TipAccessLogUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: TipAccessLogCreateOrConnectWithoutPaymentInput | TipAccessLogCreateOrConnectWithoutPaymentInput[]
    createMany?: TipAccessLogCreateManyPaymentInputEnvelope
    connect?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
  }

  export type TipAccessLogUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<TipAccessLogCreateWithoutPaymentInput, TipAccessLogUncheckedCreateWithoutPaymentInput> | TipAccessLogCreateWithoutPaymentInput[] | TipAccessLogUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: TipAccessLogCreateOrConnectWithoutPaymentInput | TipAccessLogCreateOrConnectWithoutPaymentInput[]
    createMany?: TipAccessLogCreateManyPaymentInputEnvelope
    connect?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type PredictionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PredictionCreateWithoutPaymentsInput, PredictionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutPaymentsInput
    upsert?: PredictionUpsertWithoutPaymentsInput
    connect?: PredictionWhereUniqueInput
    update?: XOR<XOR<PredictionUpdateToOneWithWhereWithoutPaymentsInput, PredictionUpdateWithoutPaymentsInput>, PredictionUncheckedUpdateWithoutPaymentsInput>
  }

  export type TipPlanUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<TipPlanCreateWithoutPaymentsInput, TipPlanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TipPlanCreateOrConnectWithoutPaymentsInput
    upsert?: TipPlanUpsertWithoutPaymentsInput
    connect?: TipPlanWhereUniqueInput
    update?: XOR<XOR<TipPlanUpdateToOneWithWhereWithoutPaymentsInput, TipPlanUpdateWithoutPaymentsInput>, TipPlanUncheckedUpdateWithoutPaymentsInput>
  }

  export type TipAccessLogUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<TipAccessLogCreateWithoutPaymentInput, TipAccessLogUncheckedCreateWithoutPaymentInput> | TipAccessLogCreateWithoutPaymentInput[] | TipAccessLogUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: TipAccessLogCreateOrConnectWithoutPaymentInput | TipAccessLogCreateOrConnectWithoutPaymentInput[]
    upsert?: TipAccessLogUpsertWithWhereUniqueWithoutPaymentInput | TipAccessLogUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: TipAccessLogCreateManyPaymentInputEnvelope
    set?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
    disconnect?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
    delete?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
    connect?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
    update?: TipAccessLogUpdateWithWhereUniqueWithoutPaymentInput | TipAccessLogUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: TipAccessLogUpdateManyWithWhereWithoutPaymentInput | TipAccessLogUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: TipAccessLogScalarWhereInput | TipAccessLogScalarWhereInput[]
  }

  export type TipAccessLogUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<TipAccessLogCreateWithoutPaymentInput, TipAccessLogUncheckedCreateWithoutPaymentInput> | TipAccessLogCreateWithoutPaymentInput[] | TipAccessLogUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: TipAccessLogCreateOrConnectWithoutPaymentInput | TipAccessLogCreateOrConnectWithoutPaymentInput[]
    upsert?: TipAccessLogUpsertWithWhereUniqueWithoutPaymentInput | TipAccessLogUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: TipAccessLogCreateManyPaymentInputEnvelope
    set?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
    disconnect?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
    delete?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
    connect?: TipAccessLogWhereUniqueInput | TipAccessLogWhereUniqueInput[]
    update?: TipAccessLogUpdateWithWhereUniqueWithoutPaymentInput | TipAccessLogUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: TipAccessLogUpdateManyWithWhereWithoutPaymentInput | TipAccessLogUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: TipAccessLogScalarWhereInput | TipAccessLogScalarWhereInput[]
  }

  export type PaymentCreateNestedOneWithoutTipAccessLogsInput = {
    create?: XOR<PaymentCreateWithoutTipAccessLogsInput, PaymentUncheckedCreateWithoutTipAccessLogsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTipAccessLogsInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutTipAccessLogsNestedInput = {
    create?: XOR<PaymentCreateWithoutTipAccessLogsInput, PaymentUncheckedCreateWithoutTipAccessLogsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTipAccessLogsInput
    upsert?: PaymentUpsertWithoutTipAccessLogsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutTipAccessLogsInput, PaymentUpdateWithoutTipAccessLogsInput>, PaymentUncheckedUpdateWithoutTipAccessLogsInput>
  }

  export type PredictionCreateNestedOneWithoutResultInput = {
    create?: XOR<PredictionCreateWithoutResultInput, PredictionUncheckedCreateWithoutResultInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutResultInput
    connect?: PredictionWhereUniqueInput
  }

  export type EnumTipOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.TipOutcome
  }

  export type PredictionUpdateOneRequiredWithoutResultNestedInput = {
    create?: XOR<PredictionCreateWithoutResultInput, PredictionUncheckedCreateWithoutResultInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutResultInput
    upsert?: PredictionUpsertWithoutResultInput
    connect?: PredictionWhereUniqueInput
    update?: XOR<XOR<PredictionUpdateToOneWithWhereWithoutResultInput, PredictionUpdateWithoutResultInput>, PredictionUncheckedUpdateWithoutResultInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[]
    notIn?: $Enums.MatchStatus[]
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[]
    notIn?: $Enums.MatchStatus[]
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumTipOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipOutcome | EnumTipOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.TipOutcome[]
    notIn?: $Enums.TipOutcome[]
    not?: NestedEnumTipOutcomeFilter<$PrismaModel> | $Enums.TipOutcome
  }

  export type NestedEnumTipOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipOutcome | EnumTipOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.TipOutcome[]
    notIn?: $Enums.TipOutcome[]
    not?: NestedEnumTipOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.TipOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipOutcomeFilter<$PrismaModel>
    _max?: NestedEnumTipOutcomeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PredictionCreateWithoutPlanInput = {
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutPredictionsInput
    result?: TipResultCreateNestedOneWithoutPredictionInput
    payments?: PaymentCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUncheckedCreateWithoutPlanInput = {
    id?: number
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    fixtureId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    result?: TipResultUncheckedCreateNestedOneWithoutPredictionInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPredictionInput
  }

  export type PredictionCreateOrConnectWithoutPlanInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutPlanInput, PredictionUncheckedCreateWithoutPlanInput>
  }

  export type PredictionCreateManyPlanInputEnvelope = {
    data: PredictionCreateManyPlanInput | PredictionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutPlanInput = {
    mobileNumber: string
    mpesaRequestId: string
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction: PredictionCreateNestedOneWithoutPaymentsInput
    tipAccessLogs?: TipAccessLogCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutPlanInput = {
    id?: number
    mobileNumber: string
    mpesaRequestId: string
    predictionId: number
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tipAccessLogs?: TipAccessLogUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutPlanInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput>
  }

  export type PaymentCreateManyPlanInputEnvelope = {
    data: PaymentCreateManyPlanInput | PaymentCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PredictionUpsertWithWhereUniqueWithoutPlanInput = {
    where: PredictionWhereUniqueInput
    update: XOR<PredictionUpdateWithoutPlanInput, PredictionUncheckedUpdateWithoutPlanInput>
    create: XOR<PredictionCreateWithoutPlanInput, PredictionUncheckedCreateWithoutPlanInput>
  }

  export type PredictionUpdateWithWhereUniqueWithoutPlanInput = {
    where: PredictionWhereUniqueInput
    data: XOR<PredictionUpdateWithoutPlanInput, PredictionUncheckedUpdateWithoutPlanInput>
  }

  export type PredictionUpdateManyWithWhereWithoutPlanInput = {
    where: PredictionScalarWhereInput
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyWithoutPlanInput>
  }

  export type PredictionScalarWhereInput = {
    AND?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
    OR?: PredictionScalarWhereInput[]
    NOT?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
    id?: IntFilter<"Prediction"> | number
    tipText?: StringFilter<"Prediction"> | string
    odd?: FloatFilter<"Prediction"> | number
    tipDate?: DateTimeFilter<"Prediction"> | Date | string
    isPublished?: BoolFilter<"Prediction"> | boolean
    fixtureId?: IntFilter<"Prediction"> | number
    planId?: IntNullableFilter<"Prediction"> | number | null
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeFilter<"Prediction"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutPlanInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPlanInput, PaymentUncheckedUpdateWithoutPlanInput>
    create: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPlanInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPlanInput, PaymentUncheckedUpdateWithoutPlanInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPlanInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPlanInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    mobileNumber?: StringFilter<"Payment"> | string
    mpesaRequestId?: StringFilter<"Payment"> | string
    predictionId?: IntFilter<"Payment"> | number
    planId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PredictionCreateWithoutFixtureInput = {
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: TipPlanCreateNestedOneWithoutPredictionsInput
    result?: TipResultCreateNestedOneWithoutPredictionInput
    payments?: PaymentCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUncheckedCreateWithoutFixtureInput = {
    id?: number
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    planId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    result?: TipResultUncheckedCreateNestedOneWithoutPredictionInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPredictionInput
  }

  export type PredictionCreateOrConnectWithoutFixtureInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutFixtureInput, PredictionUncheckedCreateWithoutFixtureInput>
  }

  export type PredictionCreateManyFixtureInputEnvelope = {
    data: PredictionCreateManyFixtureInput | PredictionCreateManyFixtureInput[]
    skipDuplicates?: boolean
  }

  export type JackpotCreateWithoutFixtureInput = {
    startDatetime: Date | string
    endDatetime: Date | string
    amount: number
    isActive?: boolean
  }

  export type JackpotUncheckedCreateWithoutFixtureInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    amount: number
    isActive?: boolean
  }

  export type JackpotCreateOrConnectWithoutFixtureInput = {
    where: JackpotWhereUniqueInput
    create: XOR<JackpotCreateWithoutFixtureInput, JackpotUncheckedCreateWithoutFixtureInput>
  }

  export type JackpotCreateManyFixtureInputEnvelope = {
    data: JackpotCreateManyFixtureInput | JackpotCreateManyFixtureInput[]
    skipDuplicates?: boolean
  }

  export type PredictionUpsertWithWhereUniqueWithoutFixtureInput = {
    where: PredictionWhereUniqueInput
    update: XOR<PredictionUpdateWithoutFixtureInput, PredictionUncheckedUpdateWithoutFixtureInput>
    create: XOR<PredictionCreateWithoutFixtureInput, PredictionUncheckedCreateWithoutFixtureInput>
  }

  export type PredictionUpdateWithWhereUniqueWithoutFixtureInput = {
    where: PredictionWhereUniqueInput
    data: XOR<PredictionUpdateWithoutFixtureInput, PredictionUncheckedUpdateWithoutFixtureInput>
  }

  export type PredictionUpdateManyWithWhereWithoutFixtureInput = {
    where: PredictionScalarWhereInput
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyWithoutFixtureInput>
  }

  export type JackpotUpsertWithWhereUniqueWithoutFixtureInput = {
    where: JackpotWhereUniqueInput
    update: XOR<JackpotUpdateWithoutFixtureInput, JackpotUncheckedUpdateWithoutFixtureInput>
    create: XOR<JackpotCreateWithoutFixtureInput, JackpotUncheckedCreateWithoutFixtureInput>
  }

  export type JackpotUpdateWithWhereUniqueWithoutFixtureInput = {
    where: JackpotWhereUniqueInput
    data: XOR<JackpotUpdateWithoutFixtureInput, JackpotUncheckedUpdateWithoutFixtureInput>
  }

  export type JackpotUpdateManyWithWhereWithoutFixtureInput = {
    where: JackpotScalarWhereInput
    data: XOR<JackpotUpdateManyMutationInput, JackpotUncheckedUpdateManyWithoutFixtureInput>
  }

  export type JackpotScalarWhereInput = {
    AND?: JackpotScalarWhereInput | JackpotScalarWhereInput[]
    OR?: JackpotScalarWhereInput[]
    NOT?: JackpotScalarWhereInput | JackpotScalarWhereInput[]
    id?: IntFilter<"Jackpot"> | number
    startDatetime?: DateTimeFilter<"Jackpot"> | Date | string
    endDatetime?: DateTimeFilter<"Jackpot"> | Date | string
    amount?: FloatFilter<"Jackpot"> | number
    isActive?: BoolFilter<"Jackpot"> | boolean
    fixtureId?: IntFilter<"Jackpot"> | number
  }

  export type FixtureCreateWithoutJackpotInput = {
    matchDate: Date | string
    homeTeam: string
    awayTeam: string
    competition: string
    result?: string | null
    status?: $Enums.MatchStatus
    fixtureTip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: PredictionCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUncheckedCreateWithoutJackpotInput = {
    id?: number
    matchDate: Date | string
    homeTeam: string
    awayTeam: string
    competition: string
    result?: string | null
    status?: $Enums.MatchStatus
    fixtureTip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: PredictionUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutJackpotInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutJackpotInput, FixtureUncheckedCreateWithoutJackpotInput>
  }

  export type FixtureUpsertWithoutJackpotInput = {
    update: XOR<FixtureUpdateWithoutJackpotInput, FixtureUncheckedUpdateWithoutJackpotInput>
    create: XOR<FixtureCreateWithoutJackpotInput, FixtureUncheckedCreateWithoutJackpotInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutJackpotInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutJackpotInput, FixtureUncheckedUpdateWithoutJackpotInput>
  }

  export type FixtureUpdateWithoutJackpotInput = {
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    fixtureTip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateWithoutJackpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    fixtureTip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureCreateWithoutPredictionsInput = {
    matchDate: Date | string
    homeTeam: string
    awayTeam: string
    competition: string
    result?: string | null
    status?: $Enums.MatchStatus
    fixtureTip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jackpot?: JackpotCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUncheckedCreateWithoutPredictionsInput = {
    id?: number
    matchDate: Date | string
    homeTeam: string
    awayTeam: string
    competition: string
    result?: string | null
    status?: $Enums.MatchStatus
    fixtureTip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jackpot?: JackpotUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutPredictionsInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutPredictionsInput, FixtureUncheckedCreateWithoutPredictionsInput>
  }

  export type TipPlanCreateWithoutPredictionsInput = {
    name: string
    price: number
    description: string
    oddRange: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutPlanInput
  }

  export type TipPlanUncheckedCreateWithoutPredictionsInput = {
    id?: number
    name: string
    price: number
    description: string
    oddRange: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TipPlanCreateOrConnectWithoutPredictionsInput = {
    where: TipPlanWhereUniqueInput
    create: XOR<TipPlanCreateWithoutPredictionsInput, TipPlanUncheckedCreateWithoutPredictionsInput>
  }

  export type TipResultCreateWithoutPredictionInput = {
    outcome: $Enums.TipOutcome
    evaluatedAt?: Date | string
  }

  export type TipResultUncheckedCreateWithoutPredictionInput = {
    id?: number
    outcome: $Enums.TipOutcome
    evaluatedAt?: Date | string
  }

  export type TipResultCreateOrConnectWithoutPredictionInput = {
    where: TipResultWhereUniqueInput
    create: XOR<TipResultCreateWithoutPredictionInput, TipResultUncheckedCreateWithoutPredictionInput>
  }

  export type PaymentCreateWithoutPredictionInput = {
    mobileNumber: string
    mpesaRequestId: string
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: TipPlanCreateNestedOneWithoutPaymentsInput
    tipAccessLogs?: TipAccessLogCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutPredictionInput = {
    id?: number
    mobileNumber: string
    mpesaRequestId: string
    planId: number
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tipAccessLogs?: TipAccessLogUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutPredictionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPredictionInput, PaymentUncheckedCreateWithoutPredictionInput>
  }

  export type PaymentCreateManyPredictionInputEnvelope = {
    data: PaymentCreateManyPredictionInput | PaymentCreateManyPredictionInput[]
    skipDuplicates?: boolean
  }

  export type FixtureUpsertWithoutPredictionsInput = {
    update: XOR<FixtureUpdateWithoutPredictionsInput, FixtureUncheckedUpdateWithoutPredictionsInput>
    create: XOR<FixtureCreateWithoutPredictionsInput, FixtureUncheckedCreateWithoutPredictionsInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutPredictionsInput, FixtureUncheckedUpdateWithoutPredictionsInput>
  }

  export type FixtureUpdateWithoutPredictionsInput = {
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    fixtureTip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jackpot?: JackpotUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateWithoutPredictionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    fixtureTip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jackpot?: JackpotUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type TipPlanUpsertWithoutPredictionsInput = {
    update: XOR<TipPlanUpdateWithoutPredictionsInput, TipPlanUncheckedUpdateWithoutPredictionsInput>
    create: XOR<TipPlanCreateWithoutPredictionsInput, TipPlanUncheckedCreateWithoutPredictionsInput>
    where?: TipPlanWhereInput
  }

  export type TipPlanUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: TipPlanWhereInput
    data: XOR<TipPlanUpdateWithoutPredictionsInput, TipPlanUncheckedUpdateWithoutPredictionsInput>
  }

  export type TipPlanUpdateWithoutPredictionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    oddRange?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutPlanNestedInput
  }

  export type TipPlanUncheckedUpdateWithoutPredictionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    oddRange?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TipResultUpsertWithoutPredictionInput = {
    update: XOR<TipResultUpdateWithoutPredictionInput, TipResultUncheckedUpdateWithoutPredictionInput>
    create: XOR<TipResultCreateWithoutPredictionInput, TipResultUncheckedCreateWithoutPredictionInput>
    where?: TipResultWhereInput
  }

  export type TipResultUpdateToOneWithWhereWithoutPredictionInput = {
    where?: TipResultWhereInput
    data: XOR<TipResultUpdateWithoutPredictionInput, TipResultUncheckedUpdateWithoutPredictionInput>
  }

  export type TipResultUpdateWithoutPredictionInput = {
    outcome?: EnumTipOutcomeFieldUpdateOperationsInput | $Enums.TipOutcome
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipResultUncheckedUpdateWithoutPredictionInput = {
    id?: IntFieldUpdateOperationsInput | number
    outcome?: EnumTipOutcomeFieldUpdateOperationsInput | $Enums.TipOutcome
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutPredictionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPredictionInput, PaymentUncheckedUpdateWithoutPredictionInput>
    create: XOR<PaymentCreateWithoutPredictionInput, PaymentUncheckedCreateWithoutPredictionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPredictionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPredictionInput, PaymentUncheckedUpdateWithoutPredictionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPredictionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPredictionInput>
  }

  export type PredictionCreateWithoutPaymentsInput = {
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutPredictionsInput
    plan?: TipPlanCreateNestedOneWithoutPredictionsInput
    result?: TipResultCreateNestedOneWithoutPredictionInput
  }

  export type PredictionUncheckedCreateWithoutPaymentsInput = {
    id?: number
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    fixtureId: number
    planId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    result?: TipResultUncheckedCreateNestedOneWithoutPredictionInput
  }

  export type PredictionCreateOrConnectWithoutPaymentsInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutPaymentsInput, PredictionUncheckedCreateWithoutPaymentsInput>
  }

  export type TipPlanCreateWithoutPaymentsInput = {
    name: string
    price: number
    description: string
    oddRange: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: PredictionCreateNestedManyWithoutPlanInput
  }

  export type TipPlanUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name: string
    price: number
    description: string
    oddRange: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: PredictionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TipPlanCreateOrConnectWithoutPaymentsInput = {
    where: TipPlanWhereUniqueInput
    create: XOR<TipPlanCreateWithoutPaymentsInput, TipPlanUncheckedCreateWithoutPaymentsInput>
  }

  export type TipAccessLogCreateWithoutPaymentInput = {
    ipAddress?: string | null
    accessedAt?: Date | string
  }

  export type TipAccessLogUncheckedCreateWithoutPaymentInput = {
    id?: number
    ipAddress?: string | null
    accessedAt?: Date | string
  }

  export type TipAccessLogCreateOrConnectWithoutPaymentInput = {
    where: TipAccessLogWhereUniqueInput
    create: XOR<TipAccessLogCreateWithoutPaymentInput, TipAccessLogUncheckedCreateWithoutPaymentInput>
  }

  export type TipAccessLogCreateManyPaymentInputEnvelope = {
    data: TipAccessLogCreateManyPaymentInput | TipAccessLogCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type PredictionUpsertWithoutPaymentsInput = {
    update: XOR<PredictionUpdateWithoutPaymentsInput, PredictionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PredictionCreateWithoutPaymentsInput, PredictionUncheckedCreateWithoutPaymentsInput>
    where?: PredictionWhereInput
  }

  export type PredictionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PredictionWhereInput
    data: XOR<PredictionUpdateWithoutPaymentsInput, PredictionUncheckedUpdateWithoutPaymentsInput>
  }

  export type PredictionUpdateWithoutPaymentsInput = {
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutPredictionsNestedInput
    plan?: TipPlanUpdateOneWithoutPredictionsNestedInput
    result?: TipResultUpdateOneWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    fixtureId?: IntFieldUpdateOperationsInput | number
    planId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: TipResultUncheckedUpdateOneWithoutPredictionNestedInput
  }

  export type TipPlanUpsertWithoutPaymentsInput = {
    update: XOR<TipPlanUpdateWithoutPaymentsInput, TipPlanUncheckedUpdateWithoutPaymentsInput>
    create: XOR<TipPlanCreateWithoutPaymentsInput, TipPlanUncheckedCreateWithoutPaymentsInput>
    where?: TipPlanWhereInput
  }

  export type TipPlanUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: TipPlanWhereInput
    data: XOR<TipPlanUpdateWithoutPaymentsInput, TipPlanUncheckedUpdateWithoutPaymentsInput>
  }

  export type TipPlanUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    oddRange?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionUpdateManyWithoutPlanNestedInput
  }

  export type TipPlanUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    oddRange?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: PredictionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TipAccessLogUpsertWithWhereUniqueWithoutPaymentInput = {
    where: TipAccessLogWhereUniqueInput
    update: XOR<TipAccessLogUpdateWithoutPaymentInput, TipAccessLogUncheckedUpdateWithoutPaymentInput>
    create: XOR<TipAccessLogCreateWithoutPaymentInput, TipAccessLogUncheckedCreateWithoutPaymentInput>
  }

  export type TipAccessLogUpdateWithWhereUniqueWithoutPaymentInput = {
    where: TipAccessLogWhereUniqueInput
    data: XOR<TipAccessLogUpdateWithoutPaymentInput, TipAccessLogUncheckedUpdateWithoutPaymentInput>
  }

  export type TipAccessLogUpdateManyWithWhereWithoutPaymentInput = {
    where: TipAccessLogScalarWhereInput
    data: XOR<TipAccessLogUpdateManyMutationInput, TipAccessLogUncheckedUpdateManyWithoutPaymentInput>
  }

  export type TipAccessLogScalarWhereInput = {
    AND?: TipAccessLogScalarWhereInput | TipAccessLogScalarWhereInput[]
    OR?: TipAccessLogScalarWhereInput[]
    NOT?: TipAccessLogScalarWhereInput | TipAccessLogScalarWhereInput[]
    id?: IntFilter<"TipAccessLog"> | number
    paymentId?: IntFilter<"TipAccessLog"> | number
    ipAddress?: StringNullableFilter<"TipAccessLog"> | string | null
    accessedAt?: DateTimeFilter<"TipAccessLog"> | Date | string
  }

  export type PaymentCreateWithoutTipAccessLogsInput = {
    mobileNumber: string
    mpesaRequestId: string
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction: PredictionCreateNestedOneWithoutPaymentsInput
    plan: TipPlanCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutTipAccessLogsInput = {
    id?: number
    mobileNumber: string
    mpesaRequestId: string
    predictionId: number
    planId: number
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutTipAccessLogsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTipAccessLogsInput, PaymentUncheckedCreateWithoutTipAccessLogsInput>
  }

  export type PaymentUpsertWithoutTipAccessLogsInput = {
    update: XOR<PaymentUpdateWithoutTipAccessLogsInput, PaymentUncheckedUpdateWithoutTipAccessLogsInput>
    create: XOR<PaymentCreateWithoutTipAccessLogsInput, PaymentUncheckedCreateWithoutTipAccessLogsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutTipAccessLogsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutTipAccessLogsInput, PaymentUncheckedUpdateWithoutTipAccessLogsInput>
  }

  export type PaymentUpdateWithoutTipAccessLogsInput = {
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUpdateOneRequiredWithoutPaymentsNestedInput
    plan?: TipPlanUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTipAccessLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    predictionId?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionCreateWithoutResultInput = {
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutPredictionsInput
    plan?: TipPlanCreateNestedOneWithoutPredictionsInput
    payments?: PaymentCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUncheckedCreateWithoutResultInput = {
    id?: number
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    fixtureId: number
    planId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPredictionInput
  }

  export type PredictionCreateOrConnectWithoutResultInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutResultInput, PredictionUncheckedCreateWithoutResultInput>
  }

  export type PredictionUpsertWithoutResultInput = {
    update: XOR<PredictionUpdateWithoutResultInput, PredictionUncheckedUpdateWithoutResultInput>
    create: XOR<PredictionCreateWithoutResultInput, PredictionUncheckedCreateWithoutResultInput>
    where?: PredictionWhereInput
  }

  export type PredictionUpdateToOneWithWhereWithoutResultInput = {
    where?: PredictionWhereInput
    data: XOR<PredictionUpdateWithoutResultInput, PredictionUncheckedUpdateWithoutResultInput>
  }

  export type PredictionUpdateWithoutResultInput = {
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutPredictionsNestedInput
    plan?: TipPlanUpdateOneWithoutPredictionsNestedInput
    payments?: PaymentUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateWithoutResultInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    fixtureId?: IntFieldUpdateOperationsInput | number
    planId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPredictionNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PredictionCreateManyPlanInput = {
    id?: number
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    fixtureId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyPlanInput = {
    id?: number
    mobileNumber: string
    mpesaRequestId: string
    predictionId: number
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionUpdateWithoutPlanInput = {
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutPredictionsNestedInput
    result?: TipResultUpdateOneWithoutPredictionNestedInput
    payments?: PaymentUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    fixtureId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: TipResultUncheckedUpdateOneWithoutPredictionNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    fixtureId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutPlanInput = {
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUpdateOneRequiredWithoutPaymentsNestedInput
    tipAccessLogs?: TipAccessLogUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    predictionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipAccessLogs?: TipAccessLogUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    predictionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionCreateManyFixtureInput = {
    id?: number
    tipText: string
    odd: number
    tipDate: Date | string
    isPublished?: boolean
    planId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JackpotCreateManyFixtureInput = {
    id?: number
    startDatetime: Date | string
    endDatetime: Date | string
    amount: number
    isActive?: boolean
  }

  export type PredictionUpdateWithoutFixtureInput = {
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: TipPlanUpdateOneWithoutPredictionsNestedInput
    result?: TipResultUpdateOneWithoutPredictionNestedInput
    payments?: PaymentUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    planId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: TipResultUncheckedUpdateOneWithoutPredictionNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateManyWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipText?: StringFieldUpdateOperationsInput | string
    odd?: FloatFieldUpdateOperationsInput | number
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    planId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JackpotUpdateWithoutFixtureInput = {
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JackpotUncheckedUpdateWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JackpotUncheckedUpdateManyWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentCreateManyPredictionInput = {
    id?: number
    mobileNumber: string
    mpesaRequestId: string
    planId: number
    amount: number
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutPredictionInput = {
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: TipPlanUpdateOneRequiredWithoutPaymentsNestedInput
    tipAccessLogs?: TipAccessLogUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPredictionInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipAccessLogs?: TipAccessLogUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutPredictionInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mpesaRequestId?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipAccessLogCreateManyPaymentInput = {
    id?: number
    ipAddress?: string | null
    accessedAt?: Date | string
  }

  export type TipAccessLogUpdateWithoutPaymentInput = {
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipAccessLogUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipAccessLogUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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