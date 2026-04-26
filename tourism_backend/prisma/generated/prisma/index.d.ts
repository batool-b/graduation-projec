
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bookings
 * 
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model contact_messages
 * 
 */
export type contact_messages = $Result.DefaultSelection<Prisma.$contact_messagesPayload>
/**
 * Model countries
 * 
 */
export type countries = $Result.DefaultSelection<Prisma.$countriesPayload>
/**
 * Model flights
 * 
 */
export type flights = $Result.DefaultSelection<Prisma.$flightsPayload>
/**
 * Model hotels
 * 
 */
export type hotels = $Result.DefaultSelection<Prisma.$hotelsPayload>
/**
 * Model includes
 * 
 */
export type includes = $Result.DefaultSelection<Prisma.$includesPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>
/**
 * Model travel_types
 * 
 */
export type travel_types = $Result.DefaultSelection<Prisma.$travel_typesPayload>
/**
 * Model trip_dates
 * 
 */
export type trip_dates = $Result.DefaultSelection<Prisma.$trip_datesPayload>
/**
 * Model trip_images
 * 
 */
export type trip_images = $Result.DefaultSelection<Prisma.$trip_imagesPayload>
/**
 * Model trips
 * 
 */
export type trips = $Result.DefaultSelection<Prisma.$tripsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model uses
 * 
 */
export type uses = $Result.DefaultSelection<Prisma.$usesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Bookings
 * const bookings = await prisma.bookings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Bookings
   * const bookings = await prisma.bookings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact_messages`: Exposes CRUD operations for the **contact_messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contact_messages
    * const contact_messages = await prisma.contact_messages.findMany()
    * ```
    */
  get contact_messages(): Prisma.contact_messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.countries`: Exposes CRUD operations for the **countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.countriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flights`: Exposes CRUD operations for the **flights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flights
    * const flights = await prisma.flights.findMany()
    * ```
    */
  get flights(): Prisma.flightsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotels`: Exposes CRUD operations for the **hotels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotels.findMany()
    * ```
    */
  get hotels(): Prisma.hotelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.includes`: Exposes CRUD operations for the **includes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Includes
    * const includes = await prisma.includes.findMany()
    * ```
    */
  get includes(): Prisma.includesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travel_types`: Exposes CRUD operations for the **travel_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Travel_types
    * const travel_types = await prisma.travel_types.findMany()
    * ```
    */
  get travel_types(): Prisma.travel_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip_dates`: Exposes CRUD operations for the **trip_dates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trip_dates
    * const trip_dates = await prisma.trip_dates.findMany()
    * ```
    */
  get trip_dates(): Prisma.trip_datesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip_images`: Exposes CRUD operations for the **trip_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trip_images
    * const trip_images = await prisma.trip_images.findMany()
    * ```
    */
  get trip_images(): Prisma.trip_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trips`: Exposes CRUD operations for the **trips** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trips.findMany()
    * ```
    */
  get trips(): Prisma.tripsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uses`: Exposes CRUD operations for the **uses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uses
    * const uses = await prisma.uses.findMany()
    * ```
    */
  get uses(): Prisma.usesDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    bookings: 'bookings',
    contact_messages: 'contact_messages',
    countries: 'countries',
    flights: 'flights',
    hotels: 'hotels',
    includes: 'includes',
    payments: 'payments',
    review: 'review',
    travel_types: 'travel_types',
    trip_dates: 'trip_dates',
    trip_images: 'trip_images',
    trips: 'trips',
    users: 'users',
    admin: 'admin',
    uses: 'uses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bookings" | "contact_messages" | "countries" | "flights" | "hotels" | "includes" | "payments" | "review" | "travel_types" | "trip_dates" | "trip_images" | "trips" | "users" | "admin" | "uses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      contact_messages: {
        payload: Prisma.$contact_messagesPayload<ExtArgs>
        fields: Prisma.contact_messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contact_messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contact_messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          findFirst: {
            args: Prisma.contact_messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contact_messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          findMany: {
            args: Prisma.contact_messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>[]
          }
          create: {
            args: Prisma.contact_messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          createMany: {
            args: Prisma.contact_messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contact_messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          update: {
            args: Prisma.contact_messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          deleteMany: {
            args: Prisma.contact_messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contact_messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contact_messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          aggregate: {
            args: Prisma.Contact_messagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact_messages>
          }
          groupBy: {
            args: Prisma.contact_messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Contact_messagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.contact_messagesCountArgs<ExtArgs>
            result: $Utils.Optional<Contact_messagesCountAggregateOutputType> | number
          }
        }
      }
      countries: {
        payload: Prisma.$countriesPayload<ExtArgs>
        fields: Prisma.countriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.countriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.countriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findFirst: {
            args: Prisma.countriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.countriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findMany: {
            args: Prisma.countriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>[]
          }
          create: {
            args: Prisma.countriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          createMany: {
            args: Prisma.countriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.countriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          update: {
            args: Prisma.countriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          deleteMany: {
            args: Prisma.countriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.countriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.countriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          aggregate: {
            args: Prisma.CountriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountries>
          }
          groupBy: {
            args: Prisma.countriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.countriesCountArgs<ExtArgs>
            result: $Utils.Optional<CountriesCountAggregateOutputType> | number
          }
        }
      }
      flights: {
        payload: Prisma.$flightsPayload<ExtArgs>
        fields: Prisma.flightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          findFirst: {
            args: Prisma.flightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          findMany: {
            args: Prisma.flightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>[]
          }
          create: {
            args: Prisma.flightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          createMany: {
            args: Prisma.flightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.flightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          update: {
            args: Prisma.flightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          deleteMany: {
            args: Prisma.flightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.flightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          aggregate: {
            args: Prisma.FlightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlights>
          }
          groupBy: {
            args: Prisma.flightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightsGroupByOutputType>[]
          }
          count: {
            args: Prisma.flightsCountArgs<ExtArgs>
            result: $Utils.Optional<FlightsCountAggregateOutputType> | number
          }
        }
      }
      hotels: {
        payload: Prisma.$hotelsPayload<ExtArgs>
        fields: Prisma.hotelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hotelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hotelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hotelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hotelsPayload>
          }
          findFirst: {
            args: Prisma.hotelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hotelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hotelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hotelsPayload>
          }
          findMany: {
            args: Prisma.hotelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hotelsPayload>[]
          }
          create: {
            args: Prisma.hotelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hotelsPayload>
          }
          createMany: {
            args: Prisma.hotelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.hotelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hotelsPayload>
          }
          update: {
            args: Prisma.hotelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hotelsPayload>
          }
          deleteMany: {
            args: Prisma.hotelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hotelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hotelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hotelsPayload>
          }
          aggregate: {
            args: Prisma.HotelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotels>
          }
          groupBy: {
            args: Prisma.hotelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hotelsCountArgs<ExtArgs>
            result: $Utils.Optional<HotelsCountAggregateOutputType> | number
          }
        }
      }
      includes: {
        payload: Prisma.$includesPayload<ExtArgs>
        fields: Prisma.includesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.includesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$includesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.includesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$includesPayload>
          }
          findFirst: {
            args: Prisma.includesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$includesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.includesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$includesPayload>
          }
          findMany: {
            args: Prisma.includesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$includesPayload>[]
          }
          create: {
            args: Prisma.includesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$includesPayload>
          }
          createMany: {
            args: Prisma.includesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.includesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$includesPayload>
          }
          update: {
            args: Prisma.includesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$includesPayload>
          }
          deleteMany: {
            args: Prisma.includesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.includesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.includesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$includesPayload>
          }
          aggregate: {
            args: Prisma.IncludesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncludes>
          }
          groupBy: {
            args: Prisma.includesGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncludesGroupByOutputType>[]
          }
          count: {
            args: Prisma.includesCountArgs<ExtArgs>
            result: $Utils.Optional<IncludesCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      travel_types: {
        payload: Prisma.$travel_typesPayload<ExtArgs>
        fields: Prisma.travel_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.travel_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.travel_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_typesPayload>
          }
          findFirst: {
            args: Prisma.travel_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.travel_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_typesPayload>
          }
          findMany: {
            args: Prisma.travel_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_typesPayload>[]
          }
          create: {
            args: Prisma.travel_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_typesPayload>
          }
          createMany: {
            args: Prisma.travel_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.travel_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_typesPayload>
          }
          update: {
            args: Prisma.travel_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_typesPayload>
          }
          deleteMany: {
            args: Prisma.travel_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.travel_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.travel_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$travel_typesPayload>
          }
          aggregate: {
            args: Prisma.Travel_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravel_types>
          }
          groupBy: {
            args: Prisma.travel_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Travel_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.travel_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Travel_typesCountAggregateOutputType> | number
          }
        }
      }
      trip_dates: {
        payload: Prisma.$trip_datesPayload<ExtArgs>
        fields: Prisma.trip_datesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trip_datesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_datesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trip_datesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_datesPayload>
          }
          findFirst: {
            args: Prisma.trip_datesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_datesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trip_datesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_datesPayload>
          }
          findMany: {
            args: Prisma.trip_datesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_datesPayload>[]
          }
          create: {
            args: Prisma.trip_datesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_datesPayload>
          }
          createMany: {
            args: Prisma.trip_datesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.trip_datesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_datesPayload>
          }
          update: {
            args: Prisma.trip_datesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_datesPayload>
          }
          deleteMany: {
            args: Prisma.trip_datesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trip_datesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.trip_datesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_datesPayload>
          }
          aggregate: {
            args: Prisma.Trip_datesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip_dates>
          }
          groupBy: {
            args: Prisma.trip_datesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trip_datesGroupByOutputType>[]
          }
          count: {
            args: Prisma.trip_datesCountArgs<ExtArgs>
            result: $Utils.Optional<Trip_datesCountAggregateOutputType> | number
          }
        }
      }
      trip_images: {
        payload: Prisma.$trip_imagesPayload<ExtArgs>
        fields: Prisma.trip_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trip_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trip_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_imagesPayload>
          }
          findFirst: {
            args: Prisma.trip_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trip_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_imagesPayload>
          }
          findMany: {
            args: Prisma.trip_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_imagesPayload>[]
          }
          create: {
            args: Prisma.trip_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_imagesPayload>
          }
          createMany: {
            args: Prisma.trip_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.trip_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_imagesPayload>
          }
          update: {
            args: Prisma.trip_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_imagesPayload>
          }
          deleteMany: {
            args: Prisma.trip_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trip_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.trip_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trip_imagesPayload>
          }
          aggregate: {
            args: Prisma.Trip_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip_images>
          }
          groupBy: {
            args: Prisma.trip_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trip_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.trip_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Trip_imagesCountAggregateOutputType> | number
          }
        }
      }
      trips: {
        payload: Prisma.$tripsPayload<ExtArgs>
        fields: Prisma.tripsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tripsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tripsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          findFirst: {
            args: Prisma.tripsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tripsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          findMany: {
            args: Prisma.tripsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>[]
          }
          create: {
            args: Prisma.tripsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          createMany: {
            args: Prisma.tripsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tripsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          update: {
            args: Prisma.tripsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          deleteMany: {
            args: Prisma.tripsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tripsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tripsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          aggregate: {
            args: Prisma.TripsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrips>
          }
          groupBy: {
            args: Prisma.tripsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tripsCountArgs<ExtArgs>
            result: $Utils.Optional<TripsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      uses: {
        payload: Prisma.$usesPayload<ExtArgs>
        fields: Prisma.usesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          findFirst: {
            args: Prisma.usesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          findMany: {
            args: Prisma.usesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>[]
          }
          create: {
            args: Prisma.usesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          createMany: {
            args: Prisma.usesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          update: {
            args: Prisma.usesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          deleteMany: {
            args: Prisma.usesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          aggregate: {
            args: Prisma.UsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUses>
          }
          groupBy: {
            args: Prisma.usesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.usesCountArgs<ExtArgs>
            result: $Utils.Optional<UsesCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    bookings?: bookingsOmit
    contact_messages?: contact_messagesOmit
    countries?: countriesOmit
    flights?: flightsOmit
    hotels?: hotelsOmit
    includes?: includesOmit
    payments?: paymentsOmit
    review?: reviewOmit
    travel_types?: travel_typesOmit
    trip_dates?: trip_datesOmit
    trip_images?: trip_imagesOmit
    trips?: tripsOmit
    users?: usersOmit
    admin?: adminOmit
    uses?: usesOmit
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
   * Count Type BookingsCountOutputType
   */

  export type BookingsCountOutputType = {
    payments: number
  }

  export type BookingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BookingsCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingsCountOutputType
     */
    select?: BookingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }


  /**
   * Count Type FlightsCountOutputType
   */

  export type FlightsCountOutputType = {
    uses: number
  }

  export type FlightsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uses?: boolean | FlightsCountOutputTypeCountUsesArgs
  }

  // Custom InputTypes
  /**
   * FlightsCountOutputType without action
   */
  export type FlightsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightsCountOutputType
     */
    select?: FlightsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlightsCountOutputType without action
   */
  export type FlightsCountOutputTypeCountUsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usesWhereInput
  }


  /**
   * Count Type HotelsCountOutputType
   */

  export type HotelsCountOutputType = {
    includes: number
  }

  export type HotelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    includes?: boolean | HotelsCountOutputTypeCountIncludesArgs
  }

  // Custom InputTypes
  /**
   * HotelsCountOutputType without action
   */
  export type HotelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsCountOutputType
     */
    select?: HotelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelsCountOutputType without action
   */
  export type HotelsCountOutputTypeCountIncludesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: includesWhereInput
  }


  /**
   * Count Type TripsCountOutputType
   */

  export type TripsCountOutputType = {
    bookings: number
    includes: number
    review: number
    trip_dates: number
    trip_images: number
    uses: number
  }

  export type TripsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | TripsCountOutputTypeCountBookingsArgs
    includes?: boolean | TripsCountOutputTypeCountIncludesArgs
    review?: boolean | TripsCountOutputTypeCountReviewArgs
    trip_dates?: boolean | TripsCountOutputTypeCountTrip_datesArgs
    trip_images?: boolean | TripsCountOutputTypeCountTrip_imagesArgs
    uses?: boolean | TripsCountOutputTypeCountUsesArgs
  }

  // Custom InputTypes
  /**
   * TripsCountOutputType without action
   */
  export type TripsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripsCountOutputType
     */
    select?: TripsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripsCountOutputType without action
   */
  export type TripsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * TripsCountOutputType without action
   */
  export type TripsCountOutputTypeCountIncludesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: includesWhereInput
  }

  /**
   * TripsCountOutputType without action
   */
  export type TripsCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * TripsCountOutputType without action
   */
  export type TripsCountOutputTypeCountTrip_datesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trip_datesWhereInput
  }

  /**
   * TripsCountOutputType without action
   */
  export type TripsCountOutputTypeCountTrip_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trip_imagesWhereInput
  }

  /**
   * TripsCountOutputType without action
   */
  export type TripsCountOutputTypeCountUsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bookings: number
    review: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
    review?: boolean | UsersCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    trips_id: number | null
    travelers_count: number | null
    total_price: Decimal | null
  }

  export type BookingsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    trips_id: number | null
    travelers_count: number | null
    total_price: Decimal | null
  }

  export type BookingsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    trips_id: number | null
    travel_date: Date | null
    travelers_count: number | null
    total_price: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    trips_id: number | null
    travel_date: Date | null
    travelers_count: number | null
    total_price: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    user_id: number
    trips_id: number
    travel_date: number
    travelers_count: number
    total_price: number
    status: number
    created_at: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    travelers_count?: true
    total_price?: true
  }

  export type BookingsSumAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    travelers_count?: true
    total_price?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    travel_date?: true
    travelers_count?: true
    total_price?: true
    status?: true
    created_at?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    travel_date?: true
    travelers_count?: true
    total_price?: true
    status?: true
    created_at?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    travel_date?: true
    travelers_count?: true
    total_price?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: number
    user_id: number
    trips_id: number
    travel_date: Date
    travelers_count: number
    total_price: Decimal
    status: string
    created_at: Date
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    trips_id?: boolean
    travel_date?: boolean
    travelers_count?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    trips?: boolean | tripsDefaultArgs<ExtArgs>
    payments?: boolean | bookings$paymentsArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>



  export type bookingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    trips_id?: boolean
    travel_date?: boolean
    travelers_count?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "trips_id" | "travel_date" | "travelers_count" | "total_price" | "status" | "created_at", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    trips?: boolean | tripsDefaultArgs<ExtArgs>
    payments?: boolean | bookings$paymentsArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      trips: Prisma.$tripsPayload<ExtArgs>
      payments: Prisma.$paymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      trips_id: number
      travel_date: Date
      travelers_count: number
      total_price: Prisma.Decimal
      status: string
      created_at: Date
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
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
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trips<T extends tripsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tripsDefaultArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends bookings$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id: FieldRef<"bookings", 'Int'>
    readonly user_id: FieldRef<"bookings", 'Int'>
    readonly trips_id: FieldRef<"bookings", 'Int'>
    readonly travel_date: FieldRef<"bookings", 'DateTime'>
    readonly travelers_count: FieldRef<"bookings", 'Int'>
    readonly total_price: FieldRef<"bookings", 'Decimal'>
    readonly status: FieldRef<"bookings", 'String'>
    readonly created_at: FieldRef<"bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings.payments
   */
  export type bookings$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model contact_messages
   */

  export type AggregateContact_messages = {
    _count: Contact_messagesCountAggregateOutputType | null
    _avg: Contact_messagesAvgAggregateOutputType | null
    _sum: Contact_messagesSumAggregateOutputType | null
    _min: Contact_messagesMinAggregateOutputType | null
    _max: Contact_messagesMaxAggregateOutputType | null
  }

  export type Contact_messagesAvgAggregateOutputType = {
    id: number | null
  }

  export type Contact_messagesSumAggregateOutputType = {
    id: number | null
  }

  export type Contact_messagesMinAggregateOutputType = {
    id: number | null
    message_name: string | null
    email: string | null
    subject: string | null
    created_at: Date | null
  }

  export type Contact_messagesMaxAggregateOutputType = {
    id: number | null
    message_name: string | null
    email: string | null
    subject: string | null
    created_at: Date | null
  }

  export type Contact_messagesCountAggregateOutputType = {
    id: number
    message_name: number
    email: number
    subject: number
    created_at: number
    _all: number
  }


  export type Contact_messagesAvgAggregateInputType = {
    id?: true
  }

  export type Contact_messagesSumAggregateInputType = {
    id?: true
  }

  export type Contact_messagesMinAggregateInputType = {
    id?: true
    message_name?: true
    email?: true
    subject?: true
    created_at?: true
  }

  export type Contact_messagesMaxAggregateInputType = {
    id?: true
    message_name?: true
    email?: true
    subject?: true
    created_at?: true
  }

  export type Contact_messagesCountAggregateInputType = {
    id?: true
    message_name?: true
    email?: true
    subject?: true
    created_at?: true
    _all?: true
  }

  export type Contact_messagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_messages to aggregate.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contact_messages
    **/
    _count?: true | Contact_messagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Contact_messagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Contact_messagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contact_messagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contact_messagesMaxAggregateInputType
  }

  export type GetContact_messagesAggregateType<T extends Contact_messagesAggregateArgs> = {
        [P in keyof T & keyof AggregateContact_messages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact_messages[P]>
      : GetScalarType<T[P], AggregateContact_messages[P]>
  }




  export type contact_messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contact_messagesWhereInput
    orderBy?: contact_messagesOrderByWithAggregationInput | contact_messagesOrderByWithAggregationInput[]
    by: Contact_messagesScalarFieldEnum[] | Contact_messagesScalarFieldEnum
    having?: contact_messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contact_messagesCountAggregateInputType | true
    _avg?: Contact_messagesAvgAggregateInputType
    _sum?: Contact_messagesSumAggregateInputType
    _min?: Contact_messagesMinAggregateInputType
    _max?: Contact_messagesMaxAggregateInputType
  }

  export type Contact_messagesGroupByOutputType = {
    id: number
    message_name: string
    email: string
    subject: string
    created_at: Date
    _count: Contact_messagesCountAggregateOutputType | null
    _avg: Contact_messagesAvgAggregateOutputType | null
    _sum: Contact_messagesSumAggregateOutputType | null
    _min: Contact_messagesMinAggregateOutputType | null
    _max: Contact_messagesMaxAggregateOutputType | null
  }

  type GetContact_messagesGroupByPayload<T extends contact_messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Contact_messagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contact_messagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contact_messagesGroupByOutputType[P]>
            : GetScalarType<T[P], Contact_messagesGroupByOutputType[P]>
        }
      >
    >


  export type contact_messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_name?: boolean
    email?: boolean
    subject?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["contact_messages"]>



  export type contact_messagesSelectScalar = {
    id?: boolean
    message_name?: boolean
    email?: boolean
    subject?: boolean
    created_at?: boolean
  }

  export type contact_messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_name" | "email" | "subject" | "created_at", ExtArgs["result"]["contact_messages"]>

  export type $contact_messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact_messages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message_name: string
      email: string
      subject: string
      created_at: Date
    }, ExtArgs["result"]["contact_messages"]>
    composites: {}
  }

  type contact_messagesGetPayload<S extends boolean | null | undefined | contact_messagesDefaultArgs> = $Result.GetResult<Prisma.$contact_messagesPayload, S>

  type contact_messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contact_messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Contact_messagesCountAggregateInputType | true
    }

  export interface contact_messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact_messages'], meta: { name: 'contact_messages' } }
    /**
     * Find zero or one Contact_messages that matches the filter.
     * @param {contact_messagesFindUniqueArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contact_messagesFindUniqueArgs>(args: SelectSubset<T, contact_messagesFindUniqueArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact_messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contact_messagesFindUniqueOrThrowArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contact_messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, contact_messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesFindFirstArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contact_messagesFindFirstArgs>(args?: SelectSubset<T, contact_messagesFindFirstArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact_messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesFindFirstOrThrowArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contact_messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, contact_messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contact_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contact_messages
     * const contact_messages = await prisma.contact_messages.findMany()
     * 
     * // Get first 10 Contact_messages
     * const contact_messages = await prisma.contact_messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contact_messagesWithIdOnly = await prisma.contact_messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contact_messagesFindManyArgs>(args?: SelectSubset<T, contact_messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact_messages.
     * @param {contact_messagesCreateArgs} args - Arguments to create a Contact_messages.
     * @example
     * // Create one Contact_messages
     * const Contact_messages = await prisma.contact_messages.create({
     *   data: {
     *     // ... data to create a Contact_messages
     *   }
     * })
     * 
     */
    create<T extends contact_messagesCreateArgs>(args: SelectSubset<T, contact_messagesCreateArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contact_messages.
     * @param {contact_messagesCreateManyArgs} args - Arguments to create many Contact_messages.
     * @example
     * // Create many Contact_messages
     * const contact_messages = await prisma.contact_messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contact_messagesCreateManyArgs>(args?: SelectSubset<T, contact_messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact_messages.
     * @param {contact_messagesDeleteArgs} args - Arguments to delete one Contact_messages.
     * @example
     * // Delete one Contact_messages
     * const Contact_messages = await prisma.contact_messages.delete({
     *   where: {
     *     // ... filter to delete one Contact_messages
     *   }
     * })
     * 
     */
    delete<T extends contact_messagesDeleteArgs>(args: SelectSubset<T, contact_messagesDeleteArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact_messages.
     * @param {contact_messagesUpdateArgs} args - Arguments to update one Contact_messages.
     * @example
     * // Update one Contact_messages
     * const contact_messages = await prisma.contact_messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contact_messagesUpdateArgs>(args: SelectSubset<T, contact_messagesUpdateArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contact_messages.
     * @param {contact_messagesDeleteManyArgs} args - Arguments to filter Contact_messages to delete.
     * @example
     * // Delete a few Contact_messages
     * const { count } = await prisma.contact_messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contact_messagesDeleteManyArgs>(args?: SelectSubset<T, contact_messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contact_messages
     * const contact_messages = await prisma.contact_messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contact_messagesUpdateManyArgs>(args: SelectSubset<T, contact_messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact_messages.
     * @param {contact_messagesUpsertArgs} args - Arguments to update or create a Contact_messages.
     * @example
     * // Update or create a Contact_messages
     * const contact_messages = await prisma.contact_messages.upsert({
     *   create: {
     *     // ... data to create a Contact_messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact_messages we want to update
     *   }
     * })
     */
    upsert<T extends contact_messagesUpsertArgs>(args: SelectSubset<T, contact_messagesUpsertArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesCountArgs} args - Arguments to filter Contact_messages to count.
     * @example
     * // Count the number of Contact_messages
     * const count = await prisma.contact_messages.count({
     *   where: {
     *     // ... the filter for the Contact_messages we want to count
     *   }
     * })
    **/
    count<T extends contact_messagesCountArgs>(
      args?: Subset<T, contact_messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contact_messagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contact_messagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Contact_messagesAggregateArgs>(args: Subset<T, Contact_messagesAggregateArgs>): Prisma.PrismaPromise<GetContact_messagesAggregateType<T>>

    /**
     * Group by Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesGroupByArgs} args - Group by arguments.
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
      T extends contact_messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contact_messagesGroupByArgs['orderBy'] }
        : { orderBy?: contact_messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, contact_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContact_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact_messages model
   */
  readonly fields: contact_messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact_messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contact_messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the contact_messages model
   */
  interface contact_messagesFieldRefs {
    readonly id: FieldRef<"contact_messages", 'Int'>
    readonly message_name: FieldRef<"contact_messages", 'String'>
    readonly email: FieldRef<"contact_messages", 'String'>
    readonly subject: FieldRef<"contact_messages", 'String'>
    readonly created_at: FieldRef<"contact_messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contact_messages findUnique
   */
  export type contact_messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages findUniqueOrThrow
   */
  export type contact_messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages findFirst
   */
  export type contact_messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_messages.
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_messages.
     */
    distinct?: Contact_messagesScalarFieldEnum | Contact_messagesScalarFieldEnum[]
  }

  /**
   * contact_messages findFirstOrThrow
   */
  export type contact_messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_messages.
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_messages.
     */
    distinct?: Contact_messagesScalarFieldEnum | Contact_messagesScalarFieldEnum[]
  }

  /**
   * contact_messages findMany
   */
  export type contact_messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contact_messages.
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_messages.
     */
    distinct?: Contact_messagesScalarFieldEnum | Contact_messagesScalarFieldEnum[]
  }

  /**
   * contact_messages create
   */
  export type contact_messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * The data needed to create a contact_messages.
     */
    data: XOR<contact_messagesCreateInput, contact_messagesUncheckedCreateInput>
  }

  /**
   * contact_messages createMany
   */
  export type contact_messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contact_messages.
     */
    data: contact_messagesCreateManyInput | contact_messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact_messages update
   */
  export type contact_messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * The data needed to update a contact_messages.
     */
    data: XOR<contact_messagesUpdateInput, contact_messagesUncheckedUpdateInput>
    /**
     * Choose, which contact_messages to update.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages updateMany
   */
  export type contact_messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contact_messages.
     */
    data: XOR<contact_messagesUpdateManyMutationInput, contact_messagesUncheckedUpdateManyInput>
    /**
     * Filter which contact_messages to update
     */
    where?: contact_messagesWhereInput
    /**
     * Limit how many contact_messages to update.
     */
    limit?: number
  }

  /**
   * contact_messages upsert
   */
  export type contact_messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * The filter to search for the contact_messages to update in case it exists.
     */
    where: contact_messagesWhereUniqueInput
    /**
     * In case the contact_messages found by the `where` argument doesn't exist, create a new contact_messages with this data.
     */
    create: XOR<contact_messagesCreateInput, contact_messagesUncheckedCreateInput>
    /**
     * In case the contact_messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contact_messagesUpdateInput, contact_messagesUncheckedUpdateInput>
  }

  /**
   * contact_messages delete
   */
  export type contact_messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter which contact_messages to delete.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages deleteMany
   */
  export type contact_messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_messages to delete
     */
    where?: contact_messagesWhereInput
    /**
     * Limit how many contact_messages to delete.
     */
    limit?: number
  }

  /**
   * contact_messages without action
   */
  export type contact_messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
  }


  /**
   * Model countries
   */

  export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CountriesSumAggregateOutputType = {
    id: number | null
  }

  export type CountriesMinAggregateOutputType = {
    id: number | null
    cname: string | null
    cimage: string | null
  }

  export type CountriesMaxAggregateOutputType = {
    id: number | null
    cname: string | null
    cimage: string | null
  }

  export type CountriesCountAggregateOutputType = {
    id: number
    cname: number
    cimage: number
    _all: number
  }


  export type CountriesAvgAggregateInputType = {
    id?: true
  }

  export type CountriesSumAggregateInputType = {
    id?: true
  }

  export type CountriesMinAggregateInputType = {
    id?: true
    cname?: true
    cimage?: true
  }

  export type CountriesMaxAggregateInputType = {
    id?: true
    cname?: true
    cimage?: true
  }

  export type CountriesCountAggregateInputType = {
    id?: true
    cname?: true
    cimage?: true
    _all?: true
  }

  export type CountriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to aggregate.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    _count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }




  export type countriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: countriesWhereInput
    orderBy?: countriesOrderByWithAggregationInput | countriesOrderByWithAggregationInput[]
    by: CountriesScalarFieldEnum[] | CountriesScalarFieldEnum
    having?: countriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesCountAggregateInputType | true
    _avg?: CountriesAvgAggregateInputType
    _sum?: CountriesSumAggregateInputType
    _min?: CountriesMinAggregateInputType
    _max?: CountriesMaxAggregateInputType
  }

  export type CountriesGroupByOutputType = {
    id: number
    cname: string
    cimage: string | null
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  type GetCountriesGroupByPayload<T extends countriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesGroupByOutputType[P]>
        }
      >
    >


  export type countriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cname?: boolean
    cimage?: boolean
  }, ExtArgs["result"]["countries"]>



  export type countriesSelectScalar = {
    id?: boolean
    cname?: boolean
    cimage?: boolean
  }

  export type countriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cname" | "cimage", ExtArgs["result"]["countries"]>

  export type $countriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "countries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cname: string
      cimage: string | null
    }, ExtArgs["result"]["countries"]>
    composites: {}
  }

  type countriesGetPayload<S extends boolean | null | undefined | countriesDefaultArgs> = $Result.GetResult<Prisma.$countriesPayload, S>

  type countriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<countriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountriesCountAggregateInputType | true
    }

  export interface countriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['countries'], meta: { name: 'countries' } }
    /**
     * Find zero or one Countries that matches the filter.
     * @param {countriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends countriesFindUniqueArgs>(args: SelectSubset<T, countriesFindUniqueArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Countries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {countriesFindUniqueOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends countriesFindUniqueOrThrowArgs>(args: SelectSubset<T, countriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends countriesFindFirstArgs>(args?: SelectSubset<T, countriesFindFirstArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends countriesFindFirstOrThrowArgs>(args?: SelectSubset<T, countriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countriesWithIdOnly = await prisma.countries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends countriesFindManyArgs>(args?: SelectSubset<T, countriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Countries.
     * @param {countriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
     */
    create<T extends countriesCreateArgs>(args: SelectSubset<T, countriesCreateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {countriesCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends countriesCreateManyArgs>(args?: SelectSubset<T, countriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Countries.
     * @param {countriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
     */
    delete<T extends countriesDeleteArgs>(args: SelectSubset<T, countriesDeleteArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Countries.
     * @param {countriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends countriesUpdateArgs>(args: SelectSubset<T, countriesUpdateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {countriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends countriesDeleteManyArgs>(args?: SelectSubset<T, countriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends countriesUpdateManyArgs>(args: SelectSubset<T, countriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Countries.
     * @param {countriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
     */
    upsert<T extends countriesUpsertArgs>(args: SelectSubset<T, countriesUpsertArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countriesCountArgs>(
      args?: Subset<T, countriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>

    /**
     * Group by Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesGroupByArgs} args - Group by arguments.
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
      T extends countriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: countriesGroupByArgs['orderBy'] }
        : { orderBy?: countriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, countriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the countries model
   */
  readonly fields: countriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__countriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the countries model
   */
  interface countriesFieldRefs {
    readonly id: FieldRef<"countries", 'Int'>
    readonly cname: FieldRef<"countries", 'String'>
    readonly cimage: FieldRef<"countries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * countries findUnique
   */
  export type countriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findUniqueOrThrow
   */
  export type countriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findFirst
   */
  export type countriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findFirstOrThrow
   */
  export type countriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findMany
   */
  export type countriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries create
   */
  export type countriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data needed to create a countries.
     */
    data: XOR<countriesCreateInput, countriesUncheckedCreateInput>
  }

  /**
   * countries createMany
   */
  export type countriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many countries.
     */
    data: countriesCreateManyInput | countriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * countries update
   */
  export type countriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data needed to update a countries.
     */
    data: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
    /**
     * Choose, which countries to update.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries updateMany
   */
  export type countriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update countries.
     */
    data: XOR<countriesUpdateManyMutationInput, countriesUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * countries upsert
   */
  export type countriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The filter to search for the countries to update in case it exists.
     */
    where: countriesWhereUniqueInput
    /**
     * In case the countries found by the `where` argument doesn't exist, create a new countries with this data.
     */
    create: XOR<countriesCreateInput, countriesUncheckedCreateInput>
    /**
     * In case the countries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
  }

  /**
   * countries delete
   */
  export type countriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter which countries to delete.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries deleteMany
   */
  export type countriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to delete
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to delete.
     */
    limit?: number
  }

  /**
   * countries without action
   */
  export type countriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
  }


  /**
   * Model flights
   */

  export type AggregateFlights = {
    _count: FlightsCountAggregateOutputType | null
    _avg: FlightsAvgAggregateOutputType | null
    _sum: FlightsSumAggregateOutputType | null
    _min: FlightsMinAggregateOutputType | null
    _max: FlightsMaxAggregateOutputType | null
  }

  export type FlightsAvgAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type FlightsSumAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type FlightsMinAggregateOutputType = {
    id: number | null
    airline: string | null
    duration: number | null
  }

  export type FlightsMaxAggregateOutputType = {
    id: number | null
    airline: string | null
    duration: number | null
  }

  export type FlightsCountAggregateOutputType = {
    id: number
    airline: number
    duration: number
    _all: number
  }


  export type FlightsAvgAggregateInputType = {
    id?: true
    duration?: true
  }

  export type FlightsSumAggregateInputType = {
    id?: true
    duration?: true
  }

  export type FlightsMinAggregateInputType = {
    id?: true
    airline?: true
    duration?: true
  }

  export type FlightsMaxAggregateInputType = {
    id?: true
    airline?: true
    duration?: true
  }

  export type FlightsCountAggregateInputType = {
    id?: true
    airline?: true
    duration?: true
    _all?: true
  }

  export type FlightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flights to aggregate.
     */
    where?: flightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flights to fetch.
     */
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flights
    **/
    _count?: true | FlightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightsMaxAggregateInputType
  }

  export type GetFlightsAggregateType<T extends FlightsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlights[P]>
      : GetScalarType<T[P], AggregateFlights[P]>
  }




  export type flightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flightsWhereInput
    orderBy?: flightsOrderByWithAggregationInput | flightsOrderByWithAggregationInput[]
    by: FlightsScalarFieldEnum[] | FlightsScalarFieldEnum
    having?: flightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightsCountAggregateInputType | true
    _avg?: FlightsAvgAggregateInputType
    _sum?: FlightsSumAggregateInputType
    _min?: FlightsMinAggregateInputType
    _max?: FlightsMaxAggregateInputType
  }

  export type FlightsGroupByOutputType = {
    id: number
    airline: string
    duration: number
    _count: FlightsCountAggregateOutputType | null
    _avg: FlightsAvgAggregateOutputType | null
    _sum: FlightsSumAggregateOutputType | null
    _min: FlightsMinAggregateOutputType | null
    _max: FlightsMaxAggregateOutputType | null
  }

  type GetFlightsGroupByPayload<T extends flightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightsGroupByOutputType[P]>
            : GetScalarType<T[P], FlightsGroupByOutputType[P]>
        }
      >
    >


  export type flightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    airline?: boolean
    duration?: boolean
    uses?: boolean | flights$usesArgs<ExtArgs>
    _count?: boolean | FlightsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flights"]>



  export type flightsSelectScalar = {
    id?: boolean
    airline?: boolean
    duration?: boolean
  }

  export type flightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "airline" | "duration", ExtArgs["result"]["flights"]>
  export type flightsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uses?: boolean | flights$usesArgs<ExtArgs>
    _count?: boolean | FlightsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $flightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flights"
    objects: {
      uses: Prisma.$usesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      airline: string
      duration: number
    }, ExtArgs["result"]["flights"]>
    composites: {}
  }

  type flightsGetPayload<S extends boolean | null | undefined | flightsDefaultArgs> = $Result.GetResult<Prisma.$flightsPayload, S>

  type flightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightsCountAggregateInputType | true
    }

  export interface flightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flights'], meta: { name: 'flights' } }
    /**
     * Find zero or one Flights that matches the filter.
     * @param {flightsFindUniqueArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flightsFindUniqueArgs>(args: SelectSubset<T, flightsFindUniqueArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flightsFindUniqueOrThrowArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flightsFindUniqueOrThrowArgs>(args: SelectSubset<T, flightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsFindFirstArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flightsFindFirstArgs>(args?: SelectSubset<T, flightsFindFirstArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsFindFirstOrThrowArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flightsFindFirstOrThrowArgs>(args?: SelectSubset<T, flightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flights
     * const flights = await prisma.flights.findMany()
     * 
     * // Get first 10 Flights
     * const flights = await prisma.flights.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightsWithIdOnly = await prisma.flights.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends flightsFindManyArgs>(args?: SelectSubset<T, flightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flights.
     * @param {flightsCreateArgs} args - Arguments to create a Flights.
     * @example
     * // Create one Flights
     * const Flights = await prisma.flights.create({
     *   data: {
     *     // ... data to create a Flights
     *   }
     * })
     * 
     */
    create<T extends flightsCreateArgs>(args: SelectSubset<T, flightsCreateArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flights.
     * @param {flightsCreateManyArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flights = await prisma.flights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flightsCreateManyArgs>(args?: SelectSubset<T, flightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flights.
     * @param {flightsDeleteArgs} args - Arguments to delete one Flights.
     * @example
     * // Delete one Flights
     * const Flights = await prisma.flights.delete({
     *   where: {
     *     // ... filter to delete one Flights
     *   }
     * })
     * 
     */
    delete<T extends flightsDeleteArgs>(args: SelectSubset<T, flightsDeleteArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flights.
     * @param {flightsUpdateArgs} args - Arguments to update one Flights.
     * @example
     * // Update one Flights
     * const flights = await prisma.flights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flightsUpdateArgs>(args: SelectSubset<T, flightsUpdateArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flights.
     * @param {flightsDeleteManyArgs} args - Arguments to filter Flights to delete.
     * @example
     * // Delete a few Flights
     * const { count } = await prisma.flights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flightsDeleteManyArgs>(args?: SelectSubset<T, flightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flights
     * const flights = await prisma.flights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flightsUpdateManyArgs>(args: SelectSubset<T, flightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flights.
     * @param {flightsUpsertArgs} args - Arguments to update or create a Flights.
     * @example
     * // Update or create a Flights
     * const flights = await prisma.flights.upsert({
     *   create: {
     *     // ... data to create a Flights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flights we want to update
     *   }
     * })
     */
    upsert<T extends flightsUpsertArgs>(args: SelectSubset<T, flightsUpsertArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsCountArgs} args - Arguments to filter Flights to count.
     * @example
     * // Count the number of Flights
     * const count = await prisma.flights.count({
     *   where: {
     *     // ... the filter for the Flights we want to count
     *   }
     * })
    **/
    count<T extends flightsCountArgs>(
      args?: Subset<T, flightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlightsAggregateArgs>(args: Subset<T, FlightsAggregateArgs>): Prisma.PrismaPromise<GetFlightsAggregateType<T>>

    /**
     * Group by Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsGroupByArgs} args - Group by arguments.
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
      T extends flightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flightsGroupByArgs['orderBy'] }
        : { orderBy?: flightsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, flightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flights model
   */
  readonly fields: flightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uses<T extends flights$usesArgs<ExtArgs> = {}>(args?: Subset<T, flights$usesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the flights model
   */
  interface flightsFieldRefs {
    readonly id: FieldRef<"flights", 'Int'>
    readonly airline: FieldRef<"flights", 'String'>
    readonly duration: FieldRef<"flights", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * flights findUnique
   */
  export type flightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where: flightsWhereUniqueInput
  }

  /**
   * flights findUniqueOrThrow
   */
  export type flightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where: flightsWhereUniqueInput
  }

  /**
   * flights findFirst
   */
  export type flightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where?: flightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flights to fetch.
     */
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flights.
     */
    cursor?: flightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flights.
     */
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * flights findFirstOrThrow
   */
  export type flightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where?: flightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flights to fetch.
     */
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flights.
     */
    cursor?: flightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flights.
     */
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * flights findMany
   */
  export type flightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where?: flightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flights to fetch.
     */
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flights.
     */
    cursor?: flightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flights.
     */
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * flights create
   */
  export type flightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * The data needed to create a flights.
     */
    data: XOR<flightsCreateInput, flightsUncheckedCreateInput>
  }

  /**
   * flights createMany
   */
  export type flightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flights.
     */
    data: flightsCreateManyInput | flightsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flights update
   */
  export type flightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * The data needed to update a flights.
     */
    data: XOR<flightsUpdateInput, flightsUncheckedUpdateInput>
    /**
     * Choose, which flights to update.
     */
    where: flightsWhereUniqueInput
  }

  /**
   * flights updateMany
   */
  export type flightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flights.
     */
    data: XOR<flightsUpdateManyMutationInput, flightsUncheckedUpdateManyInput>
    /**
     * Filter which flights to update
     */
    where?: flightsWhereInput
    /**
     * Limit how many flights to update.
     */
    limit?: number
  }

  /**
   * flights upsert
   */
  export type flightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * The filter to search for the flights to update in case it exists.
     */
    where: flightsWhereUniqueInput
    /**
     * In case the flights found by the `where` argument doesn't exist, create a new flights with this data.
     */
    create: XOR<flightsCreateInput, flightsUncheckedCreateInput>
    /**
     * In case the flights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flightsUpdateInput, flightsUncheckedUpdateInput>
  }

  /**
   * flights delete
   */
  export type flightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter which flights to delete.
     */
    where: flightsWhereUniqueInput
  }

  /**
   * flights deleteMany
   */
  export type flightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flights to delete
     */
    where?: flightsWhereInput
    /**
     * Limit how many flights to delete.
     */
    limit?: number
  }

  /**
   * flights.uses
   */
  export type flights$usesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    where?: usesWhereInput
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    cursor?: usesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * flights without action
   */
  export type flightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
  }


  /**
   * Model hotels
   */

  export type AggregateHotels = {
    _count: HotelsCountAggregateOutputType | null
    _avg: HotelsAvgAggregateOutputType | null
    _sum: HotelsSumAggregateOutputType | null
    _min: HotelsMinAggregateOutputType | null
    _max: HotelsMaxAggregateOutputType | null
  }

  export type HotelsAvgAggregateOutputType = {
    id: number | null
    stars: number | null
  }

  export type HotelsSumAggregateOutputType = {
    id: number | null
    stars: number | null
  }

  export type HotelsMinAggregateOutputType = {
    id: number | null
    hotel_name: string | null
    stars: number | null
  }

  export type HotelsMaxAggregateOutputType = {
    id: number | null
    hotel_name: string | null
    stars: number | null
  }

  export type HotelsCountAggregateOutputType = {
    id: number
    hotel_name: number
    stars: number
    _all: number
  }


  export type HotelsAvgAggregateInputType = {
    id?: true
    stars?: true
  }

  export type HotelsSumAggregateInputType = {
    id?: true
    stars?: true
  }

  export type HotelsMinAggregateInputType = {
    id?: true
    hotel_name?: true
    stars?: true
  }

  export type HotelsMaxAggregateInputType = {
    id?: true
    hotel_name?: true
    stars?: true
  }

  export type HotelsCountAggregateInputType = {
    id?: true
    hotel_name?: true
    stars?: true
    _all?: true
  }

  export type HotelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hotels to aggregate.
     */
    where?: hotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotels to fetch.
     */
    orderBy?: hotelsOrderByWithRelationInput | hotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hotels
    **/
    _count?: true | HotelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelsMaxAggregateInputType
  }

  export type GetHotelsAggregateType<T extends HotelsAggregateArgs> = {
        [P in keyof T & keyof AggregateHotels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotels[P]>
      : GetScalarType<T[P], AggregateHotels[P]>
  }




  export type hotelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hotelsWhereInput
    orderBy?: hotelsOrderByWithAggregationInput | hotelsOrderByWithAggregationInput[]
    by: HotelsScalarFieldEnum[] | HotelsScalarFieldEnum
    having?: hotelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelsCountAggregateInputType | true
    _avg?: HotelsAvgAggregateInputType
    _sum?: HotelsSumAggregateInputType
    _min?: HotelsMinAggregateInputType
    _max?: HotelsMaxAggregateInputType
  }

  export type HotelsGroupByOutputType = {
    id: number
    hotel_name: string
    stars: number
    _count: HotelsCountAggregateOutputType | null
    _avg: HotelsAvgAggregateOutputType | null
    _sum: HotelsSumAggregateOutputType | null
    _min: HotelsMinAggregateOutputType | null
    _max: HotelsMaxAggregateOutputType | null
  }

  type GetHotelsGroupByPayload<T extends hotelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelsGroupByOutputType[P]>
            : GetScalarType<T[P], HotelsGroupByOutputType[P]>
        }
      >
    >


  export type hotelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotel_name?: boolean
    stars?: boolean
    includes?: boolean | hotels$includesArgs<ExtArgs>
    _count?: boolean | HotelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotels"]>



  export type hotelsSelectScalar = {
    id?: boolean
    hotel_name?: boolean
    stars?: boolean
  }

  export type hotelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotel_name" | "stars", ExtArgs["result"]["hotels"]>
  export type hotelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    includes?: boolean | hotels$includesArgs<ExtArgs>
    _count?: boolean | HotelsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $hotelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hotels"
    objects: {
      includes: Prisma.$includesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hotel_name: string
      stars: number
    }, ExtArgs["result"]["hotels"]>
    composites: {}
  }

  type hotelsGetPayload<S extends boolean | null | undefined | hotelsDefaultArgs> = $Result.GetResult<Prisma.$hotelsPayload, S>

  type hotelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hotelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelsCountAggregateInputType | true
    }

  export interface hotelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hotels'], meta: { name: 'hotels' } }
    /**
     * Find zero or one Hotels that matches the filter.
     * @param {hotelsFindUniqueArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hotelsFindUniqueArgs>(args: SelectSubset<T, hotelsFindUniqueArgs<ExtArgs>>): Prisma__hotelsClient<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hotelsFindUniqueOrThrowArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hotelsFindUniqueOrThrowArgs>(args: SelectSubset<T, hotelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hotelsClient<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelsFindFirstArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hotelsFindFirstArgs>(args?: SelectSubset<T, hotelsFindFirstArgs<ExtArgs>>): Prisma__hotelsClient<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelsFindFirstOrThrowArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hotelsFindFirstOrThrowArgs>(args?: SelectSubset<T, hotelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hotelsClient<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotels.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelsWithIdOnly = await prisma.hotels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hotelsFindManyArgs>(args?: SelectSubset<T, hotelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotels.
     * @param {hotelsCreateArgs} args - Arguments to create a Hotels.
     * @example
     * // Create one Hotels
     * const Hotels = await prisma.hotels.create({
     *   data: {
     *     // ... data to create a Hotels
     *   }
     * })
     * 
     */
    create<T extends hotelsCreateArgs>(args: SelectSubset<T, hotelsCreateArgs<ExtArgs>>): Prisma__hotelsClient<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {hotelsCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotels = await prisma.hotels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hotelsCreateManyArgs>(args?: SelectSubset<T, hotelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hotels.
     * @param {hotelsDeleteArgs} args - Arguments to delete one Hotels.
     * @example
     * // Delete one Hotels
     * const Hotels = await prisma.hotels.delete({
     *   where: {
     *     // ... filter to delete one Hotels
     *   }
     * })
     * 
     */
    delete<T extends hotelsDeleteArgs>(args: SelectSubset<T, hotelsDeleteArgs<ExtArgs>>): Prisma__hotelsClient<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotels.
     * @param {hotelsUpdateArgs} args - Arguments to update one Hotels.
     * @example
     * // Update one Hotels
     * const hotels = await prisma.hotels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hotelsUpdateArgs>(args: SelectSubset<T, hotelsUpdateArgs<ExtArgs>>): Prisma__hotelsClient<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {hotelsDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hotelsDeleteManyArgs>(args?: SelectSubset<T, hotelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotels = await prisma.hotels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hotelsUpdateManyArgs>(args: SelectSubset<T, hotelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hotels.
     * @param {hotelsUpsertArgs} args - Arguments to update or create a Hotels.
     * @example
     * // Update or create a Hotels
     * const hotels = await prisma.hotels.upsert({
     *   create: {
     *     // ... data to create a Hotels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotels we want to update
     *   }
     * })
     */
    upsert<T extends hotelsUpsertArgs>(args: SelectSubset<T, hotelsUpsertArgs<ExtArgs>>): Prisma__hotelsClient<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelsCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotels.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends hotelsCountArgs>(
      args?: Subset<T, hotelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelsAggregateArgs>(args: Subset<T, HotelsAggregateArgs>): Prisma.PrismaPromise<GetHotelsAggregateType<T>>

    /**
     * Group by Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelsGroupByArgs} args - Group by arguments.
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
      T extends hotelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hotelsGroupByArgs['orderBy'] }
        : { orderBy?: hotelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hotelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hotels model
   */
  readonly fields: hotelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hotels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hotelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    includes<T extends hotels$includesArgs<ExtArgs> = {}>(args?: Subset<T, hotels$includesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the hotels model
   */
  interface hotelsFieldRefs {
    readonly id: FieldRef<"hotels", 'Int'>
    readonly hotel_name: FieldRef<"hotels", 'String'>
    readonly stars: FieldRef<"hotels", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hotels findUnique
   */
  export type hotelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
    /**
     * Filter, which hotels to fetch.
     */
    where: hotelsWhereUniqueInput
  }

  /**
   * hotels findUniqueOrThrow
   */
  export type hotelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
    /**
     * Filter, which hotels to fetch.
     */
    where: hotelsWhereUniqueInput
  }

  /**
   * hotels findFirst
   */
  export type hotelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
    /**
     * Filter, which hotels to fetch.
     */
    where?: hotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotels to fetch.
     */
    orderBy?: hotelsOrderByWithRelationInput | hotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hotels.
     */
    cursor?: hotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hotels.
     */
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * hotels findFirstOrThrow
   */
  export type hotelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
    /**
     * Filter, which hotels to fetch.
     */
    where?: hotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotels to fetch.
     */
    orderBy?: hotelsOrderByWithRelationInput | hotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hotels.
     */
    cursor?: hotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hotels.
     */
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * hotels findMany
   */
  export type hotelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
    /**
     * Filter, which hotels to fetch.
     */
    where?: hotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotels to fetch.
     */
    orderBy?: hotelsOrderByWithRelationInput | hotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hotels.
     */
    cursor?: hotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hotels.
     */
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * hotels create
   */
  export type hotelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
    /**
     * The data needed to create a hotels.
     */
    data: XOR<hotelsCreateInput, hotelsUncheckedCreateInput>
  }

  /**
   * hotels createMany
   */
  export type hotelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hotels.
     */
    data: hotelsCreateManyInput | hotelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hotels update
   */
  export type hotelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
    /**
     * The data needed to update a hotels.
     */
    data: XOR<hotelsUpdateInput, hotelsUncheckedUpdateInput>
    /**
     * Choose, which hotels to update.
     */
    where: hotelsWhereUniqueInput
  }

  /**
   * hotels updateMany
   */
  export type hotelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hotels.
     */
    data: XOR<hotelsUpdateManyMutationInput, hotelsUncheckedUpdateManyInput>
    /**
     * Filter which hotels to update
     */
    where?: hotelsWhereInput
    /**
     * Limit how many hotels to update.
     */
    limit?: number
  }

  /**
   * hotels upsert
   */
  export type hotelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
    /**
     * The filter to search for the hotels to update in case it exists.
     */
    where: hotelsWhereUniqueInput
    /**
     * In case the hotels found by the `where` argument doesn't exist, create a new hotels with this data.
     */
    create: XOR<hotelsCreateInput, hotelsUncheckedCreateInput>
    /**
     * In case the hotels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hotelsUpdateInput, hotelsUncheckedUpdateInput>
  }

  /**
   * hotels delete
   */
  export type hotelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
    /**
     * Filter which hotels to delete.
     */
    where: hotelsWhereUniqueInput
  }

  /**
   * hotels deleteMany
   */
  export type hotelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hotels to delete
     */
    where?: hotelsWhereInput
    /**
     * Limit how many hotels to delete.
     */
    limit?: number
  }

  /**
   * hotels.includes
   */
  export type hotels$includesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    where?: includesWhereInput
    orderBy?: includesOrderByWithRelationInput | includesOrderByWithRelationInput[]
    cursor?: includesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncludesScalarFieldEnum | IncludesScalarFieldEnum[]
  }

  /**
   * hotels without action
   */
  export type hotelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hotels
     */
    select?: hotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hotels
     */
    omit?: hotelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hotelsInclude<ExtArgs> | null
  }


  /**
   * Model includes
   */

  export type AggregateIncludes = {
    _count: IncludesCountAggregateOutputType | null
    _avg: IncludesAvgAggregateOutputType | null
    _sum: IncludesSumAggregateOutputType | null
    _min: IncludesMinAggregateOutputType | null
    _max: IncludesMaxAggregateOutputType | null
  }

  export type IncludesAvgAggregateOutputType = {
    id: number | null
    trips_id: number | null
    hotels_id: number | null
  }

  export type IncludesSumAggregateOutputType = {
    id: number | null
    trips_id: number | null
    hotels_id: number | null
  }

  export type IncludesMinAggregateOutputType = {
    id: number | null
    trips_id: number | null
    hotels_id: number | null
  }

  export type IncludesMaxAggregateOutputType = {
    id: number | null
    trips_id: number | null
    hotels_id: number | null
  }

  export type IncludesCountAggregateOutputType = {
    id: number
    trips_id: number
    hotels_id: number
    _all: number
  }


  export type IncludesAvgAggregateInputType = {
    id?: true
    trips_id?: true
    hotels_id?: true
  }

  export type IncludesSumAggregateInputType = {
    id?: true
    trips_id?: true
    hotels_id?: true
  }

  export type IncludesMinAggregateInputType = {
    id?: true
    trips_id?: true
    hotels_id?: true
  }

  export type IncludesMaxAggregateInputType = {
    id?: true
    trips_id?: true
    hotels_id?: true
  }

  export type IncludesCountAggregateInputType = {
    id?: true
    trips_id?: true
    hotels_id?: true
    _all?: true
  }

  export type IncludesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which includes to aggregate.
     */
    where?: includesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of includes to fetch.
     */
    orderBy?: includesOrderByWithRelationInput | includesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: includesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` includes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` includes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned includes
    **/
    _count?: true | IncludesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncludesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncludesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncludesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncludesMaxAggregateInputType
  }

  export type GetIncludesAggregateType<T extends IncludesAggregateArgs> = {
        [P in keyof T & keyof AggregateIncludes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncludes[P]>
      : GetScalarType<T[P], AggregateIncludes[P]>
  }




  export type includesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: includesWhereInput
    orderBy?: includesOrderByWithAggregationInput | includesOrderByWithAggregationInput[]
    by: IncludesScalarFieldEnum[] | IncludesScalarFieldEnum
    having?: includesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncludesCountAggregateInputType | true
    _avg?: IncludesAvgAggregateInputType
    _sum?: IncludesSumAggregateInputType
    _min?: IncludesMinAggregateInputType
    _max?: IncludesMaxAggregateInputType
  }

  export type IncludesGroupByOutputType = {
    id: number
    trips_id: number
    hotels_id: number
    _count: IncludesCountAggregateOutputType | null
    _avg: IncludesAvgAggregateOutputType | null
    _sum: IncludesSumAggregateOutputType | null
    _min: IncludesMinAggregateOutputType | null
    _max: IncludesMaxAggregateOutputType | null
  }

  type GetIncludesGroupByPayload<T extends includesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncludesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncludesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncludesGroupByOutputType[P]>
            : GetScalarType<T[P], IncludesGroupByOutputType[P]>
        }
      >
    >


  export type includesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trips_id?: boolean
    hotels_id?: boolean
    trips?: boolean | tripsDefaultArgs<ExtArgs>
    hotels?: boolean | hotelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["includes"]>



  export type includesSelectScalar = {
    id?: boolean
    trips_id?: boolean
    hotels_id?: boolean
  }

  export type includesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trips_id" | "hotels_id", ExtArgs["result"]["includes"]>
  export type includesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | tripsDefaultArgs<ExtArgs>
    hotels?: boolean | hotelsDefaultArgs<ExtArgs>
  }

  export type $includesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "includes"
    objects: {
      trips: Prisma.$tripsPayload<ExtArgs>
      hotels: Prisma.$hotelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trips_id: number
      hotels_id: number
    }, ExtArgs["result"]["includes"]>
    composites: {}
  }

  type includesGetPayload<S extends boolean | null | undefined | includesDefaultArgs> = $Result.GetResult<Prisma.$includesPayload, S>

  type includesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<includesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncludesCountAggregateInputType | true
    }

  export interface includesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['includes'], meta: { name: 'includes' } }
    /**
     * Find zero or one Includes that matches the filter.
     * @param {includesFindUniqueArgs} args - Arguments to find a Includes
     * @example
     * // Get one Includes
     * const includes = await prisma.includes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends includesFindUniqueArgs>(args: SelectSubset<T, includesFindUniqueArgs<ExtArgs>>): Prisma__includesClient<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Includes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {includesFindUniqueOrThrowArgs} args - Arguments to find a Includes
     * @example
     * // Get one Includes
     * const includes = await prisma.includes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends includesFindUniqueOrThrowArgs>(args: SelectSubset<T, includesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__includesClient<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Includes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {includesFindFirstArgs} args - Arguments to find a Includes
     * @example
     * // Get one Includes
     * const includes = await prisma.includes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends includesFindFirstArgs>(args?: SelectSubset<T, includesFindFirstArgs<ExtArgs>>): Prisma__includesClient<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Includes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {includesFindFirstOrThrowArgs} args - Arguments to find a Includes
     * @example
     * // Get one Includes
     * const includes = await prisma.includes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends includesFindFirstOrThrowArgs>(args?: SelectSubset<T, includesFindFirstOrThrowArgs<ExtArgs>>): Prisma__includesClient<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Includes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {includesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Includes
     * const includes = await prisma.includes.findMany()
     * 
     * // Get first 10 Includes
     * const includes = await prisma.includes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const includesWithIdOnly = await prisma.includes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends includesFindManyArgs>(args?: SelectSubset<T, includesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Includes.
     * @param {includesCreateArgs} args - Arguments to create a Includes.
     * @example
     * // Create one Includes
     * const Includes = await prisma.includes.create({
     *   data: {
     *     // ... data to create a Includes
     *   }
     * })
     * 
     */
    create<T extends includesCreateArgs>(args: SelectSubset<T, includesCreateArgs<ExtArgs>>): Prisma__includesClient<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Includes.
     * @param {includesCreateManyArgs} args - Arguments to create many Includes.
     * @example
     * // Create many Includes
     * const includes = await prisma.includes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends includesCreateManyArgs>(args?: SelectSubset<T, includesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Includes.
     * @param {includesDeleteArgs} args - Arguments to delete one Includes.
     * @example
     * // Delete one Includes
     * const Includes = await prisma.includes.delete({
     *   where: {
     *     // ... filter to delete one Includes
     *   }
     * })
     * 
     */
    delete<T extends includesDeleteArgs>(args: SelectSubset<T, includesDeleteArgs<ExtArgs>>): Prisma__includesClient<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Includes.
     * @param {includesUpdateArgs} args - Arguments to update one Includes.
     * @example
     * // Update one Includes
     * const includes = await prisma.includes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends includesUpdateArgs>(args: SelectSubset<T, includesUpdateArgs<ExtArgs>>): Prisma__includesClient<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Includes.
     * @param {includesDeleteManyArgs} args - Arguments to filter Includes to delete.
     * @example
     * // Delete a few Includes
     * const { count } = await prisma.includes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends includesDeleteManyArgs>(args?: SelectSubset<T, includesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Includes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {includesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Includes
     * const includes = await prisma.includes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends includesUpdateManyArgs>(args: SelectSubset<T, includesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Includes.
     * @param {includesUpsertArgs} args - Arguments to update or create a Includes.
     * @example
     * // Update or create a Includes
     * const includes = await prisma.includes.upsert({
     *   create: {
     *     // ... data to create a Includes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Includes we want to update
     *   }
     * })
     */
    upsert<T extends includesUpsertArgs>(args: SelectSubset<T, includesUpsertArgs<ExtArgs>>): Prisma__includesClient<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Includes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {includesCountArgs} args - Arguments to filter Includes to count.
     * @example
     * // Count the number of Includes
     * const count = await prisma.includes.count({
     *   where: {
     *     // ... the filter for the Includes we want to count
     *   }
     * })
    **/
    count<T extends includesCountArgs>(
      args?: Subset<T, includesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncludesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Includes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncludesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncludesAggregateArgs>(args: Subset<T, IncludesAggregateArgs>): Prisma.PrismaPromise<GetIncludesAggregateType<T>>

    /**
     * Group by Includes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {includesGroupByArgs} args - Group by arguments.
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
      T extends includesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: includesGroupByArgs['orderBy'] }
        : { orderBy?: includesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, includesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncludesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the includes model
   */
  readonly fields: includesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for includes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__includesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends tripsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tripsDefaultArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotels<T extends hotelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hotelsDefaultArgs<ExtArgs>>): Prisma__hotelsClient<$Result.GetResult<Prisma.$hotelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the includes model
   */
  interface includesFieldRefs {
    readonly id: FieldRef<"includes", 'Int'>
    readonly trips_id: FieldRef<"includes", 'Int'>
    readonly hotels_id: FieldRef<"includes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * includes findUnique
   */
  export type includesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    /**
     * Filter, which includes to fetch.
     */
    where: includesWhereUniqueInput
  }

  /**
   * includes findUniqueOrThrow
   */
  export type includesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    /**
     * Filter, which includes to fetch.
     */
    where: includesWhereUniqueInput
  }

  /**
   * includes findFirst
   */
  export type includesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    /**
     * Filter, which includes to fetch.
     */
    where?: includesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of includes to fetch.
     */
    orderBy?: includesOrderByWithRelationInput | includesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for includes.
     */
    cursor?: includesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` includes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` includes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of includes.
     */
    distinct?: IncludesScalarFieldEnum | IncludesScalarFieldEnum[]
  }

  /**
   * includes findFirstOrThrow
   */
  export type includesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    /**
     * Filter, which includes to fetch.
     */
    where?: includesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of includes to fetch.
     */
    orderBy?: includesOrderByWithRelationInput | includesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for includes.
     */
    cursor?: includesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` includes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` includes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of includes.
     */
    distinct?: IncludesScalarFieldEnum | IncludesScalarFieldEnum[]
  }

  /**
   * includes findMany
   */
  export type includesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    /**
     * Filter, which includes to fetch.
     */
    where?: includesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of includes to fetch.
     */
    orderBy?: includesOrderByWithRelationInput | includesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing includes.
     */
    cursor?: includesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` includes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` includes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of includes.
     */
    distinct?: IncludesScalarFieldEnum | IncludesScalarFieldEnum[]
  }

  /**
   * includes create
   */
  export type includesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    /**
     * The data needed to create a includes.
     */
    data: XOR<includesCreateInput, includesUncheckedCreateInput>
  }

  /**
   * includes createMany
   */
  export type includesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many includes.
     */
    data: includesCreateManyInput | includesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * includes update
   */
  export type includesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    /**
     * The data needed to update a includes.
     */
    data: XOR<includesUpdateInput, includesUncheckedUpdateInput>
    /**
     * Choose, which includes to update.
     */
    where: includesWhereUniqueInput
  }

  /**
   * includes updateMany
   */
  export type includesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update includes.
     */
    data: XOR<includesUpdateManyMutationInput, includesUncheckedUpdateManyInput>
    /**
     * Filter which includes to update
     */
    where?: includesWhereInput
    /**
     * Limit how many includes to update.
     */
    limit?: number
  }

  /**
   * includes upsert
   */
  export type includesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    /**
     * The filter to search for the includes to update in case it exists.
     */
    where: includesWhereUniqueInput
    /**
     * In case the includes found by the `where` argument doesn't exist, create a new includes with this data.
     */
    create: XOR<includesCreateInput, includesUncheckedCreateInput>
    /**
     * In case the includes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<includesUpdateInput, includesUncheckedUpdateInput>
  }

  /**
   * includes delete
   */
  export type includesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    /**
     * Filter which includes to delete.
     */
    where: includesWhereUniqueInput
  }

  /**
   * includes deleteMany
   */
  export type includesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which includes to delete
     */
    where?: includesWhereInput
    /**
     * Limit how many includes to delete.
     */
    limit?: number
  }

  /**
   * includes without action
   */
  export type includesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    bookings_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    bookings_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    bookings_id: number | null
    amount: Decimal | null
    payment_method: string | null
    payment_status: string | null
    created_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    bookings_id: number | null
    amount: Decimal | null
    payment_method: string | null
    payment_status: string | null
    created_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    bookings_id: number
    amount: number
    payment_method: number
    payment_status: number
    created_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    bookings_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    bookings_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    bookings_id?: true
    amount?: true
    payment_method?: true
    payment_status?: true
    created_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    bookings_id?: true
    amount?: true
    payment_method?: true
    payment_status?: true
    created_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    bookings_id?: true
    amount?: true
    payment_method?: true
    payment_status?: true
    created_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    bookings_id: number
    amount: Decimal
    payment_method: string
    payment_status: string
    created_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookings_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_status?: boolean
    created_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>



  export type paymentsSelectScalar = {
    id?: boolean
    bookings_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_status?: boolean
    created_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookings_id" | "amount" | "payment_method" | "payment_status" | "created_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookings_id: number
      amount: Prisma.Decimal
      payment_method: string
      payment_status: string
      created_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
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
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends bookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingsDefaultArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly bookings_id: FieldRef<"payments", 'Int'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly payment_method: FieldRef<"payments", 'String'>
    readonly payment_status: FieldRef<"payments", 'String'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    trips_id: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    trips_id: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    trips_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    trips_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    user_id: number
    trips_id: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    user_id?: true
    trips_id?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    user_id: number
    trips_id: number
    rating: number
    comment: string | null
    created_at: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    trips_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    trips?: boolean | tripsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type reviewSelectScalar = {
    id?: boolean
    user_id?: boolean
    trips_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "trips_id" | "rating" | "comment" | "created_at", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    trips?: boolean | tripsDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      trips: Prisma.$tripsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      trips_id: number
      rating: number
      comment: string | null
      created_at: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trips<T extends tripsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tripsDefaultArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<"review", 'Int'>
    readonly user_id: FieldRef<"review", 'Int'>
    readonly trips_id: FieldRef<"review", 'Int'>
    readonly rating: FieldRef<"review", 'Int'>
    readonly comment: FieldRef<"review", 'String'>
    readonly created_at: FieldRef<"review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Model travel_types
   */

  export type AggregateTravel_types = {
    _count: Travel_typesCountAggregateOutputType | null
    _avg: Travel_typesAvgAggregateOutputType | null
    _sum: Travel_typesSumAggregateOutputType | null
    _min: Travel_typesMinAggregateOutputType | null
    _max: Travel_typesMaxAggregateOutputType | null
  }

  export type Travel_typesAvgAggregateOutputType = {
    id: number | null
  }

  export type Travel_typesSumAggregateOutputType = {
    id: number | null
  }

  export type Travel_typesMinAggregateOutputType = {
    id: number | null
    tname: string | null
  }

  export type Travel_typesMaxAggregateOutputType = {
    id: number | null
    tname: string | null
  }

  export type Travel_typesCountAggregateOutputType = {
    id: number
    tname: number
    _all: number
  }


  export type Travel_typesAvgAggregateInputType = {
    id?: true
  }

  export type Travel_typesSumAggregateInputType = {
    id?: true
  }

  export type Travel_typesMinAggregateInputType = {
    id?: true
    tname?: true
  }

  export type Travel_typesMaxAggregateInputType = {
    id?: true
    tname?: true
  }

  export type Travel_typesCountAggregateInputType = {
    id?: true
    tname?: true
    _all?: true
  }

  export type Travel_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which travel_types to aggregate.
     */
    where?: travel_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of travel_types to fetch.
     */
    orderBy?: travel_typesOrderByWithRelationInput | travel_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: travel_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` travel_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` travel_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned travel_types
    **/
    _count?: true | Travel_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Travel_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Travel_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Travel_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Travel_typesMaxAggregateInputType
  }

  export type GetTravel_typesAggregateType<T extends Travel_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateTravel_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravel_types[P]>
      : GetScalarType<T[P], AggregateTravel_types[P]>
  }




  export type travel_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: travel_typesWhereInput
    orderBy?: travel_typesOrderByWithAggregationInput | travel_typesOrderByWithAggregationInput[]
    by: Travel_typesScalarFieldEnum[] | Travel_typesScalarFieldEnum
    having?: travel_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Travel_typesCountAggregateInputType | true
    _avg?: Travel_typesAvgAggregateInputType
    _sum?: Travel_typesSumAggregateInputType
    _min?: Travel_typesMinAggregateInputType
    _max?: Travel_typesMaxAggregateInputType
  }

  export type Travel_typesGroupByOutputType = {
    id: number
    tname: string
    _count: Travel_typesCountAggregateOutputType | null
    _avg: Travel_typesAvgAggregateOutputType | null
    _sum: Travel_typesSumAggregateOutputType | null
    _min: Travel_typesMinAggregateOutputType | null
    _max: Travel_typesMaxAggregateOutputType | null
  }

  type GetTravel_typesGroupByPayload<T extends travel_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Travel_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Travel_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Travel_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Travel_typesGroupByOutputType[P]>
        }
      >
    >


  export type travel_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tname?: boolean
  }, ExtArgs["result"]["travel_types"]>



  export type travel_typesSelectScalar = {
    id?: boolean
    tname?: boolean
  }

  export type travel_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tname", ExtArgs["result"]["travel_types"]>

  export type $travel_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "travel_types"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tname: string
    }, ExtArgs["result"]["travel_types"]>
    composites: {}
  }

  type travel_typesGetPayload<S extends boolean | null | undefined | travel_typesDefaultArgs> = $Result.GetResult<Prisma.$travel_typesPayload, S>

  type travel_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<travel_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Travel_typesCountAggregateInputType | true
    }

  export interface travel_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['travel_types'], meta: { name: 'travel_types' } }
    /**
     * Find zero or one Travel_types that matches the filter.
     * @param {travel_typesFindUniqueArgs} args - Arguments to find a Travel_types
     * @example
     * // Get one Travel_types
     * const travel_types = await prisma.travel_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends travel_typesFindUniqueArgs>(args: SelectSubset<T, travel_typesFindUniqueArgs<ExtArgs>>): Prisma__travel_typesClient<$Result.GetResult<Prisma.$travel_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Travel_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {travel_typesFindUniqueOrThrowArgs} args - Arguments to find a Travel_types
     * @example
     * // Get one Travel_types
     * const travel_types = await prisma.travel_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends travel_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, travel_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__travel_typesClient<$Result.GetResult<Prisma.$travel_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_typesFindFirstArgs} args - Arguments to find a Travel_types
     * @example
     * // Get one Travel_types
     * const travel_types = await prisma.travel_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends travel_typesFindFirstArgs>(args?: SelectSubset<T, travel_typesFindFirstArgs<ExtArgs>>): Prisma__travel_typesClient<$Result.GetResult<Prisma.$travel_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_typesFindFirstOrThrowArgs} args - Arguments to find a Travel_types
     * @example
     * // Get one Travel_types
     * const travel_types = await prisma.travel_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends travel_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, travel_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__travel_typesClient<$Result.GetResult<Prisma.$travel_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Travel_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Travel_types
     * const travel_types = await prisma.travel_types.findMany()
     * 
     * // Get first 10 Travel_types
     * const travel_types = await prisma.travel_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travel_typesWithIdOnly = await prisma.travel_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends travel_typesFindManyArgs>(args?: SelectSubset<T, travel_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$travel_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Travel_types.
     * @param {travel_typesCreateArgs} args - Arguments to create a Travel_types.
     * @example
     * // Create one Travel_types
     * const Travel_types = await prisma.travel_types.create({
     *   data: {
     *     // ... data to create a Travel_types
     *   }
     * })
     * 
     */
    create<T extends travel_typesCreateArgs>(args: SelectSubset<T, travel_typesCreateArgs<ExtArgs>>): Prisma__travel_typesClient<$Result.GetResult<Prisma.$travel_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Travel_types.
     * @param {travel_typesCreateManyArgs} args - Arguments to create many Travel_types.
     * @example
     * // Create many Travel_types
     * const travel_types = await prisma.travel_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends travel_typesCreateManyArgs>(args?: SelectSubset<T, travel_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Travel_types.
     * @param {travel_typesDeleteArgs} args - Arguments to delete one Travel_types.
     * @example
     * // Delete one Travel_types
     * const Travel_types = await prisma.travel_types.delete({
     *   where: {
     *     // ... filter to delete one Travel_types
     *   }
     * })
     * 
     */
    delete<T extends travel_typesDeleteArgs>(args: SelectSubset<T, travel_typesDeleteArgs<ExtArgs>>): Prisma__travel_typesClient<$Result.GetResult<Prisma.$travel_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Travel_types.
     * @param {travel_typesUpdateArgs} args - Arguments to update one Travel_types.
     * @example
     * // Update one Travel_types
     * const travel_types = await prisma.travel_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends travel_typesUpdateArgs>(args: SelectSubset<T, travel_typesUpdateArgs<ExtArgs>>): Prisma__travel_typesClient<$Result.GetResult<Prisma.$travel_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Travel_types.
     * @param {travel_typesDeleteManyArgs} args - Arguments to filter Travel_types to delete.
     * @example
     * // Delete a few Travel_types
     * const { count } = await prisma.travel_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends travel_typesDeleteManyArgs>(args?: SelectSubset<T, travel_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travel_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Travel_types
     * const travel_types = await prisma.travel_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends travel_typesUpdateManyArgs>(args: SelectSubset<T, travel_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Travel_types.
     * @param {travel_typesUpsertArgs} args - Arguments to update or create a Travel_types.
     * @example
     * // Update or create a Travel_types
     * const travel_types = await prisma.travel_types.upsert({
     *   create: {
     *     // ... data to create a Travel_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Travel_types we want to update
     *   }
     * })
     */
    upsert<T extends travel_typesUpsertArgs>(args: SelectSubset<T, travel_typesUpsertArgs<ExtArgs>>): Prisma__travel_typesClient<$Result.GetResult<Prisma.$travel_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Travel_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_typesCountArgs} args - Arguments to filter Travel_types to count.
     * @example
     * // Count the number of Travel_types
     * const count = await prisma.travel_types.count({
     *   where: {
     *     // ... the filter for the Travel_types we want to count
     *   }
     * })
    **/
    count<T extends travel_typesCountArgs>(
      args?: Subset<T, travel_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Travel_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Travel_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Travel_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Travel_typesAggregateArgs>(args: Subset<T, Travel_typesAggregateArgs>): Prisma.PrismaPromise<GetTravel_typesAggregateType<T>>

    /**
     * Group by Travel_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {travel_typesGroupByArgs} args - Group by arguments.
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
      T extends travel_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: travel_typesGroupByArgs['orderBy'] }
        : { orderBy?: travel_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, travel_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravel_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the travel_types model
   */
  readonly fields: travel_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for travel_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__travel_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the travel_types model
   */
  interface travel_typesFieldRefs {
    readonly id: FieldRef<"travel_types", 'Int'>
    readonly tname: FieldRef<"travel_types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * travel_types findUnique
   */
  export type travel_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
    /**
     * Filter, which travel_types to fetch.
     */
    where: travel_typesWhereUniqueInput
  }

  /**
   * travel_types findUniqueOrThrow
   */
  export type travel_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
    /**
     * Filter, which travel_types to fetch.
     */
    where: travel_typesWhereUniqueInput
  }

  /**
   * travel_types findFirst
   */
  export type travel_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
    /**
     * Filter, which travel_types to fetch.
     */
    where?: travel_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of travel_types to fetch.
     */
    orderBy?: travel_typesOrderByWithRelationInput | travel_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for travel_types.
     */
    cursor?: travel_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` travel_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` travel_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of travel_types.
     */
    distinct?: Travel_typesScalarFieldEnum | Travel_typesScalarFieldEnum[]
  }

  /**
   * travel_types findFirstOrThrow
   */
  export type travel_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
    /**
     * Filter, which travel_types to fetch.
     */
    where?: travel_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of travel_types to fetch.
     */
    orderBy?: travel_typesOrderByWithRelationInput | travel_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for travel_types.
     */
    cursor?: travel_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` travel_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` travel_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of travel_types.
     */
    distinct?: Travel_typesScalarFieldEnum | Travel_typesScalarFieldEnum[]
  }

  /**
   * travel_types findMany
   */
  export type travel_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
    /**
     * Filter, which travel_types to fetch.
     */
    where?: travel_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of travel_types to fetch.
     */
    orderBy?: travel_typesOrderByWithRelationInput | travel_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing travel_types.
     */
    cursor?: travel_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` travel_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` travel_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of travel_types.
     */
    distinct?: Travel_typesScalarFieldEnum | Travel_typesScalarFieldEnum[]
  }

  /**
   * travel_types create
   */
  export type travel_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
    /**
     * The data needed to create a travel_types.
     */
    data: XOR<travel_typesCreateInput, travel_typesUncheckedCreateInput>
  }

  /**
   * travel_types createMany
   */
  export type travel_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many travel_types.
     */
    data: travel_typesCreateManyInput | travel_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * travel_types update
   */
  export type travel_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
    /**
     * The data needed to update a travel_types.
     */
    data: XOR<travel_typesUpdateInput, travel_typesUncheckedUpdateInput>
    /**
     * Choose, which travel_types to update.
     */
    where: travel_typesWhereUniqueInput
  }

  /**
   * travel_types updateMany
   */
  export type travel_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update travel_types.
     */
    data: XOR<travel_typesUpdateManyMutationInput, travel_typesUncheckedUpdateManyInput>
    /**
     * Filter which travel_types to update
     */
    where?: travel_typesWhereInput
    /**
     * Limit how many travel_types to update.
     */
    limit?: number
  }

  /**
   * travel_types upsert
   */
  export type travel_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
    /**
     * The filter to search for the travel_types to update in case it exists.
     */
    where: travel_typesWhereUniqueInput
    /**
     * In case the travel_types found by the `where` argument doesn't exist, create a new travel_types with this data.
     */
    create: XOR<travel_typesCreateInput, travel_typesUncheckedCreateInput>
    /**
     * In case the travel_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<travel_typesUpdateInput, travel_typesUncheckedUpdateInput>
  }

  /**
   * travel_types delete
   */
  export type travel_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
    /**
     * Filter which travel_types to delete.
     */
    where: travel_typesWhereUniqueInput
  }

  /**
   * travel_types deleteMany
   */
  export type travel_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which travel_types to delete
     */
    where?: travel_typesWhereInput
    /**
     * Limit how many travel_types to delete.
     */
    limit?: number
  }

  /**
   * travel_types without action
   */
  export type travel_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the travel_types
     */
    select?: travel_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the travel_types
     */
    omit?: travel_typesOmit<ExtArgs> | null
  }


  /**
   * Model trip_dates
   */

  export type AggregateTrip_dates = {
    _count: Trip_datesCountAggregateOutputType | null
    _avg: Trip_datesAvgAggregateOutputType | null
    _sum: Trip_datesSumAggregateOutputType | null
    _min: Trip_datesMinAggregateOutputType | null
    _max: Trip_datesMaxAggregateOutputType | null
  }

  export type Trip_datesAvgAggregateOutputType = {
    id: number | null
    trips_id: number | null
  }

  export type Trip_datesSumAggregateOutputType = {
    id: number | null
    trips_id: number | null
  }

  export type Trip_datesMinAggregateOutputType = {
    id: number | null
    trips_id: number | null
    available_date: Date | null
  }

  export type Trip_datesMaxAggregateOutputType = {
    id: number | null
    trips_id: number | null
    available_date: Date | null
  }

  export type Trip_datesCountAggregateOutputType = {
    id: number
    trips_id: number
    available_date: number
    _all: number
  }


  export type Trip_datesAvgAggregateInputType = {
    id?: true
    trips_id?: true
  }

  export type Trip_datesSumAggregateInputType = {
    id?: true
    trips_id?: true
  }

  export type Trip_datesMinAggregateInputType = {
    id?: true
    trips_id?: true
    available_date?: true
  }

  export type Trip_datesMaxAggregateInputType = {
    id?: true
    trips_id?: true
    available_date?: true
  }

  export type Trip_datesCountAggregateInputType = {
    id?: true
    trips_id?: true
    available_date?: true
    _all?: true
  }

  export type Trip_datesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trip_dates to aggregate.
     */
    where?: trip_datesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_dates to fetch.
     */
    orderBy?: trip_datesOrderByWithRelationInput | trip_datesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trip_datesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trip_dates
    **/
    _count?: true | Trip_datesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Trip_datesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Trip_datesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trip_datesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trip_datesMaxAggregateInputType
  }

  export type GetTrip_datesAggregateType<T extends Trip_datesAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip_dates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip_dates[P]>
      : GetScalarType<T[P], AggregateTrip_dates[P]>
  }




  export type trip_datesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trip_datesWhereInput
    orderBy?: trip_datesOrderByWithAggregationInput | trip_datesOrderByWithAggregationInput[]
    by: Trip_datesScalarFieldEnum[] | Trip_datesScalarFieldEnum
    having?: trip_datesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trip_datesCountAggregateInputType | true
    _avg?: Trip_datesAvgAggregateInputType
    _sum?: Trip_datesSumAggregateInputType
    _min?: Trip_datesMinAggregateInputType
    _max?: Trip_datesMaxAggregateInputType
  }

  export type Trip_datesGroupByOutputType = {
    id: number
    trips_id: number
    available_date: Date
    _count: Trip_datesCountAggregateOutputType | null
    _avg: Trip_datesAvgAggregateOutputType | null
    _sum: Trip_datesSumAggregateOutputType | null
    _min: Trip_datesMinAggregateOutputType | null
    _max: Trip_datesMaxAggregateOutputType | null
  }

  type GetTrip_datesGroupByPayload<T extends trip_datesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trip_datesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trip_datesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trip_datesGroupByOutputType[P]>
            : GetScalarType<T[P], Trip_datesGroupByOutputType[P]>
        }
      >
    >


  export type trip_datesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trips_id?: boolean
    available_date?: boolean
    trips?: boolean | tripsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip_dates"]>



  export type trip_datesSelectScalar = {
    id?: boolean
    trips_id?: boolean
    available_date?: boolean
  }

  export type trip_datesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trips_id" | "available_date", ExtArgs["result"]["trip_dates"]>
  export type trip_datesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | tripsDefaultArgs<ExtArgs>
  }

  export type $trip_datesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trip_dates"
    objects: {
      trips: Prisma.$tripsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trips_id: number
      available_date: Date
    }, ExtArgs["result"]["trip_dates"]>
    composites: {}
  }

  type trip_datesGetPayload<S extends boolean | null | undefined | trip_datesDefaultArgs> = $Result.GetResult<Prisma.$trip_datesPayload, S>

  type trip_datesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trip_datesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trip_datesCountAggregateInputType | true
    }

  export interface trip_datesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trip_dates'], meta: { name: 'trip_dates' } }
    /**
     * Find zero or one Trip_dates that matches the filter.
     * @param {trip_datesFindUniqueArgs} args - Arguments to find a Trip_dates
     * @example
     * // Get one Trip_dates
     * const trip_dates = await prisma.trip_dates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trip_datesFindUniqueArgs>(args: SelectSubset<T, trip_datesFindUniqueArgs<ExtArgs>>): Prisma__trip_datesClient<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip_dates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trip_datesFindUniqueOrThrowArgs} args - Arguments to find a Trip_dates
     * @example
     * // Get one Trip_dates
     * const trip_dates = await prisma.trip_dates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trip_datesFindUniqueOrThrowArgs>(args: SelectSubset<T, trip_datesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trip_datesClient<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip_dates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_datesFindFirstArgs} args - Arguments to find a Trip_dates
     * @example
     * // Get one Trip_dates
     * const trip_dates = await prisma.trip_dates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trip_datesFindFirstArgs>(args?: SelectSubset<T, trip_datesFindFirstArgs<ExtArgs>>): Prisma__trip_datesClient<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip_dates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_datesFindFirstOrThrowArgs} args - Arguments to find a Trip_dates
     * @example
     * // Get one Trip_dates
     * const trip_dates = await prisma.trip_dates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trip_datesFindFirstOrThrowArgs>(args?: SelectSubset<T, trip_datesFindFirstOrThrowArgs<ExtArgs>>): Prisma__trip_datesClient<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trip_dates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_datesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trip_dates
     * const trip_dates = await prisma.trip_dates.findMany()
     * 
     * // Get first 10 Trip_dates
     * const trip_dates = await prisma.trip_dates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trip_datesWithIdOnly = await prisma.trip_dates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends trip_datesFindManyArgs>(args?: SelectSubset<T, trip_datesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip_dates.
     * @param {trip_datesCreateArgs} args - Arguments to create a Trip_dates.
     * @example
     * // Create one Trip_dates
     * const Trip_dates = await prisma.trip_dates.create({
     *   data: {
     *     // ... data to create a Trip_dates
     *   }
     * })
     * 
     */
    create<T extends trip_datesCreateArgs>(args: SelectSubset<T, trip_datesCreateArgs<ExtArgs>>): Prisma__trip_datesClient<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trip_dates.
     * @param {trip_datesCreateManyArgs} args - Arguments to create many Trip_dates.
     * @example
     * // Create many Trip_dates
     * const trip_dates = await prisma.trip_dates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trip_datesCreateManyArgs>(args?: SelectSubset<T, trip_datesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip_dates.
     * @param {trip_datesDeleteArgs} args - Arguments to delete one Trip_dates.
     * @example
     * // Delete one Trip_dates
     * const Trip_dates = await prisma.trip_dates.delete({
     *   where: {
     *     // ... filter to delete one Trip_dates
     *   }
     * })
     * 
     */
    delete<T extends trip_datesDeleteArgs>(args: SelectSubset<T, trip_datesDeleteArgs<ExtArgs>>): Prisma__trip_datesClient<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip_dates.
     * @param {trip_datesUpdateArgs} args - Arguments to update one Trip_dates.
     * @example
     * // Update one Trip_dates
     * const trip_dates = await prisma.trip_dates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trip_datesUpdateArgs>(args: SelectSubset<T, trip_datesUpdateArgs<ExtArgs>>): Prisma__trip_datesClient<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trip_dates.
     * @param {trip_datesDeleteManyArgs} args - Arguments to filter Trip_dates to delete.
     * @example
     * // Delete a few Trip_dates
     * const { count } = await prisma.trip_dates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trip_datesDeleteManyArgs>(args?: SelectSubset<T, trip_datesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trip_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_datesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trip_dates
     * const trip_dates = await prisma.trip_dates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trip_datesUpdateManyArgs>(args: SelectSubset<T, trip_datesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip_dates.
     * @param {trip_datesUpsertArgs} args - Arguments to update or create a Trip_dates.
     * @example
     * // Update or create a Trip_dates
     * const trip_dates = await prisma.trip_dates.upsert({
     *   create: {
     *     // ... data to create a Trip_dates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip_dates we want to update
     *   }
     * })
     */
    upsert<T extends trip_datesUpsertArgs>(args: SelectSubset<T, trip_datesUpsertArgs<ExtArgs>>): Prisma__trip_datesClient<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trip_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_datesCountArgs} args - Arguments to filter Trip_dates to count.
     * @example
     * // Count the number of Trip_dates
     * const count = await prisma.trip_dates.count({
     *   where: {
     *     // ... the filter for the Trip_dates we want to count
     *   }
     * })
    **/
    count<T extends trip_datesCountArgs>(
      args?: Subset<T, trip_datesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trip_datesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trip_datesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Trip_datesAggregateArgs>(args: Subset<T, Trip_datesAggregateArgs>): Prisma.PrismaPromise<GetTrip_datesAggregateType<T>>

    /**
     * Group by Trip_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_datesGroupByArgs} args - Group by arguments.
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
      T extends trip_datesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trip_datesGroupByArgs['orderBy'] }
        : { orderBy?: trip_datesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, trip_datesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrip_datesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trip_dates model
   */
  readonly fields: trip_datesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trip_dates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trip_datesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends tripsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tripsDefaultArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the trip_dates model
   */
  interface trip_datesFieldRefs {
    readonly id: FieldRef<"trip_dates", 'Int'>
    readonly trips_id: FieldRef<"trip_dates", 'Int'>
    readonly available_date: FieldRef<"trip_dates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * trip_dates findUnique
   */
  export type trip_datesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    /**
     * Filter, which trip_dates to fetch.
     */
    where: trip_datesWhereUniqueInput
  }

  /**
   * trip_dates findUniqueOrThrow
   */
  export type trip_datesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    /**
     * Filter, which trip_dates to fetch.
     */
    where: trip_datesWhereUniqueInput
  }

  /**
   * trip_dates findFirst
   */
  export type trip_datesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    /**
     * Filter, which trip_dates to fetch.
     */
    where?: trip_datesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_dates to fetch.
     */
    orderBy?: trip_datesOrderByWithRelationInput | trip_datesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trip_dates.
     */
    cursor?: trip_datesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trip_dates.
     */
    distinct?: Trip_datesScalarFieldEnum | Trip_datesScalarFieldEnum[]
  }

  /**
   * trip_dates findFirstOrThrow
   */
  export type trip_datesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    /**
     * Filter, which trip_dates to fetch.
     */
    where?: trip_datesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_dates to fetch.
     */
    orderBy?: trip_datesOrderByWithRelationInput | trip_datesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trip_dates.
     */
    cursor?: trip_datesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trip_dates.
     */
    distinct?: Trip_datesScalarFieldEnum | Trip_datesScalarFieldEnum[]
  }

  /**
   * trip_dates findMany
   */
  export type trip_datesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    /**
     * Filter, which trip_dates to fetch.
     */
    where?: trip_datesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_dates to fetch.
     */
    orderBy?: trip_datesOrderByWithRelationInput | trip_datesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trip_dates.
     */
    cursor?: trip_datesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trip_dates.
     */
    distinct?: Trip_datesScalarFieldEnum | Trip_datesScalarFieldEnum[]
  }

  /**
   * trip_dates create
   */
  export type trip_datesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    /**
     * The data needed to create a trip_dates.
     */
    data: XOR<trip_datesCreateInput, trip_datesUncheckedCreateInput>
  }

  /**
   * trip_dates createMany
   */
  export type trip_datesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trip_dates.
     */
    data: trip_datesCreateManyInput | trip_datesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trip_dates update
   */
  export type trip_datesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    /**
     * The data needed to update a trip_dates.
     */
    data: XOR<trip_datesUpdateInput, trip_datesUncheckedUpdateInput>
    /**
     * Choose, which trip_dates to update.
     */
    where: trip_datesWhereUniqueInput
  }

  /**
   * trip_dates updateMany
   */
  export type trip_datesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trip_dates.
     */
    data: XOR<trip_datesUpdateManyMutationInput, trip_datesUncheckedUpdateManyInput>
    /**
     * Filter which trip_dates to update
     */
    where?: trip_datesWhereInput
    /**
     * Limit how many trip_dates to update.
     */
    limit?: number
  }

  /**
   * trip_dates upsert
   */
  export type trip_datesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    /**
     * The filter to search for the trip_dates to update in case it exists.
     */
    where: trip_datesWhereUniqueInput
    /**
     * In case the trip_dates found by the `where` argument doesn't exist, create a new trip_dates with this data.
     */
    create: XOR<trip_datesCreateInput, trip_datesUncheckedCreateInput>
    /**
     * In case the trip_dates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trip_datesUpdateInput, trip_datesUncheckedUpdateInput>
  }

  /**
   * trip_dates delete
   */
  export type trip_datesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    /**
     * Filter which trip_dates to delete.
     */
    where: trip_datesWhereUniqueInput
  }

  /**
   * trip_dates deleteMany
   */
  export type trip_datesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trip_dates to delete
     */
    where?: trip_datesWhereInput
    /**
     * Limit how many trip_dates to delete.
     */
    limit?: number
  }

  /**
   * trip_dates without action
   */
  export type trip_datesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
  }


  /**
   * Model trip_images
   */

  export type AggregateTrip_images = {
    _count: Trip_imagesCountAggregateOutputType | null
    _avg: Trip_imagesAvgAggregateOutputType | null
    _sum: Trip_imagesSumAggregateOutputType | null
    _min: Trip_imagesMinAggregateOutputType | null
    _max: Trip_imagesMaxAggregateOutputType | null
  }

  export type Trip_imagesAvgAggregateOutputType = {
    id: number | null
    trips_id: number | null
  }

  export type Trip_imagesSumAggregateOutputType = {
    id: number | null
    trips_id: number | null
  }

  export type Trip_imagesMinAggregateOutputType = {
    id: number | null
    trips_id: number | null
    image_url: string | null
  }

  export type Trip_imagesMaxAggregateOutputType = {
    id: number | null
    trips_id: number | null
    image_url: string | null
  }

  export type Trip_imagesCountAggregateOutputType = {
    id: number
    trips_id: number
    image_url: number
    _all: number
  }


  export type Trip_imagesAvgAggregateInputType = {
    id?: true
    trips_id?: true
  }

  export type Trip_imagesSumAggregateInputType = {
    id?: true
    trips_id?: true
  }

  export type Trip_imagesMinAggregateInputType = {
    id?: true
    trips_id?: true
    image_url?: true
  }

  export type Trip_imagesMaxAggregateInputType = {
    id?: true
    trips_id?: true
    image_url?: true
  }

  export type Trip_imagesCountAggregateInputType = {
    id?: true
    trips_id?: true
    image_url?: true
    _all?: true
  }

  export type Trip_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trip_images to aggregate.
     */
    where?: trip_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_images to fetch.
     */
    orderBy?: trip_imagesOrderByWithRelationInput | trip_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trip_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trip_images
    **/
    _count?: true | Trip_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Trip_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Trip_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trip_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trip_imagesMaxAggregateInputType
  }

  export type GetTrip_imagesAggregateType<T extends Trip_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip_images[P]>
      : GetScalarType<T[P], AggregateTrip_images[P]>
  }




  export type trip_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trip_imagesWhereInput
    orderBy?: trip_imagesOrderByWithAggregationInput | trip_imagesOrderByWithAggregationInput[]
    by: Trip_imagesScalarFieldEnum[] | Trip_imagesScalarFieldEnum
    having?: trip_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trip_imagesCountAggregateInputType | true
    _avg?: Trip_imagesAvgAggregateInputType
    _sum?: Trip_imagesSumAggregateInputType
    _min?: Trip_imagesMinAggregateInputType
    _max?: Trip_imagesMaxAggregateInputType
  }

  export type Trip_imagesGroupByOutputType = {
    id: number
    trips_id: number
    image_url: string
    _count: Trip_imagesCountAggregateOutputType | null
    _avg: Trip_imagesAvgAggregateOutputType | null
    _sum: Trip_imagesSumAggregateOutputType | null
    _min: Trip_imagesMinAggregateOutputType | null
    _max: Trip_imagesMaxAggregateOutputType | null
  }

  type GetTrip_imagesGroupByPayload<T extends trip_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trip_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trip_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trip_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Trip_imagesGroupByOutputType[P]>
        }
      >
    >


  export type trip_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trips_id?: boolean
    image_url?: boolean
    trips?: boolean | tripsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip_images"]>



  export type trip_imagesSelectScalar = {
    id?: boolean
    trips_id?: boolean
    image_url?: boolean
  }

  export type trip_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trips_id" | "image_url", ExtArgs["result"]["trip_images"]>
  export type trip_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | tripsDefaultArgs<ExtArgs>
  }

  export type $trip_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trip_images"
    objects: {
      trips: Prisma.$tripsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trips_id: number
      image_url: string
    }, ExtArgs["result"]["trip_images"]>
    composites: {}
  }

  type trip_imagesGetPayload<S extends boolean | null | undefined | trip_imagesDefaultArgs> = $Result.GetResult<Prisma.$trip_imagesPayload, S>

  type trip_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trip_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trip_imagesCountAggregateInputType | true
    }

  export interface trip_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trip_images'], meta: { name: 'trip_images' } }
    /**
     * Find zero or one Trip_images that matches the filter.
     * @param {trip_imagesFindUniqueArgs} args - Arguments to find a Trip_images
     * @example
     * // Get one Trip_images
     * const trip_images = await prisma.trip_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trip_imagesFindUniqueArgs>(args: SelectSubset<T, trip_imagesFindUniqueArgs<ExtArgs>>): Prisma__trip_imagesClient<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trip_imagesFindUniqueOrThrowArgs} args - Arguments to find a Trip_images
     * @example
     * // Get one Trip_images
     * const trip_images = await prisma.trip_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trip_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, trip_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trip_imagesClient<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_imagesFindFirstArgs} args - Arguments to find a Trip_images
     * @example
     * // Get one Trip_images
     * const trip_images = await prisma.trip_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trip_imagesFindFirstArgs>(args?: SelectSubset<T, trip_imagesFindFirstArgs<ExtArgs>>): Prisma__trip_imagesClient<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_imagesFindFirstOrThrowArgs} args - Arguments to find a Trip_images
     * @example
     * // Get one Trip_images
     * const trip_images = await prisma.trip_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trip_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, trip_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__trip_imagesClient<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trip_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trip_images
     * const trip_images = await prisma.trip_images.findMany()
     * 
     * // Get first 10 Trip_images
     * const trip_images = await prisma.trip_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trip_imagesWithIdOnly = await prisma.trip_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends trip_imagesFindManyArgs>(args?: SelectSubset<T, trip_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip_images.
     * @param {trip_imagesCreateArgs} args - Arguments to create a Trip_images.
     * @example
     * // Create one Trip_images
     * const Trip_images = await prisma.trip_images.create({
     *   data: {
     *     // ... data to create a Trip_images
     *   }
     * })
     * 
     */
    create<T extends trip_imagesCreateArgs>(args: SelectSubset<T, trip_imagesCreateArgs<ExtArgs>>): Prisma__trip_imagesClient<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trip_images.
     * @param {trip_imagesCreateManyArgs} args - Arguments to create many Trip_images.
     * @example
     * // Create many Trip_images
     * const trip_images = await prisma.trip_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trip_imagesCreateManyArgs>(args?: SelectSubset<T, trip_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip_images.
     * @param {trip_imagesDeleteArgs} args - Arguments to delete one Trip_images.
     * @example
     * // Delete one Trip_images
     * const Trip_images = await prisma.trip_images.delete({
     *   where: {
     *     // ... filter to delete one Trip_images
     *   }
     * })
     * 
     */
    delete<T extends trip_imagesDeleteArgs>(args: SelectSubset<T, trip_imagesDeleteArgs<ExtArgs>>): Prisma__trip_imagesClient<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip_images.
     * @param {trip_imagesUpdateArgs} args - Arguments to update one Trip_images.
     * @example
     * // Update one Trip_images
     * const trip_images = await prisma.trip_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trip_imagesUpdateArgs>(args: SelectSubset<T, trip_imagesUpdateArgs<ExtArgs>>): Prisma__trip_imagesClient<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trip_images.
     * @param {trip_imagesDeleteManyArgs} args - Arguments to filter Trip_images to delete.
     * @example
     * // Delete a few Trip_images
     * const { count } = await prisma.trip_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trip_imagesDeleteManyArgs>(args?: SelectSubset<T, trip_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trip_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trip_images
     * const trip_images = await prisma.trip_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trip_imagesUpdateManyArgs>(args: SelectSubset<T, trip_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip_images.
     * @param {trip_imagesUpsertArgs} args - Arguments to update or create a Trip_images.
     * @example
     * // Update or create a Trip_images
     * const trip_images = await prisma.trip_images.upsert({
     *   create: {
     *     // ... data to create a Trip_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip_images we want to update
     *   }
     * })
     */
    upsert<T extends trip_imagesUpsertArgs>(args: SelectSubset<T, trip_imagesUpsertArgs<ExtArgs>>): Prisma__trip_imagesClient<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trip_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_imagesCountArgs} args - Arguments to filter Trip_images to count.
     * @example
     * // Count the number of Trip_images
     * const count = await prisma.trip_images.count({
     *   where: {
     *     // ... the filter for the Trip_images we want to count
     *   }
     * })
    **/
    count<T extends trip_imagesCountArgs>(
      args?: Subset<T, trip_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trip_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trip_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Trip_imagesAggregateArgs>(args: Subset<T, Trip_imagesAggregateArgs>): Prisma.PrismaPromise<GetTrip_imagesAggregateType<T>>

    /**
     * Group by Trip_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trip_imagesGroupByArgs} args - Group by arguments.
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
      T extends trip_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trip_imagesGroupByArgs['orderBy'] }
        : { orderBy?: trip_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, trip_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrip_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trip_images model
   */
  readonly fields: trip_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trip_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trip_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends tripsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tripsDefaultArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the trip_images model
   */
  interface trip_imagesFieldRefs {
    readonly id: FieldRef<"trip_images", 'Int'>
    readonly trips_id: FieldRef<"trip_images", 'Int'>
    readonly image_url: FieldRef<"trip_images", 'String'>
  }
    

  // Custom InputTypes
  /**
   * trip_images findUnique
   */
  export type trip_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    /**
     * Filter, which trip_images to fetch.
     */
    where: trip_imagesWhereUniqueInput
  }

  /**
   * trip_images findUniqueOrThrow
   */
  export type trip_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    /**
     * Filter, which trip_images to fetch.
     */
    where: trip_imagesWhereUniqueInput
  }

  /**
   * trip_images findFirst
   */
  export type trip_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    /**
     * Filter, which trip_images to fetch.
     */
    where?: trip_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_images to fetch.
     */
    orderBy?: trip_imagesOrderByWithRelationInput | trip_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trip_images.
     */
    cursor?: trip_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trip_images.
     */
    distinct?: Trip_imagesScalarFieldEnum | Trip_imagesScalarFieldEnum[]
  }

  /**
   * trip_images findFirstOrThrow
   */
  export type trip_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    /**
     * Filter, which trip_images to fetch.
     */
    where?: trip_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_images to fetch.
     */
    orderBy?: trip_imagesOrderByWithRelationInput | trip_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trip_images.
     */
    cursor?: trip_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trip_images.
     */
    distinct?: Trip_imagesScalarFieldEnum | Trip_imagesScalarFieldEnum[]
  }

  /**
   * trip_images findMany
   */
  export type trip_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    /**
     * Filter, which trip_images to fetch.
     */
    where?: trip_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trip_images to fetch.
     */
    orderBy?: trip_imagesOrderByWithRelationInput | trip_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trip_images.
     */
    cursor?: trip_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trip_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trip_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trip_images.
     */
    distinct?: Trip_imagesScalarFieldEnum | Trip_imagesScalarFieldEnum[]
  }

  /**
   * trip_images create
   */
  export type trip_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a trip_images.
     */
    data: XOR<trip_imagesCreateInput, trip_imagesUncheckedCreateInput>
  }

  /**
   * trip_images createMany
   */
  export type trip_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trip_images.
     */
    data: trip_imagesCreateManyInput | trip_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trip_images update
   */
  export type trip_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a trip_images.
     */
    data: XOR<trip_imagesUpdateInput, trip_imagesUncheckedUpdateInput>
    /**
     * Choose, which trip_images to update.
     */
    where: trip_imagesWhereUniqueInput
  }

  /**
   * trip_images updateMany
   */
  export type trip_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trip_images.
     */
    data: XOR<trip_imagesUpdateManyMutationInput, trip_imagesUncheckedUpdateManyInput>
    /**
     * Filter which trip_images to update
     */
    where?: trip_imagesWhereInput
    /**
     * Limit how many trip_images to update.
     */
    limit?: number
  }

  /**
   * trip_images upsert
   */
  export type trip_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the trip_images to update in case it exists.
     */
    where: trip_imagesWhereUniqueInput
    /**
     * In case the trip_images found by the `where` argument doesn't exist, create a new trip_images with this data.
     */
    create: XOR<trip_imagesCreateInput, trip_imagesUncheckedCreateInput>
    /**
     * In case the trip_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trip_imagesUpdateInput, trip_imagesUncheckedUpdateInput>
  }

  /**
   * trip_images delete
   */
  export type trip_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    /**
     * Filter which trip_images to delete.
     */
    where: trip_imagesWhereUniqueInput
  }

  /**
   * trip_images deleteMany
   */
  export type trip_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trip_images to delete
     */
    where?: trip_imagesWhereInput
    /**
     * Limit how many trip_images to delete.
     */
    limit?: number
  }

  /**
   * trip_images without action
   */
  export type trip_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
  }


  /**
   * Model trips
   */

  export type AggregateTrips = {
    _count: TripsCountAggregateOutputType | null
    _avg: TripsAvgAggregateOutputType | null
    _sum: TripsSumAggregateOutputType | null
    _min: TripsMinAggregateOutputType | null
    _max: TripsMaxAggregateOutputType | null
  }

  export type TripsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    duration: number | null
    rating: number | null
    countries_id: number | null
    travel_types_id: number | null
  }

  export type TripsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    duration: number | null
    rating: number | null
    countries_id: number | null
    travel_types_id: number | null
  }

  export type TripsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: Decimal | null
    duration: number | null
    rating: number | null
    created_at: Date | null
    countries_id: number | null
    travel_types_id: number | null
  }

  export type TripsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: Decimal | null
    duration: number | null
    rating: number | null
    created_at: Date | null
    countries_id: number | null
    travel_types_id: number | null
  }

  export type TripsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    duration: number
    rating: number
    created_at: number
    countries_id: number
    travel_types_id: number
    _all: number
  }


  export type TripsAvgAggregateInputType = {
    id?: true
    price?: true
    duration?: true
    rating?: true
    countries_id?: true
    travel_types_id?: true
  }

  export type TripsSumAggregateInputType = {
    id?: true
    price?: true
    duration?: true
    rating?: true
    countries_id?: true
    travel_types_id?: true
  }

  export type TripsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    duration?: true
    rating?: true
    created_at?: true
    countries_id?: true
    travel_types_id?: true
  }

  export type TripsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    duration?: true
    rating?: true
    created_at?: true
    countries_id?: true
    travel_types_id?: true
  }

  export type TripsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    duration?: true
    rating?: true
    created_at?: true
    countries_id?: true
    travel_types_id?: true
    _all?: true
  }

  export type TripsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trips to aggregate.
     */
    where?: tripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripsOrderByWithRelationInput | tripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trips
    **/
    _count?: true | TripsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripsMaxAggregateInputType
  }

  export type GetTripsAggregateType<T extends TripsAggregateArgs> = {
        [P in keyof T & keyof AggregateTrips]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrips[P]>
      : GetScalarType<T[P], AggregateTrips[P]>
  }




  export type tripsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripsWhereInput
    orderBy?: tripsOrderByWithAggregationInput | tripsOrderByWithAggregationInput[]
    by: TripsScalarFieldEnum[] | TripsScalarFieldEnum
    having?: tripsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripsCountAggregateInputType | true
    _avg?: TripsAvgAggregateInputType
    _sum?: TripsSumAggregateInputType
    _min?: TripsMinAggregateInputType
    _max?: TripsMaxAggregateInputType
  }

  export type TripsGroupByOutputType = {
    id: number
    title: string
    description: string
    price: Decimal
    duration: number
    rating: number | null
    created_at: Date
    countries_id: number | null
    travel_types_id: number | null
    _count: TripsCountAggregateOutputType | null
    _avg: TripsAvgAggregateOutputType | null
    _sum: TripsSumAggregateOutputType | null
    _min: TripsMinAggregateOutputType | null
    _max: TripsMaxAggregateOutputType | null
  }

  type GetTripsGroupByPayload<T extends tripsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripsGroupByOutputType[P]>
            : GetScalarType<T[P], TripsGroupByOutputType[P]>
        }
      >
    >


  export type tripsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    rating?: boolean
    created_at?: boolean
    countries_id?: boolean
    travel_types_id?: boolean
    bookings?: boolean | trips$bookingsArgs<ExtArgs>
    includes?: boolean | trips$includesArgs<ExtArgs>
    review?: boolean | trips$reviewArgs<ExtArgs>
    trip_dates?: boolean | trips$trip_datesArgs<ExtArgs>
    trip_images?: boolean | trips$trip_imagesArgs<ExtArgs>
    uses?: boolean | trips$usesArgs<ExtArgs>
    _count?: boolean | TripsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trips"]>



  export type tripsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    rating?: boolean
    created_at?: boolean
    countries_id?: boolean
    travel_types_id?: boolean
  }

  export type tripsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "duration" | "rating" | "created_at" | "countries_id" | "travel_types_id", ExtArgs["result"]["trips"]>
  export type tripsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | trips$bookingsArgs<ExtArgs>
    includes?: boolean | trips$includesArgs<ExtArgs>
    review?: boolean | trips$reviewArgs<ExtArgs>
    trip_dates?: boolean | trips$trip_datesArgs<ExtArgs>
    trip_images?: boolean | trips$trip_imagesArgs<ExtArgs>
    uses?: boolean | trips$usesArgs<ExtArgs>
    _count?: boolean | TripsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tripsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trips"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      includes: Prisma.$includesPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
      trip_dates: Prisma.$trip_datesPayload<ExtArgs>[]
      trip_images: Prisma.$trip_imagesPayload<ExtArgs>[]
      uses: Prisma.$usesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      price: Prisma.Decimal
      duration: number
      rating: number | null
      created_at: Date
      countries_id: number | null
      travel_types_id: number | null
    }, ExtArgs["result"]["trips"]>
    composites: {}
  }

  type tripsGetPayload<S extends boolean | null | undefined | tripsDefaultArgs> = $Result.GetResult<Prisma.$tripsPayload, S>

  type tripsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tripsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripsCountAggregateInputType | true
    }

  export interface tripsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trips'], meta: { name: 'trips' } }
    /**
     * Find zero or one Trips that matches the filter.
     * @param {tripsFindUniqueArgs} args - Arguments to find a Trips
     * @example
     * // Get one Trips
     * const trips = await prisma.trips.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tripsFindUniqueArgs>(args: SelectSubset<T, tripsFindUniqueArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trips that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tripsFindUniqueOrThrowArgs} args - Arguments to find a Trips
     * @example
     * // Get one Trips
     * const trips = await prisma.trips.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tripsFindUniqueOrThrowArgs>(args: SelectSubset<T, tripsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsFindFirstArgs} args - Arguments to find a Trips
     * @example
     * // Get one Trips
     * const trips = await prisma.trips.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tripsFindFirstArgs>(args?: SelectSubset<T, tripsFindFirstArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trips that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsFindFirstOrThrowArgs} args - Arguments to find a Trips
     * @example
     * // Get one Trips
     * const trips = await prisma.trips.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tripsFindFirstOrThrowArgs>(args?: SelectSubset<T, tripsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trips.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trips.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripsWithIdOnly = await prisma.trips.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tripsFindManyArgs>(args?: SelectSubset<T, tripsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trips.
     * @param {tripsCreateArgs} args - Arguments to create a Trips.
     * @example
     * // Create one Trips
     * const Trips = await prisma.trips.create({
     *   data: {
     *     // ... data to create a Trips
     *   }
     * })
     * 
     */
    create<T extends tripsCreateArgs>(args: SelectSubset<T, tripsCreateArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {tripsCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trips = await prisma.trips.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tripsCreateManyArgs>(args?: SelectSubset<T, tripsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trips.
     * @param {tripsDeleteArgs} args - Arguments to delete one Trips.
     * @example
     * // Delete one Trips
     * const Trips = await prisma.trips.delete({
     *   where: {
     *     // ... filter to delete one Trips
     *   }
     * })
     * 
     */
    delete<T extends tripsDeleteArgs>(args: SelectSubset<T, tripsDeleteArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trips.
     * @param {tripsUpdateArgs} args - Arguments to update one Trips.
     * @example
     * // Update one Trips
     * const trips = await prisma.trips.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tripsUpdateArgs>(args: SelectSubset<T, tripsUpdateArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {tripsDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trips.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tripsDeleteManyArgs>(args?: SelectSubset<T, tripsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trips = await prisma.trips.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tripsUpdateManyArgs>(args: SelectSubset<T, tripsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trips.
     * @param {tripsUpsertArgs} args - Arguments to update or create a Trips.
     * @example
     * // Update or create a Trips
     * const trips = await prisma.trips.upsert({
     *   create: {
     *     // ... data to create a Trips
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trips we want to update
     *   }
     * })
     */
    upsert<T extends tripsUpsertArgs>(args: SelectSubset<T, tripsUpsertArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trips.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends tripsCountArgs>(
      args?: Subset<T, tripsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripsAggregateArgs>(args: Subset<T, TripsAggregateArgs>): Prisma.PrismaPromise<GetTripsAggregateType<T>>

    /**
     * Group by Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsGroupByArgs} args - Group by arguments.
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
      T extends tripsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tripsGroupByArgs['orderBy'] }
        : { orderBy?: tripsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tripsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trips model
   */
  readonly fields: tripsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trips.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tripsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends trips$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, trips$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    includes<T extends trips$includesArgs<ExtArgs> = {}>(args?: Subset<T, trips$includesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$includesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends trips$reviewArgs<ExtArgs> = {}>(args?: Subset<T, trips$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trip_dates<T extends trips$trip_datesArgs<ExtArgs> = {}>(args?: Subset<T, trips$trip_datesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trip_datesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trip_images<T extends trips$trip_imagesArgs<ExtArgs> = {}>(args?: Subset<T, trips$trip_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trip_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uses<T extends trips$usesArgs<ExtArgs> = {}>(args?: Subset<T, trips$usesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the trips model
   */
  interface tripsFieldRefs {
    readonly id: FieldRef<"trips", 'Int'>
    readonly title: FieldRef<"trips", 'String'>
    readonly description: FieldRef<"trips", 'String'>
    readonly price: FieldRef<"trips", 'Decimal'>
    readonly duration: FieldRef<"trips", 'Int'>
    readonly rating: FieldRef<"trips", 'Int'>
    readonly created_at: FieldRef<"trips", 'DateTime'>
    readonly countries_id: FieldRef<"trips", 'Int'>
    readonly travel_types_id: FieldRef<"trips", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * trips findUnique
   */
  export type tripsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where: tripsWhereUniqueInput
  }

  /**
   * trips findUniqueOrThrow
   */
  export type tripsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where: tripsWhereUniqueInput
  }

  /**
   * trips findFirst
   */
  export type tripsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where?: tripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripsOrderByWithRelationInput | tripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripsScalarFieldEnum | TripsScalarFieldEnum[]
  }

  /**
   * trips findFirstOrThrow
   */
  export type tripsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where?: tripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripsOrderByWithRelationInput | tripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripsScalarFieldEnum | TripsScalarFieldEnum[]
  }

  /**
   * trips findMany
   */
  export type tripsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where?: tripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripsOrderByWithRelationInput | tripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trips.
     */
    cursor?: tripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripsScalarFieldEnum | TripsScalarFieldEnum[]
  }

  /**
   * trips create
   */
  export type tripsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * The data needed to create a trips.
     */
    data: XOR<tripsCreateInput, tripsUncheckedCreateInput>
  }

  /**
   * trips createMany
   */
  export type tripsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trips.
     */
    data: tripsCreateManyInput | tripsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trips update
   */
  export type tripsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * The data needed to update a trips.
     */
    data: XOR<tripsUpdateInput, tripsUncheckedUpdateInput>
    /**
     * Choose, which trips to update.
     */
    where: tripsWhereUniqueInput
  }

  /**
   * trips updateMany
   */
  export type tripsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trips.
     */
    data: XOR<tripsUpdateManyMutationInput, tripsUncheckedUpdateManyInput>
    /**
     * Filter which trips to update
     */
    where?: tripsWhereInput
    /**
     * Limit how many trips to update.
     */
    limit?: number
  }

  /**
   * trips upsert
   */
  export type tripsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * The filter to search for the trips to update in case it exists.
     */
    where: tripsWhereUniqueInput
    /**
     * In case the trips found by the `where` argument doesn't exist, create a new trips with this data.
     */
    create: XOR<tripsCreateInput, tripsUncheckedCreateInput>
    /**
     * In case the trips was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tripsUpdateInput, tripsUncheckedUpdateInput>
  }

  /**
   * trips delete
   */
  export type tripsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter which trips to delete.
     */
    where: tripsWhereUniqueInput
  }

  /**
   * trips deleteMany
   */
  export type tripsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trips to delete
     */
    where?: tripsWhereInput
    /**
     * Limit how many trips to delete.
     */
    limit?: number
  }

  /**
   * trips.bookings
   */
  export type trips$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * trips.includes
   */
  export type trips$includesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the includes
     */
    select?: includesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the includes
     */
    omit?: includesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: includesInclude<ExtArgs> | null
    where?: includesWhereInput
    orderBy?: includesOrderByWithRelationInput | includesOrderByWithRelationInput[]
    cursor?: includesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncludesScalarFieldEnum | IncludesScalarFieldEnum[]
  }

  /**
   * trips.review
   */
  export type trips$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * trips.trip_dates
   */
  export type trips$trip_datesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_dates
     */
    select?: trip_datesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_dates
     */
    omit?: trip_datesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_datesInclude<ExtArgs> | null
    where?: trip_datesWhereInput
    orderBy?: trip_datesOrderByWithRelationInput | trip_datesOrderByWithRelationInput[]
    cursor?: trip_datesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trip_datesScalarFieldEnum | Trip_datesScalarFieldEnum[]
  }

  /**
   * trips.trip_images
   */
  export type trips$trip_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip_images
     */
    select?: trip_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip_images
     */
    omit?: trip_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trip_imagesInclude<ExtArgs> | null
    where?: trip_imagesWhereInput
    orderBy?: trip_imagesOrderByWithRelationInput | trip_imagesOrderByWithRelationInput[]
    cursor?: trip_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trip_imagesScalarFieldEnum | Trip_imagesScalarFieldEnum[]
  }

  /**
   * trips.uses
   */
  export type trips$usesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    where?: usesWhereInput
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    cursor?: usesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * trips without action
   */
  export type tripsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    profile_image: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    profile_image: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    password: number
    profile_image: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password?: true
    profile_image?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password?: true
    profile_image?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password?: true
    profile_image?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image: string | null
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    profile_image?: boolean
    created_at?: boolean
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    review?: boolean | users$reviewArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    profile_image?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "phone" | "password" | "profile_image" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    review?: boolean | users$reviewArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      phone: string
      password: string
      profile_image: string | null
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends users$reviewArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly profile_image: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.bookings
   */
  export type users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * users.review
   */
  export type users$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    profile_image: string | null
    created_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    profile_image: string | null
    created_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    password: number
    profile_image: number
    created_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password?: true
    profile_image?: true
    created_at?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password?: true
    profile_image?: true
    created_at?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password?: true
    profile_image?: true
    created_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image: string | null
    created_at: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    profile_image?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    profile_image?: boolean
    created_at?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "phone" | "password" | "profile_image" | "created_at", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      phone: string
      password: string
      profile_image: string | null
      created_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly first_name: FieldRef<"admin", 'String'>
    readonly last_name: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly phone: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly profile_image: FieldRef<"admin", 'String'>
    readonly created_at: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model uses
   */

  export type AggregateUses = {
    _count: UsesCountAggregateOutputType | null
    _avg: UsesAvgAggregateOutputType | null
    _sum: UsesSumAggregateOutputType | null
    _min: UsesMinAggregateOutputType | null
    _max: UsesMaxAggregateOutputType | null
  }

  export type UsesAvgAggregateOutputType = {
    id: number | null
    trips_id: number | null
    flights_id: number | null
  }

  export type UsesSumAggregateOutputType = {
    id: number | null
    trips_id: number | null
    flights_id: number | null
  }

  export type UsesMinAggregateOutputType = {
    id: number | null
    trips_id: number | null
    flights_id: number | null
  }

  export type UsesMaxAggregateOutputType = {
    id: number | null
    trips_id: number | null
    flights_id: number | null
  }

  export type UsesCountAggregateOutputType = {
    id: number
    trips_id: number
    flights_id: number
    _all: number
  }


  export type UsesAvgAggregateInputType = {
    id?: true
    trips_id?: true
    flights_id?: true
  }

  export type UsesSumAggregateInputType = {
    id?: true
    trips_id?: true
    flights_id?: true
  }

  export type UsesMinAggregateInputType = {
    id?: true
    trips_id?: true
    flights_id?: true
  }

  export type UsesMaxAggregateInputType = {
    id?: true
    trips_id?: true
    flights_id?: true
  }

  export type UsesCountAggregateInputType = {
    id?: true
    trips_id?: true
    flights_id?: true
    _all?: true
  }

  export type UsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uses to aggregate.
     */
    where?: usesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uses to fetch.
     */
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned uses
    **/
    _count?: true | UsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsesMaxAggregateInputType
  }

  export type GetUsesAggregateType<T extends UsesAggregateArgs> = {
        [P in keyof T & keyof AggregateUses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUses[P]>
      : GetScalarType<T[P], AggregateUses[P]>
  }




  export type usesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usesWhereInput
    orderBy?: usesOrderByWithAggregationInput | usesOrderByWithAggregationInput[]
    by: UsesScalarFieldEnum[] | UsesScalarFieldEnum
    having?: usesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsesCountAggregateInputType | true
    _avg?: UsesAvgAggregateInputType
    _sum?: UsesSumAggregateInputType
    _min?: UsesMinAggregateInputType
    _max?: UsesMaxAggregateInputType
  }

  export type UsesGroupByOutputType = {
    id: number
    trips_id: number
    flights_id: number
    _count: UsesCountAggregateOutputType | null
    _avg: UsesAvgAggregateOutputType | null
    _sum: UsesSumAggregateOutputType | null
    _min: UsesMinAggregateOutputType | null
    _max: UsesMaxAggregateOutputType | null
  }

  type GetUsesGroupByPayload<T extends usesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsesGroupByOutputType[P]>
            : GetScalarType<T[P], UsesGroupByOutputType[P]>
        }
      >
    >


  export type usesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trips_id?: boolean
    flights_id?: boolean
    trips?: boolean | tripsDefaultArgs<ExtArgs>
    flights?: boolean | flightsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uses"]>



  export type usesSelectScalar = {
    id?: boolean
    trips_id?: boolean
    flights_id?: boolean
  }

  export type usesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trips_id" | "flights_id", ExtArgs["result"]["uses"]>
  export type usesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | tripsDefaultArgs<ExtArgs>
    flights?: boolean | flightsDefaultArgs<ExtArgs>
  }

  export type $usesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "uses"
    objects: {
      trips: Prisma.$tripsPayload<ExtArgs>
      flights: Prisma.$flightsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trips_id: number
      flights_id: number
    }, ExtArgs["result"]["uses"]>
    composites: {}
  }

  type usesGetPayload<S extends boolean | null | undefined | usesDefaultArgs> = $Result.GetResult<Prisma.$usesPayload, S>

  type usesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsesCountAggregateInputType | true
    }

  export interface usesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['uses'], meta: { name: 'uses' } }
    /**
     * Find zero or one Uses that matches the filter.
     * @param {usesFindUniqueArgs} args - Arguments to find a Uses
     * @example
     * // Get one Uses
     * const uses = await prisma.uses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usesFindUniqueArgs>(args: SelectSubset<T, usesFindUniqueArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Uses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usesFindUniqueOrThrowArgs} args - Arguments to find a Uses
     * @example
     * // Get one Uses
     * const uses = await prisma.uses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usesFindUniqueOrThrowArgs>(args: SelectSubset<T, usesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesFindFirstArgs} args - Arguments to find a Uses
     * @example
     * // Get one Uses
     * const uses = await prisma.uses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usesFindFirstArgs>(args?: SelectSubset<T, usesFindFirstArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesFindFirstOrThrowArgs} args - Arguments to find a Uses
     * @example
     * // Get one Uses
     * const uses = await prisma.uses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usesFindFirstOrThrowArgs>(args?: SelectSubset<T, usesFindFirstOrThrowArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Uses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uses
     * const uses = await prisma.uses.findMany()
     * 
     * // Get first 10 Uses
     * const uses = await prisma.uses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usesWithIdOnly = await prisma.uses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usesFindManyArgs>(args?: SelectSubset<T, usesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Uses.
     * @param {usesCreateArgs} args - Arguments to create a Uses.
     * @example
     * // Create one Uses
     * const Uses = await prisma.uses.create({
     *   data: {
     *     // ... data to create a Uses
     *   }
     * })
     * 
     */
    create<T extends usesCreateArgs>(args: SelectSubset<T, usesCreateArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Uses.
     * @param {usesCreateManyArgs} args - Arguments to create many Uses.
     * @example
     * // Create many Uses
     * const uses = await prisma.uses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usesCreateManyArgs>(args?: SelectSubset<T, usesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Uses.
     * @param {usesDeleteArgs} args - Arguments to delete one Uses.
     * @example
     * // Delete one Uses
     * const Uses = await prisma.uses.delete({
     *   where: {
     *     // ... filter to delete one Uses
     *   }
     * })
     * 
     */
    delete<T extends usesDeleteArgs>(args: SelectSubset<T, usesDeleteArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Uses.
     * @param {usesUpdateArgs} args - Arguments to update one Uses.
     * @example
     * // Update one Uses
     * const uses = await prisma.uses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usesUpdateArgs>(args: SelectSubset<T, usesUpdateArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Uses.
     * @param {usesDeleteManyArgs} args - Arguments to filter Uses to delete.
     * @example
     * // Delete a few Uses
     * const { count } = await prisma.uses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usesDeleteManyArgs>(args?: SelectSubset<T, usesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uses
     * const uses = await prisma.uses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usesUpdateManyArgs>(args: SelectSubset<T, usesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Uses.
     * @param {usesUpsertArgs} args - Arguments to update or create a Uses.
     * @example
     * // Update or create a Uses
     * const uses = await prisma.uses.upsert({
     *   create: {
     *     // ... data to create a Uses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Uses we want to update
     *   }
     * })
     */
    upsert<T extends usesUpsertArgs>(args: SelectSubset<T, usesUpsertArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesCountArgs} args - Arguments to filter Uses to count.
     * @example
     * // Count the number of Uses
     * const count = await prisma.uses.count({
     *   where: {
     *     // ... the filter for the Uses we want to count
     *   }
     * })
    **/
    count<T extends usesCountArgs>(
      args?: Subset<T, usesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsesAggregateArgs>(args: Subset<T, UsesAggregateArgs>): Prisma.PrismaPromise<GetUsesAggregateType<T>>

    /**
     * Group by Uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesGroupByArgs} args - Group by arguments.
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
      T extends usesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usesGroupByArgs['orderBy'] }
        : { orderBy?: usesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the uses model
   */
  readonly fields: usesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for uses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends tripsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tripsDefaultArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flights<T extends flightsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, flightsDefaultArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the uses model
   */
  interface usesFieldRefs {
    readonly id: FieldRef<"uses", 'Int'>
    readonly trips_id: FieldRef<"uses", 'Int'>
    readonly flights_id: FieldRef<"uses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * uses findUnique
   */
  export type usesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where: usesWhereUniqueInput
  }

  /**
   * uses findUniqueOrThrow
   */
  export type usesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where: usesWhereUniqueInput
  }

  /**
   * uses findFirst
   */
  export type usesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where?: usesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uses to fetch.
     */
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uses.
     */
    cursor?: usesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uses.
     */
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * uses findFirstOrThrow
   */
  export type usesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where?: usesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uses to fetch.
     */
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uses.
     */
    cursor?: usesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uses.
     */
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * uses findMany
   */
  export type usesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where?: usesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uses to fetch.
     */
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing uses.
     */
    cursor?: usesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uses.
     */
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * uses create
   */
  export type usesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * The data needed to create a uses.
     */
    data: XOR<usesCreateInput, usesUncheckedCreateInput>
  }

  /**
   * uses createMany
   */
  export type usesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many uses.
     */
    data: usesCreateManyInput | usesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * uses update
   */
  export type usesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * The data needed to update a uses.
     */
    data: XOR<usesUpdateInput, usesUncheckedUpdateInput>
    /**
     * Choose, which uses to update.
     */
    where: usesWhereUniqueInput
  }

  /**
   * uses updateMany
   */
  export type usesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update uses.
     */
    data: XOR<usesUpdateManyMutationInput, usesUncheckedUpdateManyInput>
    /**
     * Filter which uses to update
     */
    where?: usesWhereInput
    /**
     * Limit how many uses to update.
     */
    limit?: number
  }

  /**
   * uses upsert
   */
  export type usesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * The filter to search for the uses to update in case it exists.
     */
    where: usesWhereUniqueInput
    /**
     * In case the uses found by the `where` argument doesn't exist, create a new uses with this data.
     */
    create: XOR<usesCreateInput, usesUncheckedCreateInput>
    /**
     * In case the uses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usesUpdateInput, usesUncheckedUpdateInput>
  }

  /**
   * uses delete
   */
  export type usesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter which uses to delete.
     */
    where: usesWhereUniqueInput
  }

  /**
   * uses deleteMany
   */
  export type usesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uses to delete
     */
    where?: usesWhereInput
    /**
     * Limit how many uses to delete.
     */
    limit?: number
  }

  /**
   * uses without action
   */
  export type usesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
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


  export const BookingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    trips_id: 'trips_id',
    travel_date: 'travel_date',
    travelers_count: 'travelers_count',
    total_price: 'total_price',
    status: 'status',
    created_at: 'created_at'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const Contact_messagesScalarFieldEnum: {
    id: 'id',
    message_name: 'message_name',
    email: 'email',
    subject: 'subject',
    created_at: 'created_at'
  };

  export type Contact_messagesScalarFieldEnum = (typeof Contact_messagesScalarFieldEnum)[keyof typeof Contact_messagesScalarFieldEnum]


  export const CountriesScalarFieldEnum: {
    id: 'id',
    cname: 'cname',
    cimage: 'cimage'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


  export const FlightsScalarFieldEnum: {
    id: 'id',
    airline: 'airline',
    duration: 'duration'
  };

  export type FlightsScalarFieldEnum = (typeof FlightsScalarFieldEnum)[keyof typeof FlightsScalarFieldEnum]


  export const HotelsScalarFieldEnum: {
    id: 'id',
    hotel_name: 'hotel_name',
    stars: 'stars'
  };

  export type HotelsScalarFieldEnum = (typeof HotelsScalarFieldEnum)[keyof typeof HotelsScalarFieldEnum]


  export const IncludesScalarFieldEnum: {
    id: 'id',
    trips_id: 'trips_id',
    hotels_id: 'hotels_id'
  };

  export type IncludesScalarFieldEnum = (typeof IncludesScalarFieldEnum)[keyof typeof IncludesScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    bookings_id: 'bookings_id',
    amount: 'amount',
    payment_method: 'payment_method',
    payment_status: 'payment_status',
    created_at: 'created_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    trips_id: 'trips_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const Travel_typesScalarFieldEnum: {
    id: 'id',
    tname: 'tname'
  };

  export type Travel_typesScalarFieldEnum = (typeof Travel_typesScalarFieldEnum)[keyof typeof Travel_typesScalarFieldEnum]


  export const Trip_datesScalarFieldEnum: {
    id: 'id',
    trips_id: 'trips_id',
    available_date: 'available_date'
  };

  export type Trip_datesScalarFieldEnum = (typeof Trip_datesScalarFieldEnum)[keyof typeof Trip_datesScalarFieldEnum]


  export const Trip_imagesScalarFieldEnum: {
    id: 'id',
    trips_id: 'trips_id',
    image_url: 'image_url'
  };

  export type Trip_imagesScalarFieldEnum = (typeof Trip_imagesScalarFieldEnum)[keyof typeof Trip_imagesScalarFieldEnum]


  export const TripsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    duration: 'duration',
    rating: 'rating',
    created_at: 'created_at',
    countries_id: 'countries_id',
    travel_types_id: 'travel_types_id'
  };

  export type TripsScalarFieldEnum = (typeof TripsScalarFieldEnum)[keyof typeof TripsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    profile_image: 'profile_image',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    profile_image: 'profile_image',
    created_at: 'created_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UsesScalarFieldEnum: {
    id: 'id',
    trips_id: 'trips_id',
    flights_id: 'flights_id'
  };

  export type UsesScalarFieldEnum = (typeof UsesScalarFieldEnum)[keyof typeof UsesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const bookingsOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type bookingsOrderByRelevanceFieldEnum = (typeof bookingsOrderByRelevanceFieldEnum)[keyof typeof bookingsOrderByRelevanceFieldEnum]


  export const contact_messagesOrderByRelevanceFieldEnum: {
    message_name: 'message_name',
    email: 'email',
    subject: 'subject'
  };

  export type contact_messagesOrderByRelevanceFieldEnum = (typeof contact_messagesOrderByRelevanceFieldEnum)[keyof typeof contact_messagesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const countriesOrderByRelevanceFieldEnum: {
    cname: 'cname',
    cimage: 'cimage'
  };

  export type countriesOrderByRelevanceFieldEnum = (typeof countriesOrderByRelevanceFieldEnum)[keyof typeof countriesOrderByRelevanceFieldEnum]


  export const flightsOrderByRelevanceFieldEnum: {
    airline: 'airline'
  };

  export type flightsOrderByRelevanceFieldEnum = (typeof flightsOrderByRelevanceFieldEnum)[keyof typeof flightsOrderByRelevanceFieldEnum]


  export const hotelsOrderByRelevanceFieldEnum: {
    hotel_name: 'hotel_name'
  };

  export type hotelsOrderByRelevanceFieldEnum = (typeof hotelsOrderByRelevanceFieldEnum)[keyof typeof hotelsOrderByRelevanceFieldEnum]


  export const paymentsOrderByRelevanceFieldEnum: {
    payment_method: 'payment_method',
    payment_status: 'payment_status'
  };

  export type paymentsOrderByRelevanceFieldEnum = (typeof paymentsOrderByRelevanceFieldEnum)[keyof typeof paymentsOrderByRelevanceFieldEnum]


  export const reviewOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type reviewOrderByRelevanceFieldEnum = (typeof reviewOrderByRelevanceFieldEnum)[keyof typeof reviewOrderByRelevanceFieldEnum]


  export const travel_typesOrderByRelevanceFieldEnum: {
    tname: 'tname'
  };

  export type travel_typesOrderByRelevanceFieldEnum = (typeof travel_typesOrderByRelevanceFieldEnum)[keyof typeof travel_typesOrderByRelevanceFieldEnum]


  export const trip_imagesOrderByRelevanceFieldEnum: {
    image_url: 'image_url'
  };

  export type trip_imagesOrderByRelevanceFieldEnum = (typeof trip_imagesOrderByRelevanceFieldEnum)[keyof typeof trip_imagesOrderByRelevanceFieldEnum]


  export const tripsOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type tripsOrderByRelevanceFieldEnum = (typeof tripsOrderByRelevanceFieldEnum)[keyof typeof tripsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    profile_image: 'profile_image'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const adminOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    profile_image: 'profile_image'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id?: IntFilter<"bookings"> | number
    user_id?: IntFilter<"bookings"> | number
    trips_id?: IntFilter<"bookings"> | number
    travel_date?: DateTimeFilter<"bookings"> | Date | string
    travelers_count?: IntFilter<"bookings"> | number
    total_price?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"bookings"> | string
    created_at?: DateTimeFilter<"bookings"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
    payments?: PaymentsListRelationFilter
  }

  export type bookingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    travel_date?: SortOrder
    travelers_count?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
    trips?: tripsOrderByWithRelationInput
    payments?: paymentsOrderByRelationAggregateInput
    _relevance?: bookingsOrderByRelevanceInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    user_id?: IntFilter<"bookings"> | number
    trips_id?: IntFilter<"bookings"> | number
    travel_date?: DateTimeFilter<"bookings"> | Date | string
    travelers_count?: IntFilter<"bookings"> | number
    total_price?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"bookings"> | string
    created_at?: DateTimeFilter<"bookings"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
    payments?: PaymentsListRelationFilter
  }, "id">

  export type bookingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    travel_date?: SortOrder
    travelers_count?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _avg?: bookingsAvgOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
    _sum?: bookingsSumOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bookings"> | number
    user_id?: IntWithAggregatesFilter<"bookings"> | number
    trips_id?: IntWithAggregatesFilter<"bookings"> | number
    travel_date?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    travelers_count?: IntWithAggregatesFilter<"bookings"> | number
    total_price?: DecimalWithAggregatesFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"bookings"> | string
    created_at?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
  }

  export type contact_messagesWhereInput = {
    AND?: contact_messagesWhereInput | contact_messagesWhereInput[]
    OR?: contact_messagesWhereInput[]
    NOT?: contact_messagesWhereInput | contact_messagesWhereInput[]
    id?: IntFilter<"contact_messages"> | number
    message_name?: StringFilter<"contact_messages"> | string
    email?: StringFilter<"contact_messages"> | string
    subject?: StringFilter<"contact_messages"> | string
    created_at?: DateTimeFilter<"contact_messages"> | Date | string
  }

  export type contact_messagesOrderByWithRelationInput = {
    id?: SortOrder
    message_name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    created_at?: SortOrder
    _relevance?: contact_messagesOrderByRelevanceInput
  }

  export type contact_messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contact_messagesWhereInput | contact_messagesWhereInput[]
    OR?: contact_messagesWhereInput[]
    NOT?: contact_messagesWhereInput | contact_messagesWhereInput[]
    message_name?: StringFilter<"contact_messages"> | string
    email?: StringFilter<"contact_messages"> | string
    subject?: StringFilter<"contact_messages"> | string
    created_at?: DateTimeFilter<"contact_messages"> | Date | string
  }, "id">

  export type contact_messagesOrderByWithAggregationInput = {
    id?: SortOrder
    message_name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    created_at?: SortOrder
    _count?: contact_messagesCountOrderByAggregateInput
    _avg?: contact_messagesAvgOrderByAggregateInput
    _max?: contact_messagesMaxOrderByAggregateInput
    _min?: contact_messagesMinOrderByAggregateInput
    _sum?: contact_messagesSumOrderByAggregateInput
  }

  export type contact_messagesScalarWhereWithAggregatesInput = {
    AND?: contact_messagesScalarWhereWithAggregatesInput | contact_messagesScalarWhereWithAggregatesInput[]
    OR?: contact_messagesScalarWhereWithAggregatesInput[]
    NOT?: contact_messagesScalarWhereWithAggregatesInput | contact_messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contact_messages"> | number
    message_name?: StringWithAggregatesFilter<"contact_messages"> | string
    email?: StringWithAggregatesFilter<"contact_messages"> | string
    subject?: StringWithAggregatesFilter<"contact_messages"> | string
    created_at?: DateTimeWithAggregatesFilter<"contact_messages"> | Date | string
  }

  export type countriesWhereInput = {
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    id?: IntFilter<"countries"> | number
    cname?: StringFilter<"countries"> | string
    cimage?: StringNullableFilter<"countries"> | string | null
  }

  export type countriesOrderByWithRelationInput = {
    id?: SortOrder
    cname?: SortOrder
    cimage?: SortOrderInput | SortOrder
    _relevance?: countriesOrderByRelevanceInput
  }

  export type countriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cname?: string
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    cimage?: StringNullableFilter<"countries"> | string | null
  }, "id" | "cname">

  export type countriesOrderByWithAggregationInput = {
    id?: SortOrder
    cname?: SortOrder
    cimage?: SortOrderInput | SortOrder
    _count?: countriesCountOrderByAggregateInput
    _avg?: countriesAvgOrderByAggregateInput
    _max?: countriesMaxOrderByAggregateInput
    _min?: countriesMinOrderByAggregateInput
    _sum?: countriesSumOrderByAggregateInput
  }

  export type countriesScalarWhereWithAggregatesInput = {
    AND?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    OR?: countriesScalarWhereWithAggregatesInput[]
    NOT?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"countries"> | number
    cname?: StringWithAggregatesFilter<"countries"> | string
    cimage?: StringNullableWithAggregatesFilter<"countries"> | string | null
  }

  export type flightsWhereInput = {
    AND?: flightsWhereInput | flightsWhereInput[]
    OR?: flightsWhereInput[]
    NOT?: flightsWhereInput | flightsWhereInput[]
    id?: IntFilter<"flights"> | number
    airline?: StringFilter<"flights"> | string
    duration?: IntFilter<"flights"> | number
    uses?: UsesListRelationFilter
  }

  export type flightsOrderByWithRelationInput = {
    id?: SortOrder
    airline?: SortOrder
    duration?: SortOrder
    uses?: usesOrderByRelationAggregateInput
    _relevance?: flightsOrderByRelevanceInput
  }

  export type flightsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: flightsWhereInput | flightsWhereInput[]
    OR?: flightsWhereInput[]
    NOT?: flightsWhereInput | flightsWhereInput[]
    airline?: StringFilter<"flights"> | string
    duration?: IntFilter<"flights"> | number
    uses?: UsesListRelationFilter
  }, "id">

  export type flightsOrderByWithAggregationInput = {
    id?: SortOrder
    airline?: SortOrder
    duration?: SortOrder
    _count?: flightsCountOrderByAggregateInput
    _avg?: flightsAvgOrderByAggregateInput
    _max?: flightsMaxOrderByAggregateInput
    _min?: flightsMinOrderByAggregateInput
    _sum?: flightsSumOrderByAggregateInput
  }

  export type flightsScalarWhereWithAggregatesInput = {
    AND?: flightsScalarWhereWithAggregatesInput | flightsScalarWhereWithAggregatesInput[]
    OR?: flightsScalarWhereWithAggregatesInput[]
    NOT?: flightsScalarWhereWithAggregatesInput | flightsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"flights"> | number
    airline?: StringWithAggregatesFilter<"flights"> | string
    duration?: IntWithAggregatesFilter<"flights"> | number
  }

  export type hotelsWhereInput = {
    AND?: hotelsWhereInput | hotelsWhereInput[]
    OR?: hotelsWhereInput[]
    NOT?: hotelsWhereInput | hotelsWhereInput[]
    id?: IntFilter<"hotels"> | number
    hotel_name?: StringFilter<"hotels"> | string
    stars?: IntFilter<"hotels"> | number
    includes?: IncludesListRelationFilter
  }

  export type hotelsOrderByWithRelationInput = {
    id?: SortOrder
    hotel_name?: SortOrder
    stars?: SortOrder
    includes?: includesOrderByRelationAggregateInput
    _relevance?: hotelsOrderByRelevanceInput
  }

  export type hotelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hotelsWhereInput | hotelsWhereInput[]
    OR?: hotelsWhereInput[]
    NOT?: hotelsWhereInput | hotelsWhereInput[]
    hotel_name?: StringFilter<"hotels"> | string
    stars?: IntFilter<"hotels"> | number
    includes?: IncludesListRelationFilter
  }, "id">

  export type hotelsOrderByWithAggregationInput = {
    id?: SortOrder
    hotel_name?: SortOrder
    stars?: SortOrder
    _count?: hotelsCountOrderByAggregateInput
    _avg?: hotelsAvgOrderByAggregateInput
    _max?: hotelsMaxOrderByAggregateInput
    _min?: hotelsMinOrderByAggregateInput
    _sum?: hotelsSumOrderByAggregateInput
  }

  export type hotelsScalarWhereWithAggregatesInput = {
    AND?: hotelsScalarWhereWithAggregatesInput | hotelsScalarWhereWithAggregatesInput[]
    OR?: hotelsScalarWhereWithAggregatesInput[]
    NOT?: hotelsScalarWhereWithAggregatesInput | hotelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hotels"> | number
    hotel_name?: StringWithAggregatesFilter<"hotels"> | string
    stars?: IntWithAggregatesFilter<"hotels"> | number
  }

  export type includesWhereInput = {
    AND?: includesWhereInput | includesWhereInput[]
    OR?: includesWhereInput[]
    NOT?: includesWhereInput | includesWhereInput[]
    id?: IntFilter<"includes"> | number
    trips_id?: IntFilter<"includes"> | number
    hotels_id?: IntFilter<"includes"> | number
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
    hotels?: XOR<HotelsScalarRelationFilter, hotelsWhereInput>
  }

  export type includesOrderByWithRelationInput = {
    id?: SortOrder
    trips_id?: SortOrder
    hotels_id?: SortOrder
    trips?: tripsOrderByWithRelationInput
    hotels?: hotelsOrderByWithRelationInput
  }

  export type includesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: includesWhereInput | includesWhereInput[]
    OR?: includesWhereInput[]
    NOT?: includesWhereInput | includesWhereInput[]
    trips_id?: IntFilter<"includes"> | number
    hotels_id?: IntFilter<"includes"> | number
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
    hotels?: XOR<HotelsScalarRelationFilter, hotelsWhereInput>
  }, "id">

  export type includesOrderByWithAggregationInput = {
    id?: SortOrder
    trips_id?: SortOrder
    hotels_id?: SortOrder
    _count?: includesCountOrderByAggregateInput
    _avg?: includesAvgOrderByAggregateInput
    _max?: includesMaxOrderByAggregateInput
    _min?: includesMinOrderByAggregateInput
    _sum?: includesSumOrderByAggregateInput
  }

  export type includesScalarWhereWithAggregatesInput = {
    AND?: includesScalarWhereWithAggregatesInput | includesScalarWhereWithAggregatesInput[]
    OR?: includesScalarWhereWithAggregatesInput[]
    NOT?: includesScalarWhereWithAggregatesInput | includesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"includes"> | number
    trips_id?: IntWithAggregatesFilter<"includes"> | number
    hotels_id?: IntWithAggregatesFilter<"includes"> | number
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    bookings_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"payments"> | string
    payment_status?: StringFilter<"payments"> | string
    created_at?: DateTimeFilter<"payments"> | Date | string
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    bookings_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    bookings?: bookingsOrderByWithRelationInput
    _relevance?: paymentsOrderByRelevanceInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    bookings_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"payments"> | string
    payment_status?: StringFilter<"payments"> | string
    created_at?: DateTimeFilter<"payments"> | Date | string
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    bookings_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    bookings_id?: IntWithAggregatesFilter<"payments"> | number
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringWithAggregatesFilter<"payments"> | string
    payment_status?: StringWithAggregatesFilter<"payments"> | string
    created_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    id?: IntFilter<"review"> | number
    user_id?: IntFilter<"review"> | number
    trips_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeFilter<"review"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
    trips?: tripsOrderByWithRelationInput
    _relevance?: reviewOrderByRelevanceInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    user_id?: IntFilter<"review"> | number
    trips_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeFilter<"review"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
  }, "id">

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"review"> | number
    user_id?: IntWithAggregatesFilter<"review"> | number
    trips_id?: IntWithAggregatesFilter<"review"> | number
    rating?: IntWithAggregatesFilter<"review"> | number
    comment?: StringNullableWithAggregatesFilter<"review"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"review"> | Date | string
  }

  export type travel_typesWhereInput = {
    AND?: travel_typesWhereInput | travel_typesWhereInput[]
    OR?: travel_typesWhereInput[]
    NOT?: travel_typesWhereInput | travel_typesWhereInput[]
    id?: IntFilter<"travel_types"> | number
    tname?: StringFilter<"travel_types"> | string
  }

  export type travel_typesOrderByWithRelationInput = {
    id?: SortOrder
    tname?: SortOrder
    _relevance?: travel_typesOrderByRelevanceInput
  }

  export type travel_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tname?: string
    AND?: travel_typesWhereInput | travel_typesWhereInput[]
    OR?: travel_typesWhereInput[]
    NOT?: travel_typesWhereInput | travel_typesWhereInput[]
  }, "id" | "tname">

  export type travel_typesOrderByWithAggregationInput = {
    id?: SortOrder
    tname?: SortOrder
    _count?: travel_typesCountOrderByAggregateInput
    _avg?: travel_typesAvgOrderByAggregateInput
    _max?: travel_typesMaxOrderByAggregateInput
    _min?: travel_typesMinOrderByAggregateInput
    _sum?: travel_typesSumOrderByAggregateInput
  }

  export type travel_typesScalarWhereWithAggregatesInput = {
    AND?: travel_typesScalarWhereWithAggregatesInput | travel_typesScalarWhereWithAggregatesInput[]
    OR?: travel_typesScalarWhereWithAggregatesInput[]
    NOT?: travel_typesScalarWhereWithAggregatesInput | travel_typesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"travel_types"> | number
    tname?: StringWithAggregatesFilter<"travel_types"> | string
  }

  export type trip_datesWhereInput = {
    AND?: trip_datesWhereInput | trip_datesWhereInput[]
    OR?: trip_datesWhereInput[]
    NOT?: trip_datesWhereInput | trip_datesWhereInput[]
    id?: IntFilter<"trip_dates"> | number
    trips_id?: IntFilter<"trip_dates"> | number
    available_date?: DateTimeFilter<"trip_dates"> | Date | string
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
  }

  export type trip_datesOrderByWithRelationInput = {
    id?: SortOrder
    trips_id?: SortOrder
    available_date?: SortOrder
    trips?: tripsOrderByWithRelationInput
  }

  export type trip_datesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: trip_datesWhereInput | trip_datesWhereInput[]
    OR?: trip_datesWhereInput[]
    NOT?: trip_datesWhereInput | trip_datesWhereInput[]
    trips_id?: IntFilter<"trip_dates"> | number
    available_date?: DateTimeFilter<"trip_dates"> | Date | string
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
  }, "id">

  export type trip_datesOrderByWithAggregationInput = {
    id?: SortOrder
    trips_id?: SortOrder
    available_date?: SortOrder
    _count?: trip_datesCountOrderByAggregateInput
    _avg?: trip_datesAvgOrderByAggregateInput
    _max?: trip_datesMaxOrderByAggregateInput
    _min?: trip_datesMinOrderByAggregateInput
    _sum?: trip_datesSumOrderByAggregateInput
  }

  export type trip_datesScalarWhereWithAggregatesInput = {
    AND?: trip_datesScalarWhereWithAggregatesInput | trip_datesScalarWhereWithAggregatesInput[]
    OR?: trip_datesScalarWhereWithAggregatesInput[]
    NOT?: trip_datesScalarWhereWithAggregatesInput | trip_datesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"trip_dates"> | number
    trips_id?: IntWithAggregatesFilter<"trip_dates"> | number
    available_date?: DateTimeWithAggregatesFilter<"trip_dates"> | Date | string
  }

  export type trip_imagesWhereInput = {
    AND?: trip_imagesWhereInput | trip_imagesWhereInput[]
    OR?: trip_imagesWhereInput[]
    NOT?: trip_imagesWhereInput | trip_imagesWhereInput[]
    id?: IntFilter<"trip_images"> | number
    trips_id?: IntFilter<"trip_images"> | number
    image_url?: StringFilter<"trip_images"> | string
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
  }

  export type trip_imagesOrderByWithRelationInput = {
    id?: SortOrder
    trips_id?: SortOrder
    image_url?: SortOrder
    trips?: tripsOrderByWithRelationInput
    _relevance?: trip_imagesOrderByRelevanceInput
  }

  export type trip_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: trip_imagesWhereInput | trip_imagesWhereInput[]
    OR?: trip_imagesWhereInput[]
    NOT?: trip_imagesWhereInput | trip_imagesWhereInput[]
    trips_id?: IntFilter<"trip_images"> | number
    image_url?: StringFilter<"trip_images"> | string
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
  }, "id">

  export type trip_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    trips_id?: SortOrder
    image_url?: SortOrder
    _count?: trip_imagesCountOrderByAggregateInput
    _avg?: trip_imagesAvgOrderByAggregateInput
    _max?: trip_imagesMaxOrderByAggregateInput
    _min?: trip_imagesMinOrderByAggregateInput
    _sum?: trip_imagesSumOrderByAggregateInput
  }

  export type trip_imagesScalarWhereWithAggregatesInput = {
    AND?: trip_imagesScalarWhereWithAggregatesInput | trip_imagesScalarWhereWithAggregatesInput[]
    OR?: trip_imagesScalarWhereWithAggregatesInput[]
    NOT?: trip_imagesScalarWhereWithAggregatesInput | trip_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"trip_images"> | number
    trips_id?: IntWithAggregatesFilter<"trip_images"> | number
    image_url?: StringWithAggregatesFilter<"trip_images"> | string
  }

  export type tripsWhereInput = {
    AND?: tripsWhereInput | tripsWhereInput[]
    OR?: tripsWhereInput[]
    NOT?: tripsWhereInput | tripsWhereInput[]
    id?: IntFilter<"trips"> | number
    title?: StringFilter<"trips"> | string
    description?: StringFilter<"trips"> | string
    price?: DecimalFilter<"trips"> | Decimal | DecimalJsLike | number | string
    duration?: IntFilter<"trips"> | number
    rating?: IntNullableFilter<"trips"> | number | null
    created_at?: DateTimeFilter<"trips"> | Date | string
    countries_id?: IntNullableFilter<"trips"> | number | null
    travel_types_id?: IntNullableFilter<"trips"> | number | null
    bookings?: BookingsListRelationFilter
    includes?: IncludesListRelationFilter
    review?: ReviewListRelationFilter
    trip_dates?: Trip_datesListRelationFilter
    trip_images?: Trip_imagesListRelationFilter
    uses?: UsesListRelationFilter
  }

  export type tripsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    rating?: SortOrderInput | SortOrder
    created_at?: SortOrder
    countries_id?: SortOrderInput | SortOrder
    travel_types_id?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    includes?: includesOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
    trip_dates?: trip_datesOrderByRelationAggregateInput
    trip_images?: trip_imagesOrderByRelationAggregateInput
    uses?: usesOrderByRelationAggregateInput
    _relevance?: tripsOrderByRelevanceInput
  }

  export type tripsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tripsWhereInput | tripsWhereInput[]
    OR?: tripsWhereInput[]
    NOT?: tripsWhereInput | tripsWhereInput[]
    title?: StringFilter<"trips"> | string
    description?: StringFilter<"trips"> | string
    price?: DecimalFilter<"trips"> | Decimal | DecimalJsLike | number | string
    duration?: IntFilter<"trips"> | number
    rating?: IntNullableFilter<"trips"> | number | null
    created_at?: DateTimeFilter<"trips"> | Date | string
    countries_id?: IntNullableFilter<"trips"> | number | null
    travel_types_id?: IntNullableFilter<"trips"> | number | null
    bookings?: BookingsListRelationFilter
    includes?: IncludesListRelationFilter
    review?: ReviewListRelationFilter
    trip_dates?: Trip_datesListRelationFilter
    trip_images?: Trip_imagesListRelationFilter
    uses?: UsesListRelationFilter
  }, "id">

  export type tripsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    rating?: SortOrderInput | SortOrder
    created_at?: SortOrder
    countries_id?: SortOrderInput | SortOrder
    travel_types_id?: SortOrderInput | SortOrder
    _count?: tripsCountOrderByAggregateInput
    _avg?: tripsAvgOrderByAggregateInput
    _max?: tripsMaxOrderByAggregateInput
    _min?: tripsMinOrderByAggregateInput
    _sum?: tripsSumOrderByAggregateInput
  }

  export type tripsScalarWhereWithAggregatesInput = {
    AND?: tripsScalarWhereWithAggregatesInput | tripsScalarWhereWithAggregatesInput[]
    OR?: tripsScalarWhereWithAggregatesInput[]
    NOT?: tripsScalarWhereWithAggregatesInput | tripsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"trips"> | number
    title?: StringWithAggregatesFilter<"trips"> | string
    description?: StringWithAggregatesFilter<"trips"> | string
    price?: DecimalWithAggregatesFilter<"trips"> | Decimal | DecimalJsLike | number | string
    duration?: IntWithAggregatesFilter<"trips"> | number
    rating?: IntNullableWithAggregatesFilter<"trips"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"trips"> | Date | string
    countries_id?: IntNullableWithAggregatesFilter<"trips"> | number | null
    travel_types_id?: IntNullableWithAggregatesFilter<"trips"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    profile_image?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    bookings?: BookingsListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    profile_image?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    bookings?: BookingsListRelationFilter
    review?: ReviewListRelationFilter
  }, "id" | "email" | "phone">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    profile_image?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    first_name?: StringFilter<"admin"> | string
    last_name?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    phone?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    profile_image?: StringNullableFilter<"admin"> | string | null
    created_at?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    first_name?: StringFilter<"admin"> | string
    last_name?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    profile_image?: StringNullableFilter<"admin"> | string | null
    created_at?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "email" | "phone">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    first_name?: StringWithAggregatesFilter<"admin"> | string
    last_name?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    phone?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    profile_image?: StringNullableWithAggregatesFilter<"admin"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type usesWhereInput = {
    AND?: usesWhereInput | usesWhereInput[]
    OR?: usesWhereInput[]
    NOT?: usesWhereInput | usesWhereInput[]
    id?: IntFilter<"uses"> | number
    trips_id?: IntFilter<"uses"> | number
    flights_id?: IntFilter<"uses"> | number
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
    flights?: XOR<FlightsScalarRelationFilter, flightsWhereInput>
  }

  export type usesOrderByWithRelationInput = {
    id?: SortOrder
    trips_id?: SortOrder
    flights_id?: SortOrder
    trips?: tripsOrderByWithRelationInput
    flights?: flightsOrderByWithRelationInput
  }

  export type usesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usesWhereInput | usesWhereInput[]
    OR?: usesWhereInput[]
    NOT?: usesWhereInput | usesWhereInput[]
    trips_id?: IntFilter<"uses"> | number
    flights_id?: IntFilter<"uses"> | number
    trips?: XOR<TripsScalarRelationFilter, tripsWhereInput>
    flights?: XOR<FlightsScalarRelationFilter, flightsWhereInput>
  }, "id">

  export type usesOrderByWithAggregationInput = {
    id?: SortOrder
    trips_id?: SortOrder
    flights_id?: SortOrder
    _count?: usesCountOrderByAggregateInput
    _avg?: usesAvgOrderByAggregateInput
    _max?: usesMaxOrderByAggregateInput
    _min?: usesMinOrderByAggregateInput
    _sum?: usesSumOrderByAggregateInput
  }

  export type usesScalarWhereWithAggregatesInput = {
    AND?: usesScalarWhereWithAggregatesInput | usesScalarWhereWithAggregatesInput[]
    OR?: usesScalarWhereWithAggregatesInput[]
    NOT?: usesScalarWhereWithAggregatesInput | usesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"uses"> | number
    trips_id?: IntWithAggregatesFilter<"uses"> | number
    flights_id?: IntWithAggregatesFilter<"uses"> | number
  }

  export type bookingsCreateInput = {
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
    users: usersCreateNestedOneWithoutBookingsInput
    trips: tripsCreateNestedOneWithoutBookingsInput
    payments?: paymentsCreateNestedManyWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    id?: number
    user_id: number
    trips_id: number
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutBookingsInput
  }

  export type bookingsUpdateInput = {
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
    trips?: tripsUpdateOneRequiredWithoutBookingsNestedInput
    payments?: paymentsUpdateManyWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutBookingsNestedInput
  }

  export type bookingsCreateManyInput = {
    id?: number
    user_id: number
    trips_id: number
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
  }

  export type bookingsUpdateManyMutationInput = {
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesCreateInput = {
    message_name: string
    email: string
    subject: string
    created_at: Date | string
  }

  export type contact_messagesUncheckedCreateInput = {
    id?: number
    message_name: string
    email: string
    subject: string
    created_at: Date | string
  }

  export type contact_messagesUpdateInput = {
    message_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesCreateManyInput = {
    id?: number
    message_name: string
    email: string
    subject: string
    created_at: Date | string
  }

  export type contact_messagesUpdateManyMutationInput = {
    message_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type countriesCreateInput = {
    cname: string
    cimage?: string | null
  }

  export type countriesUncheckedCreateInput = {
    id?: number
    cname: string
    cimage?: string | null
  }

  export type countriesUpdateInput = {
    cname?: StringFieldUpdateOperationsInput | string
    cimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type countriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cname?: StringFieldUpdateOperationsInput | string
    cimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type countriesCreateManyInput = {
    id?: number
    cname: string
    cimage?: string | null
  }

  export type countriesUpdateManyMutationInput = {
    cname?: StringFieldUpdateOperationsInput | string
    cimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type countriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cname?: StringFieldUpdateOperationsInput | string
    cimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type flightsCreateInput = {
    airline: string
    duration: number
    uses?: usesCreateNestedManyWithoutFlightsInput
  }

  export type flightsUncheckedCreateInput = {
    id?: number
    airline: string
    duration: number
    uses?: usesUncheckedCreateNestedManyWithoutFlightsInput
  }

  export type flightsUpdateInput = {
    airline?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    uses?: usesUpdateManyWithoutFlightsNestedInput
  }

  export type flightsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    airline?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    uses?: usesUncheckedUpdateManyWithoutFlightsNestedInput
  }

  export type flightsCreateManyInput = {
    id?: number
    airline: string
    duration: number
  }

  export type flightsUpdateManyMutationInput = {
    airline?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type flightsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    airline?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type hotelsCreateInput = {
    hotel_name: string
    stars: number
    includes?: includesCreateNestedManyWithoutHotelsInput
  }

  export type hotelsUncheckedCreateInput = {
    id?: number
    hotel_name: string
    stars: number
    includes?: includesUncheckedCreateNestedManyWithoutHotelsInput
  }

  export type hotelsUpdateInput = {
    hotel_name?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    includes?: includesUpdateManyWithoutHotelsNestedInput
  }

  export type hotelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hotel_name?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    includes?: includesUncheckedUpdateManyWithoutHotelsNestedInput
  }

  export type hotelsCreateManyInput = {
    id?: number
    hotel_name: string
    stars: number
  }

  export type hotelsUpdateManyMutationInput = {
    hotel_name?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
  }

  export type hotelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hotel_name?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
  }

  export type includesCreateInput = {
    trips: tripsCreateNestedOneWithoutIncludesInput
    hotels: hotelsCreateNestedOneWithoutIncludesInput
  }

  export type includesUncheckedCreateInput = {
    id?: number
    trips_id: number
    hotels_id: number
  }

  export type includesUpdateInput = {
    trips?: tripsUpdateOneRequiredWithoutIncludesNestedInput
    hotels?: hotelsUpdateOneRequiredWithoutIncludesNestedInput
  }

  export type includesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    hotels_id?: IntFieldUpdateOperationsInput | number
  }

  export type includesCreateManyInput = {
    id?: number
    trips_id: number
    hotels_id: number
  }

  export type includesUpdateManyMutationInput = {

  }

  export type includesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    hotels_id?: IntFieldUpdateOperationsInput | number
  }

  export type paymentsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status: string
    created_at: Date | string
    bookings: bookingsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    bookings_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status: string
    created_at: Date | string
  }

  export type paymentsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookings_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyInput = {
    id?: number
    bookings_id: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status: string
    created_at: Date | string
  }

  export type paymentsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookings_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewCreateInput = {
    rating: number
    comment?: string | null
    created_at: Date | string
    users: usersCreateNestedOneWithoutReviewInput
    trips: tripsCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    id?: number
    user_id: number
    trips_id: number
    rating: number
    comment?: string | null
    created_at: Date | string
  }

  export type reviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutReviewNestedInput
    trips?: tripsUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewCreateManyInput = {
    id?: number
    user_id: number
    trips_id: number
    rating: number
    comment?: string | null
    created_at: Date | string
  }

  export type reviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type travel_typesCreateInput = {
    tname: string
  }

  export type travel_typesUncheckedCreateInput = {
    id?: number
    tname: string
  }

  export type travel_typesUpdateInput = {
    tname?: StringFieldUpdateOperationsInput | string
  }

  export type travel_typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tname?: StringFieldUpdateOperationsInput | string
  }

  export type travel_typesCreateManyInput = {
    id?: number
    tname: string
  }

  export type travel_typesUpdateManyMutationInput = {
    tname?: StringFieldUpdateOperationsInput | string
  }

  export type travel_typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tname?: StringFieldUpdateOperationsInput | string
  }

  export type trip_datesCreateInput = {
    available_date: Date | string
    trips: tripsCreateNestedOneWithoutTrip_datesInput
  }

  export type trip_datesUncheckedCreateInput = {
    id?: number
    trips_id: number
    available_date: Date | string
  }

  export type trip_datesUpdateInput = {
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: tripsUpdateOneRequiredWithoutTrip_datesNestedInput
  }

  export type trip_datesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trip_datesCreateManyInput = {
    id?: number
    trips_id: number
    available_date: Date | string
  }

  export type trip_datesUpdateManyMutationInput = {
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trip_datesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trip_imagesCreateInput = {
    image_url: string
    trips: tripsCreateNestedOneWithoutTrip_imagesInput
  }

  export type trip_imagesUncheckedCreateInput = {
    id?: number
    trips_id: number
    image_url: string
  }

  export type trip_imagesUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    trips?: tripsUpdateOneRequiredWithoutTrip_imagesNestedInput
  }

  export type trip_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type trip_imagesCreateManyInput = {
    id?: number
    trips_id: number
    image_url: string
  }

  export type trip_imagesUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type trip_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type tripsCreateInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsCreateNestedManyWithoutTripsInput
    includes?: includesCreateNestedManyWithoutTripsInput
    review?: reviewCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesCreateNestedManyWithoutTripsInput
    uses?: usesCreateNestedManyWithoutTripsInput
  }

  export type tripsUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTripsInput
    includes?: includesUncheckedCreateNestedManyWithoutTripsInput
    review?: reviewUncheckedCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesUncheckedCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesUncheckedCreateNestedManyWithoutTripsInput
    uses?: usesUncheckedCreateNestedManyWithoutTripsInput
  }

  export type tripsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUpdateManyWithoutTripsNestedInput
    includes?: includesUpdateManyWithoutTripsNestedInput
    review?: reviewUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUpdateManyWithoutTripsNestedInput
    uses?: usesUpdateManyWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutTripsNestedInput
    includes?: includesUncheckedUpdateManyWithoutTripsNestedInput
    review?: reviewUncheckedUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUncheckedUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUncheckedUpdateManyWithoutTripsNestedInput
    uses?: usesUncheckedUpdateManyWithoutTripsNestedInput
  }

  export type tripsCreateManyInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
  }

  export type tripsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tripsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    review?: reviewCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    review?: reviewUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    review?: reviewUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    review?: reviewUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
  }

  export type usersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateInput = {
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
  }

  export type adminUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
  }

  export type adminUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usesCreateInput = {
    trips: tripsCreateNestedOneWithoutUsesInput
    flights: flightsCreateNestedOneWithoutUsesInput
  }

  export type usesUncheckedCreateInput = {
    id?: number
    trips_id: number
    flights_id: number
  }

  export type usesUpdateInput = {
    trips?: tripsUpdateOneRequiredWithoutUsesNestedInput
    flights?: flightsUpdateOneRequiredWithoutUsesNestedInput
  }

  export type usesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    flights_id?: IntFieldUpdateOperationsInput | number
  }

  export type usesCreateManyInput = {
    id?: number
    trips_id: number
    flights_id: number
  }

  export type usesUpdateManyMutationInput = {

  }

  export type usesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    flights_id?: IntFieldUpdateOperationsInput | number
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type TripsScalarRelationFilter = {
    is?: tripsWhereInput
    isNot?: tripsWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookingsOrderByRelevanceInput = {
    fields: bookingsOrderByRelevanceFieldEnum | bookingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bookingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    travel_date?: SortOrder
    travelers_count?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type bookingsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    travelers_count?: SortOrder
    total_price?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    travel_date?: SortOrder
    travelers_count?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    travel_date?: SortOrder
    travelers_count?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type bookingsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    travelers_count?: SortOrder
    total_price?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type contact_messagesOrderByRelevanceInput = {
    fields: contact_messagesOrderByRelevanceFieldEnum | contact_messagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type contact_messagesCountOrderByAggregateInput = {
    id?: SortOrder
    message_name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    created_at?: SortOrder
  }

  export type contact_messagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contact_messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    message_name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    created_at?: SortOrder
  }

  export type contact_messagesMinOrderByAggregateInput = {
    id?: SortOrder
    message_name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    created_at?: SortOrder
  }

  export type contact_messagesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type countriesOrderByRelevanceInput = {
    fields: countriesOrderByRelevanceFieldEnum | countriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type countriesCountOrderByAggregateInput = {
    id?: SortOrder
    cname?: SortOrder
    cimage?: SortOrder
  }

  export type countriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type countriesMaxOrderByAggregateInput = {
    id?: SortOrder
    cname?: SortOrder
    cimage?: SortOrder
  }

  export type countriesMinOrderByAggregateInput = {
    id?: SortOrder
    cname?: SortOrder
    cimage?: SortOrder
  }

  export type countriesSumOrderByAggregateInput = {
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

  export type UsesListRelationFilter = {
    every?: usesWhereInput
    some?: usesWhereInput
    none?: usesWhereInput
  }

  export type usesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type flightsOrderByRelevanceInput = {
    fields: flightsOrderByRelevanceFieldEnum | flightsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type flightsCountOrderByAggregateInput = {
    id?: SortOrder
    airline?: SortOrder
    duration?: SortOrder
  }

  export type flightsAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type flightsMaxOrderByAggregateInput = {
    id?: SortOrder
    airline?: SortOrder
    duration?: SortOrder
  }

  export type flightsMinOrderByAggregateInput = {
    id?: SortOrder
    airline?: SortOrder
    duration?: SortOrder
  }

  export type flightsSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type IncludesListRelationFilter = {
    every?: includesWhereInput
    some?: includesWhereInput
    none?: includesWhereInput
  }

  export type includesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hotelsOrderByRelevanceInput = {
    fields: hotelsOrderByRelevanceFieldEnum | hotelsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type hotelsCountOrderByAggregateInput = {
    id?: SortOrder
    hotel_name?: SortOrder
    stars?: SortOrder
  }

  export type hotelsAvgOrderByAggregateInput = {
    id?: SortOrder
    stars?: SortOrder
  }

  export type hotelsMaxOrderByAggregateInput = {
    id?: SortOrder
    hotel_name?: SortOrder
    stars?: SortOrder
  }

  export type hotelsMinOrderByAggregateInput = {
    id?: SortOrder
    hotel_name?: SortOrder
    stars?: SortOrder
  }

  export type hotelsSumOrderByAggregateInput = {
    id?: SortOrder
    stars?: SortOrder
  }

  export type HotelsScalarRelationFilter = {
    is?: hotelsWhereInput
    isNot?: hotelsWhereInput
  }

  export type includesCountOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    hotels_id?: SortOrder
  }

  export type includesAvgOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    hotels_id?: SortOrder
  }

  export type includesMaxOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    hotels_id?: SortOrder
  }

  export type includesMinOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    hotels_id?: SortOrder
  }

  export type includesSumOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    hotels_id?: SortOrder
  }

  export type BookingsScalarRelationFilter = {
    is?: bookingsWhereInput
    isNot?: bookingsWhereInput
  }

  export type paymentsOrderByRelevanceInput = {
    fields: paymentsOrderByRelevanceFieldEnum | paymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    bookings_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    bookings_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    bookings_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    bookings_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    bookings_id?: SortOrder
    amount?: SortOrder
  }

  export type reviewOrderByRelevanceInput = {
    fields: reviewOrderByRelevanceFieldEnum | reviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    trips_id?: SortOrder
    rating?: SortOrder
  }

  export type travel_typesOrderByRelevanceInput = {
    fields: travel_typesOrderByRelevanceFieldEnum | travel_typesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type travel_typesCountOrderByAggregateInput = {
    id?: SortOrder
    tname?: SortOrder
  }

  export type travel_typesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type travel_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    tname?: SortOrder
  }

  export type travel_typesMinOrderByAggregateInput = {
    id?: SortOrder
    tname?: SortOrder
  }

  export type travel_typesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type trip_datesCountOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    available_date?: SortOrder
  }

  export type trip_datesAvgOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
  }

  export type trip_datesMaxOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    available_date?: SortOrder
  }

  export type trip_datesMinOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    available_date?: SortOrder
  }

  export type trip_datesSumOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
  }

  export type trip_imagesOrderByRelevanceInput = {
    fields: trip_imagesOrderByRelevanceFieldEnum | trip_imagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type trip_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    image_url?: SortOrder
  }

  export type trip_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
  }

  export type trip_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    image_url?: SortOrder
  }

  export type trip_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    image_url?: SortOrder
  }

  export type trip_imagesSumOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
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

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type Trip_datesListRelationFilter = {
    every?: trip_datesWhereInput
    some?: trip_datesWhereInput
    none?: trip_datesWhereInput
  }

  export type Trip_imagesListRelationFilter = {
    every?: trip_imagesWhereInput
    some?: trip_imagesWhereInput
    none?: trip_imagesWhereInput
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type trip_datesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type trip_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tripsOrderByRelevanceInput = {
    fields: tripsOrderByRelevanceFieldEnum | tripsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tripsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    countries_id?: SortOrder
    travel_types_id?: SortOrder
  }

  export type tripsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    countries_id?: SortOrder
    travel_types_id?: SortOrder
  }

  export type tripsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    countries_id?: SortOrder
    travel_types_id?: SortOrder
  }

  export type tripsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    countries_id?: SortOrder
    travel_types_id?: SortOrder
  }

  export type tripsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    countries_id?: SortOrder
    travel_types_id?: SortOrder
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

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrder
    created_at?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrder
    created_at?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    profile_image?: SortOrder
    created_at?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FlightsScalarRelationFilter = {
    is?: flightsWhereInput
    isNot?: flightsWhereInput
  }

  export type usesCountOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    flights_id?: SortOrder
  }

  export type usesAvgOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    flights_id?: SortOrder
  }

  export type usesMaxOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    flights_id?: SortOrder
  }

  export type usesMinOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    flights_id?: SortOrder
  }

  export type usesSumOrderByAggregateInput = {
    id?: SortOrder
    trips_id?: SortOrder
    flights_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    connect?: usersWhereUniqueInput
  }

  export type tripsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<tripsCreateWithoutBookingsInput, tripsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: tripsCreateOrConnectWithoutBookingsInput
    connect?: tripsWhereUniqueInput
  }

  export type paymentsCreateNestedManyWithoutBookingsInput = {
    create?: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput> | paymentsCreateWithoutBookingsInput[] | paymentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingsInput | paymentsCreateOrConnectWithoutBookingsInput[]
    createMany?: paymentsCreateManyBookingsInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutBookingsInput = {
    create?: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput> | paymentsCreateWithoutBookingsInput[] | paymentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingsInput | paymentsCreateOrConnectWithoutBookingsInput[]
    createMany?: paymentsCreateManyBookingsInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    upsert?: usersUpsertWithoutBookingsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBookingsInput, usersUpdateWithoutBookingsInput>, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type tripsUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<tripsCreateWithoutBookingsInput, tripsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: tripsCreateOrConnectWithoutBookingsInput
    upsert?: tripsUpsertWithoutBookingsInput
    connect?: tripsWhereUniqueInput
    update?: XOR<XOR<tripsUpdateToOneWithWhereWithoutBookingsInput, tripsUpdateWithoutBookingsInput>, tripsUncheckedUpdateWithoutBookingsInput>
  }

  export type paymentsUpdateManyWithoutBookingsNestedInput = {
    create?: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput> | paymentsCreateWithoutBookingsInput[] | paymentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingsInput | paymentsCreateOrConnectWithoutBookingsInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutBookingsInput | paymentsUpsertWithWhereUniqueWithoutBookingsInput[]
    createMany?: paymentsCreateManyBookingsInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutBookingsInput | paymentsUpdateWithWhereUniqueWithoutBookingsInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutBookingsInput | paymentsUpdateManyWithWhereWithoutBookingsInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutBookingsNestedInput = {
    create?: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput> | paymentsCreateWithoutBookingsInput[] | paymentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingsInput | paymentsCreateOrConnectWithoutBookingsInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutBookingsInput | paymentsUpsertWithWhereUniqueWithoutBookingsInput[]
    createMany?: paymentsCreateManyBookingsInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutBookingsInput | paymentsUpdateWithWhereUniqueWithoutBookingsInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutBookingsInput | paymentsUpdateManyWithWhereWithoutBookingsInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usesCreateNestedManyWithoutFlightsInput = {
    create?: XOR<usesCreateWithoutFlightsInput, usesUncheckedCreateWithoutFlightsInput> | usesCreateWithoutFlightsInput[] | usesUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: usesCreateOrConnectWithoutFlightsInput | usesCreateOrConnectWithoutFlightsInput[]
    createMany?: usesCreateManyFlightsInputEnvelope
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
  }

  export type usesUncheckedCreateNestedManyWithoutFlightsInput = {
    create?: XOR<usesCreateWithoutFlightsInput, usesUncheckedCreateWithoutFlightsInput> | usesCreateWithoutFlightsInput[] | usesUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: usesCreateOrConnectWithoutFlightsInput | usesCreateOrConnectWithoutFlightsInput[]
    createMany?: usesCreateManyFlightsInputEnvelope
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
  }

  export type usesUpdateManyWithoutFlightsNestedInput = {
    create?: XOR<usesCreateWithoutFlightsInput, usesUncheckedCreateWithoutFlightsInput> | usesCreateWithoutFlightsInput[] | usesUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: usesCreateOrConnectWithoutFlightsInput | usesCreateOrConnectWithoutFlightsInput[]
    upsert?: usesUpsertWithWhereUniqueWithoutFlightsInput | usesUpsertWithWhereUniqueWithoutFlightsInput[]
    createMany?: usesCreateManyFlightsInputEnvelope
    set?: usesWhereUniqueInput | usesWhereUniqueInput[]
    disconnect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    delete?: usesWhereUniqueInput | usesWhereUniqueInput[]
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    update?: usesUpdateWithWhereUniqueWithoutFlightsInput | usesUpdateWithWhereUniqueWithoutFlightsInput[]
    updateMany?: usesUpdateManyWithWhereWithoutFlightsInput | usesUpdateManyWithWhereWithoutFlightsInput[]
    deleteMany?: usesScalarWhereInput | usesScalarWhereInput[]
  }

  export type usesUncheckedUpdateManyWithoutFlightsNestedInput = {
    create?: XOR<usesCreateWithoutFlightsInput, usesUncheckedCreateWithoutFlightsInput> | usesCreateWithoutFlightsInput[] | usesUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: usesCreateOrConnectWithoutFlightsInput | usesCreateOrConnectWithoutFlightsInput[]
    upsert?: usesUpsertWithWhereUniqueWithoutFlightsInput | usesUpsertWithWhereUniqueWithoutFlightsInput[]
    createMany?: usesCreateManyFlightsInputEnvelope
    set?: usesWhereUniqueInput | usesWhereUniqueInput[]
    disconnect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    delete?: usesWhereUniqueInput | usesWhereUniqueInput[]
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    update?: usesUpdateWithWhereUniqueWithoutFlightsInput | usesUpdateWithWhereUniqueWithoutFlightsInput[]
    updateMany?: usesUpdateManyWithWhereWithoutFlightsInput | usesUpdateManyWithWhereWithoutFlightsInput[]
    deleteMany?: usesScalarWhereInput | usesScalarWhereInput[]
  }

  export type includesCreateNestedManyWithoutHotelsInput = {
    create?: XOR<includesCreateWithoutHotelsInput, includesUncheckedCreateWithoutHotelsInput> | includesCreateWithoutHotelsInput[] | includesUncheckedCreateWithoutHotelsInput[]
    connectOrCreate?: includesCreateOrConnectWithoutHotelsInput | includesCreateOrConnectWithoutHotelsInput[]
    createMany?: includesCreateManyHotelsInputEnvelope
    connect?: includesWhereUniqueInput | includesWhereUniqueInput[]
  }

  export type includesUncheckedCreateNestedManyWithoutHotelsInput = {
    create?: XOR<includesCreateWithoutHotelsInput, includesUncheckedCreateWithoutHotelsInput> | includesCreateWithoutHotelsInput[] | includesUncheckedCreateWithoutHotelsInput[]
    connectOrCreate?: includesCreateOrConnectWithoutHotelsInput | includesCreateOrConnectWithoutHotelsInput[]
    createMany?: includesCreateManyHotelsInputEnvelope
    connect?: includesWhereUniqueInput | includesWhereUniqueInput[]
  }

  export type includesUpdateManyWithoutHotelsNestedInput = {
    create?: XOR<includesCreateWithoutHotelsInput, includesUncheckedCreateWithoutHotelsInput> | includesCreateWithoutHotelsInput[] | includesUncheckedCreateWithoutHotelsInput[]
    connectOrCreate?: includesCreateOrConnectWithoutHotelsInput | includesCreateOrConnectWithoutHotelsInput[]
    upsert?: includesUpsertWithWhereUniqueWithoutHotelsInput | includesUpsertWithWhereUniqueWithoutHotelsInput[]
    createMany?: includesCreateManyHotelsInputEnvelope
    set?: includesWhereUniqueInput | includesWhereUniqueInput[]
    disconnect?: includesWhereUniqueInput | includesWhereUniqueInput[]
    delete?: includesWhereUniqueInput | includesWhereUniqueInput[]
    connect?: includesWhereUniqueInput | includesWhereUniqueInput[]
    update?: includesUpdateWithWhereUniqueWithoutHotelsInput | includesUpdateWithWhereUniqueWithoutHotelsInput[]
    updateMany?: includesUpdateManyWithWhereWithoutHotelsInput | includesUpdateManyWithWhereWithoutHotelsInput[]
    deleteMany?: includesScalarWhereInput | includesScalarWhereInput[]
  }

  export type includesUncheckedUpdateManyWithoutHotelsNestedInput = {
    create?: XOR<includesCreateWithoutHotelsInput, includesUncheckedCreateWithoutHotelsInput> | includesCreateWithoutHotelsInput[] | includesUncheckedCreateWithoutHotelsInput[]
    connectOrCreate?: includesCreateOrConnectWithoutHotelsInput | includesCreateOrConnectWithoutHotelsInput[]
    upsert?: includesUpsertWithWhereUniqueWithoutHotelsInput | includesUpsertWithWhereUniqueWithoutHotelsInput[]
    createMany?: includesCreateManyHotelsInputEnvelope
    set?: includesWhereUniqueInput | includesWhereUniqueInput[]
    disconnect?: includesWhereUniqueInput | includesWhereUniqueInput[]
    delete?: includesWhereUniqueInput | includesWhereUniqueInput[]
    connect?: includesWhereUniqueInput | includesWhereUniqueInput[]
    update?: includesUpdateWithWhereUniqueWithoutHotelsInput | includesUpdateWithWhereUniqueWithoutHotelsInput[]
    updateMany?: includesUpdateManyWithWhereWithoutHotelsInput | includesUpdateManyWithWhereWithoutHotelsInput[]
    deleteMany?: includesScalarWhereInput | includesScalarWhereInput[]
  }

  export type tripsCreateNestedOneWithoutIncludesInput = {
    create?: XOR<tripsCreateWithoutIncludesInput, tripsUncheckedCreateWithoutIncludesInput>
    connectOrCreate?: tripsCreateOrConnectWithoutIncludesInput
    connect?: tripsWhereUniqueInput
  }

  export type hotelsCreateNestedOneWithoutIncludesInput = {
    create?: XOR<hotelsCreateWithoutIncludesInput, hotelsUncheckedCreateWithoutIncludesInput>
    connectOrCreate?: hotelsCreateOrConnectWithoutIncludesInput
    connect?: hotelsWhereUniqueInput
  }

  export type tripsUpdateOneRequiredWithoutIncludesNestedInput = {
    create?: XOR<tripsCreateWithoutIncludesInput, tripsUncheckedCreateWithoutIncludesInput>
    connectOrCreate?: tripsCreateOrConnectWithoutIncludesInput
    upsert?: tripsUpsertWithoutIncludesInput
    connect?: tripsWhereUniqueInput
    update?: XOR<XOR<tripsUpdateToOneWithWhereWithoutIncludesInput, tripsUpdateWithoutIncludesInput>, tripsUncheckedUpdateWithoutIncludesInput>
  }

  export type hotelsUpdateOneRequiredWithoutIncludesNestedInput = {
    create?: XOR<hotelsCreateWithoutIncludesInput, hotelsUncheckedCreateWithoutIncludesInput>
    connectOrCreate?: hotelsCreateOrConnectWithoutIncludesInput
    upsert?: hotelsUpsertWithoutIncludesInput
    connect?: hotelsWhereUniqueInput
    update?: XOR<XOR<hotelsUpdateToOneWithWhereWithoutIncludesInput, hotelsUpdateWithoutIncludesInput>, hotelsUncheckedUpdateWithoutIncludesInput>
  }

  export type bookingsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutPaymentsInput
    connect?: bookingsWhereUniqueInput
  }

  export type bookingsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutPaymentsInput
    upsert?: bookingsUpsertWithoutPaymentsInput
    connect?: bookingsWhereUniqueInput
    update?: XOR<XOR<bookingsUpdateToOneWithWhereWithoutPaymentsInput, bookingsUpdateWithoutPaymentsInput>, bookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type usersCreateNestedOneWithoutReviewInput = {
    create?: XOR<usersCreateWithoutReviewInput, usersUncheckedCreateWithoutReviewInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewInput
    connect?: usersWhereUniqueInput
  }

  export type tripsCreateNestedOneWithoutReviewInput = {
    create?: XOR<tripsCreateWithoutReviewInput, tripsUncheckedCreateWithoutReviewInput>
    connectOrCreate?: tripsCreateOrConnectWithoutReviewInput
    connect?: tripsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<usersCreateWithoutReviewInput, usersUncheckedCreateWithoutReviewInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewInput
    upsert?: usersUpsertWithoutReviewInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewInput, usersUpdateWithoutReviewInput>, usersUncheckedUpdateWithoutReviewInput>
  }

  export type tripsUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<tripsCreateWithoutReviewInput, tripsUncheckedCreateWithoutReviewInput>
    connectOrCreate?: tripsCreateOrConnectWithoutReviewInput
    upsert?: tripsUpsertWithoutReviewInput
    connect?: tripsWhereUniqueInput
    update?: XOR<XOR<tripsUpdateToOneWithWhereWithoutReviewInput, tripsUpdateWithoutReviewInput>, tripsUncheckedUpdateWithoutReviewInput>
  }

  export type tripsCreateNestedOneWithoutTrip_datesInput = {
    create?: XOR<tripsCreateWithoutTrip_datesInput, tripsUncheckedCreateWithoutTrip_datesInput>
    connectOrCreate?: tripsCreateOrConnectWithoutTrip_datesInput
    connect?: tripsWhereUniqueInput
  }

  export type tripsUpdateOneRequiredWithoutTrip_datesNestedInput = {
    create?: XOR<tripsCreateWithoutTrip_datesInput, tripsUncheckedCreateWithoutTrip_datesInput>
    connectOrCreate?: tripsCreateOrConnectWithoutTrip_datesInput
    upsert?: tripsUpsertWithoutTrip_datesInput
    connect?: tripsWhereUniqueInput
    update?: XOR<XOR<tripsUpdateToOneWithWhereWithoutTrip_datesInput, tripsUpdateWithoutTrip_datesInput>, tripsUncheckedUpdateWithoutTrip_datesInput>
  }

  export type tripsCreateNestedOneWithoutTrip_imagesInput = {
    create?: XOR<tripsCreateWithoutTrip_imagesInput, tripsUncheckedCreateWithoutTrip_imagesInput>
    connectOrCreate?: tripsCreateOrConnectWithoutTrip_imagesInput
    connect?: tripsWhereUniqueInput
  }

  export type tripsUpdateOneRequiredWithoutTrip_imagesNestedInput = {
    create?: XOR<tripsCreateWithoutTrip_imagesInput, tripsUncheckedCreateWithoutTrip_imagesInput>
    connectOrCreate?: tripsCreateOrConnectWithoutTrip_imagesInput
    upsert?: tripsUpsertWithoutTrip_imagesInput
    connect?: tripsWhereUniqueInput
    update?: XOR<XOR<tripsUpdateToOneWithWhereWithoutTrip_imagesInput, tripsUpdateWithoutTrip_imagesInput>, tripsUncheckedUpdateWithoutTrip_imagesInput>
  }

  export type bookingsCreateNestedManyWithoutTripsInput = {
    create?: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput> | bookingsCreateWithoutTripsInput[] | bookingsUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTripsInput | bookingsCreateOrConnectWithoutTripsInput[]
    createMany?: bookingsCreateManyTripsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type includesCreateNestedManyWithoutTripsInput = {
    create?: XOR<includesCreateWithoutTripsInput, includesUncheckedCreateWithoutTripsInput> | includesCreateWithoutTripsInput[] | includesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: includesCreateOrConnectWithoutTripsInput | includesCreateOrConnectWithoutTripsInput[]
    createMany?: includesCreateManyTripsInputEnvelope
    connect?: includesWhereUniqueInput | includesWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutTripsInput = {
    create?: XOR<reviewCreateWithoutTripsInput, reviewUncheckedCreateWithoutTripsInput> | reviewCreateWithoutTripsInput[] | reviewUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutTripsInput | reviewCreateOrConnectWithoutTripsInput[]
    createMany?: reviewCreateManyTripsInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type trip_datesCreateNestedManyWithoutTripsInput = {
    create?: XOR<trip_datesCreateWithoutTripsInput, trip_datesUncheckedCreateWithoutTripsInput> | trip_datesCreateWithoutTripsInput[] | trip_datesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: trip_datesCreateOrConnectWithoutTripsInput | trip_datesCreateOrConnectWithoutTripsInput[]
    createMany?: trip_datesCreateManyTripsInputEnvelope
    connect?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
  }

  export type trip_imagesCreateNestedManyWithoutTripsInput = {
    create?: XOR<trip_imagesCreateWithoutTripsInput, trip_imagesUncheckedCreateWithoutTripsInput> | trip_imagesCreateWithoutTripsInput[] | trip_imagesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: trip_imagesCreateOrConnectWithoutTripsInput | trip_imagesCreateOrConnectWithoutTripsInput[]
    createMany?: trip_imagesCreateManyTripsInputEnvelope
    connect?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
  }

  export type usesCreateNestedManyWithoutTripsInput = {
    create?: XOR<usesCreateWithoutTripsInput, usesUncheckedCreateWithoutTripsInput> | usesCreateWithoutTripsInput[] | usesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: usesCreateOrConnectWithoutTripsInput | usesCreateOrConnectWithoutTripsInput[]
    createMany?: usesCreateManyTripsInputEnvelope
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutTripsInput = {
    create?: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput> | bookingsCreateWithoutTripsInput[] | bookingsUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTripsInput | bookingsCreateOrConnectWithoutTripsInput[]
    createMany?: bookingsCreateManyTripsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type includesUncheckedCreateNestedManyWithoutTripsInput = {
    create?: XOR<includesCreateWithoutTripsInput, includesUncheckedCreateWithoutTripsInput> | includesCreateWithoutTripsInput[] | includesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: includesCreateOrConnectWithoutTripsInput | includesCreateOrConnectWithoutTripsInput[]
    createMany?: includesCreateManyTripsInputEnvelope
    connect?: includesWhereUniqueInput | includesWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutTripsInput = {
    create?: XOR<reviewCreateWithoutTripsInput, reviewUncheckedCreateWithoutTripsInput> | reviewCreateWithoutTripsInput[] | reviewUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutTripsInput | reviewCreateOrConnectWithoutTripsInput[]
    createMany?: reviewCreateManyTripsInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type trip_datesUncheckedCreateNestedManyWithoutTripsInput = {
    create?: XOR<trip_datesCreateWithoutTripsInput, trip_datesUncheckedCreateWithoutTripsInput> | trip_datesCreateWithoutTripsInput[] | trip_datesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: trip_datesCreateOrConnectWithoutTripsInput | trip_datesCreateOrConnectWithoutTripsInput[]
    createMany?: trip_datesCreateManyTripsInputEnvelope
    connect?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
  }

  export type trip_imagesUncheckedCreateNestedManyWithoutTripsInput = {
    create?: XOR<trip_imagesCreateWithoutTripsInput, trip_imagesUncheckedCreateWithoutTripsInput> | trip_imagesCreateWithoutTripsInput[] | trip_imagesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: trip_imagesCreateOrConnectWithoutTripsInput | trip_imagesCreateOrConnectWithoutTripsInput[]
    createMany?: trip_imagesCreateManyTripsInputEnvelope
    connect?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
  }

  export type usesUncheckedCreateNestedManyWithoutTripsInput = {
    create?: XOR<usesCreateWithoutTripsInput, usesUncheckedCreateWithoutTripsInput> | usesCreateWithoutTripsInput[] | usesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: usesCreateOrConnectWithoutTripsInput | usesCreateOrConnectWithoutTripsInput[]
    createMany?: usesCreateManyTripsInputEnvelope
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bookingsUpdateManyWithoutTripsNestedInput = {
    create?: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput> | bookingsCreateWithoutTripsInput[] | bookingsUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTripsInput | bookingsCreateOrConnectWithoutTripsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutTripsInput | bookingsUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: bookingsCreateManyTripsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutTripsInput | bookingsUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutTripsInput | bookingsUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type includesUpdateManyWithoutTripsNestedInput = {
    create?: XOR<includesCreateWithoutTripsInput, includesUncheckedCreateWithoutTripsInput> | includesCreateWithoutTripsInput[] | includesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: includesCreateOrConnectWithoutTripsInput | includesCreateOrConnectWithoutTripsInput[]
    upsert?: includesUpsertWithWhereUniqueWithoutTripsInput | includesUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: includesCreateManyTripsInputEnvelope
    set?: includesWhereUniqueInput | includesWhereUniqueInput[]
    disconnect?: includesWhereUniqueInput | includesWhereUniqueInput[]
    delete?: includesWhereUniqueInput | includesWhereUniqueInput[]
    connect?: includesWhereUniqueInput | includesWhereUniqueInput[]
    update?: includesUpdateWithWhereUniqueWithoutTripsInput | includesUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: includesUpdateManyWithWhereWithoutTripsInput | includesUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: includesScalarWhereInput | includesScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutTripsNestedInput = {
    create?: XOR<reviewCreateWithoutTripsInput, reviewUncheckedCreateWithoutTripsInput> | reviewCreateWithoutTripsInput[] | reviewUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutTripsInput | reviewCreateOrConnectWithoutTripsInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutTripsInput | reviewUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: reviewCreateManyTripsInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutTripsInput | reviewUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutTripsInput | reviewUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type trip_datesUpdateManyWithoutTripsNestedInput = {
    create?: XOR<trip_datesCreateWithoutTripsInput, trip_datesUncheckedCreateWithoutTripsInput> | trip_datesCreateWithoutTripsInput[] | trip_datesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: trip_datesCreateOrConnectWithoutTripsInput | trip_datesCreateOrConnectWithoutTripsInput[]
    upsert?: trip_datesUpsertWithWhereUniqueWithoutTripsInput | trip_datesUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: trip_datesCreateManyTripsInputEnvelope
    set?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
    disconnect?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
    delete?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
    connect?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
    update?: trip_datesUpdateWithWhereUniqueWithoutTripsInput | trip_datesUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: trip_datesUpdateManyWithWhereWithoutTripsInput | trip_datesUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: trip_datesScalarWhereInput | trip_datesScalarWhereInput[]
  }

  export type trip_imagesUpdateManyWithoutTripsNestedInput = {
    create?: XOR<trip_imagesCreateWithoutTripsInput, trip_imagesUncheckedCreateWithoutTripsInput> | trip_imagesCreateWithoutTripsInput[] | trip_imagesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: trip_imagesCreateOrConnectWithoutTripsInput | trip_imagesCreateOrConnectWithoutTripsInput[]
    upsert?: trip_imagesUpsertWithWhereUniqueWithoutTripsInput | trip_imagesUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: trip_imagesCreateManyTripsInputEnvelope
    set?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
    disconnect?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
    delete?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
    connect?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
    update?: trip_imagesUpdateWithWhereUniqueWithoutTripsInput | trip_imagesUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: trip_imagesUpdateManyWithWhereWithoutTripsInput | trip_imagesUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: trip_imagesScalarWhereInput | trip_imagesScalarWhereInput[]
  }

  export type usesUpdateManyWithoutTripsNestedInput = {
    create?: XOR<usesCreateWithoutTripsInput, usesUncheckedCreateWithoutTripsInput> | usesCreateWithoutTripsInput[] | usesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: usesCreateOrConnectWithoutTripsInput | usesCreateOrConnectWithoutTripsInput[]
    upsert?: usesUpsertWithWhereUniqueWithoutTripsInput | usesUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: usesCreateManyTripsInputEnvelope
    set?: usesWhereUniqueInput | usesWhereUniqueInput[]
    disconnect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    delete?: usesWhereUniqueInput | usesWhereUniqueInput[]
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    update?: usesUpdateWithWhereUniqueWithoutTripsInput | usesUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: usesUpdateManyWithWhereWithoutTripsInput | usesUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: usesScalarWhereInput | usesScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutTripsNestedInput = {
    create?: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput> | bookingsCreateWithoutTripsInput[] | bookingsUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTripsInput | bookingsCreateOrConnectWithoutTripsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutTripsInput | bookingsUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: bookingsCreateManyTripsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutTripsInput | bookingsUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutTripsInput | bookingsUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type includesUncheckedUpdateManyWithoutTripsNestedInput = {
    create?: XOR<includesCreateWithoutTripsInput, includesUncheckedCreateWithoutTripsInput> | includesCreateWithoutTripsInput[] | includesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: includesCreateOrConnectWithoutTripsInput | includesCreateOrConnectWithoutTripsInput[]
    upsert?: includesUpsertWithWhereUniqueWithoutTripsInput | includesUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: includesCreateManyTripsInputEnvelope
    set?: includesWhereUniqueInput | includesWhereUniqueInput[]
    disconnect?: includesWhereUniqueInput | includesWhereUniqueInput[]
    delete?: includesWhereUniqueInput | includesWhereUniqueInput[]
    connect?: includesWhereUniqueInput | includesWhereUniqueInput[]
    update?: includesUpdateWithWhereUniqueWithoutTripsInput | includesUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: includesUpdateManyWithWhereWithoutTripsInput | includesUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: includesScalarWhereInput | includesScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutTripsNestedInput = {
    create?: XOR<reviewCreateWithoutTripsInput, reviewUncheckedCreateWithoutTripsInput> | reviewCreateWithoutTripsInput[] | reviewUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutTripsInput | reviewCreateOrConnectWithoutTripsInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutTripsInput | reviewUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: reviewCreateManyTripsInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutTripsInput | reviewUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutTripsInput | reviewUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type trip_datesUncheckedUpdateManyWithoutTripsNestedInput = {
    create?: XOR<trip_datesCreateWithoutTripsInput, trip_datesUncheckedCreateWithoutTripsInput> | trip_datesCreateWithoutTripsInput[] | trip_datesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: trip_datesCreateOrConnectWithoutTripsInput | trip_datesCreateOrConnectWithoutTripsInput[]
    upsert?: trip_datesUpsertWithWhereUniqueWithoutTripsInput | trip_datesUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: trip_datesCreateManyTripsInputEnvelope
    set?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
    disconnect?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
    delete?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
    connect?: trip_datesWhereUniqueInput | trip_datesWhereUniqueInput[]
    update?: trip_datesUpdateWithWhereUniqueWithoutTripsInput | trip_datesUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: trip_datesUpdateManyWithWhereWithoutTripsInput | trip_datesUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: trip_datesScalarWhereInput | trip_datesScalarWhereInput[]
  }

  export type trip_imagesUncheckedUpdateManyWithoutTripsNestedInput = {
    create?: XOR<trip_imagesCreateWithoutTripsInput, trip_imagesUncheckedCreateWithoutTripsInput> | trip_imagesCreateWithoutTripsInput[] | trip_imagesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: trip_imagesCreateOrConnectWithoutTripsInput | trip_imagesCreateOrConnectWithoutTripsInput[]
    upsert?: trip_imagesUpsertWithWhereUniqueWithoutTripsInput | trip_imagesUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: trip_imagesCreateManyTripsInputEnvelope
    set?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
    disconnect?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
    delete?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
    connect?: trip_imagesWhereUniqueInput | trip_imagesWhereUniqueInput[]
    update?: trip_imagesUpdateWithWhereUniqueWithoutTripsInput | trip_imagesUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: trip_imagesUpdateManyWithWhereWithoutTripsInput | trip_imagesUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: trip_imagesScalarWhereInput | trip_imagesScalarWhereInput[]
  }

  export type usesUncheckedUpdateManyWithoutTripsNestedInput = {
    create?: XOR<usesCreateWithoutTripsInput, usesUncheckedCreateWithoutTripsInput> | usesCreateWithoutTripsInput[] | usesUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: usesCreateOrConnectWithoutTripsInput | usesCreateOrConnectWithoutTripsInput[]
    upsert?: usesUpsertWithWhereUniqueWithoutTripsInput | usesUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: usesCreateManyTripsInputEnvelope
    set?: usesWhereUniqueInput | usesWhereUniqueInput[]
    disconnect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    delete?: usesWhereUniqueInput | usesWhereUniqueInput[]
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    update?: usesUpdateWithWhereUniqueWithoutTripsInput | usesUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: usesUpdateManyWithWhereWithoutTripsInput | usesUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: usesScalarWhereInput | usesScalarWhereInput[]
  }

  export type bookingsCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput> | reviewCreateWithoutUsersInput[] | reviewUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUsersInput | reviewCreateOrConnectWithoutUsersInput[]
    createMany?: reviewCreateManyUsersInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput> | reviewCreateWithoutUsersInput[] | reviewUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUsersInput | reviewCreateOrConnectWithoutUsersInput[]
    createMany?: reviewCreateManyUsersInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type bookingsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput> | reviewCreateWithoutUsersInput[] | reviewUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUsersInput | reviewCreateOrConnectWithoutUsersInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUsersInput | reviewUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewCreateManyUsersInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUsersInput | reviewUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUsersInput | reviewUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput> | reviewCreateWithoutUsersInput[] | reviewUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUsersInput | reviewCreateOrConnectWithoutUsersInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUsersInput | reviewUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewCreateManyUsersInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUsersInput | reviewUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUsersInput | reviewUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type tripsCreateNestedOneWithoutUsesInput = {
    create?: XOR<tripsCreateWithoutUsesInput, tripsUncheckedCreateWithoutUsesInput>
    connectOrCreate?: tripsCreateOrConnectWithoutUsesInput
    connect?: tripsWhereUniqueInput
  }

  export type flightsCreateNestedOneWithoutUsesInput = {
    create?: XOR<flightsCreateWithoutUsesInput, flightsUncheckedCreateWithoutUsesInput>
    connectOrCreate?: flightsCreateOrConnectWithoutUsesInput
    connect?: flightsWhereUniqueInput
  }

  export type tripsUpdateOneRequiredWithoutUsesNestedInput = {
    create?: XOR<tripsCreateWithoutUsesInput, tripsUncheckedCreateWithoutUsesInput>
    connectOrCreate?: tripsCreateOrConnectWithoutUsesInput
    upsert?: tripsUpsertWithoutUsesInput
    connect?: tripsWhereUniqueInput
    update?: XOR<XOR<tripsUpdateToOneWithWhereWithoutUsesInput, tripsUpdateWithoutUsesInput>, tripsUncheckedUpdateWithoutUsesInput>
  }

  export type flightsUpdateOneRequiredWithoutUsesNestedInput = {
    create?: XOR<flightsCreateWithoutUsesInput, flightsUncheckedCreateWithoutUsesInput>
    connectOrCreate?: flightsCreateOrConnectWithoutUsesInput
    upsert?: flightsUpsertWithoutUsesInput
    connect?: flightsWhereUniqueInput
    update?: XOR<XOR<flightsUpdateToOneWithWhereWithoutUsesInput, flightsUpdateWithoutUsesInput>, flightsUncheckedUpdateWithoutUsesInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type usersCreateWithoutBookingsInput = {
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
    review?: reviewCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBookingsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
    review?: reviewUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBookingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
  }

  export type tripsCreateWithoutBookingsInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    includes?: includesCreateNestedManyWithoutTripsInput
    review?: reviewCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesCreateNestedManyWithoutTripsInput
    uses?: usesCreateNestedManyWithoutTripsInput
  }

  export type tripsUncheckedCreateWithoutBookingsInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    includes?: includesUncheckedCreateNestedManyWithoutTripsInput
    review?: reviewUncheckedCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesUncheckedCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesUncheckedCreateNestedManyWithoutTripsInput
    uses?: usesUncheckedCreateNestedManyWithoutTripsInput
  }

  export type tripsCreateOrConnectWithoutBookingsInput = {
    where: tripsWhereUniqueInput
    create: XOR<tripsCreateWithoutBookingsInput, tripsUncheckedCreateWithoutBookingsInput>
  }

  export type paymentsCreateWithoutBookingsInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status: string
    created_at: Date | string
  }

  export type paymentsUncheckedCreateWithoutBookingsInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status: string
    created_at: Date | string
  }

  export type paymentsCreateOrConnectWithoutBookingsInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput>
  }

  export type paymentsCreateManyBookingsInputEnvelope = {
    data: paymentsCreateManyBookingsInput | paymentsCreateManyBookingsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutBookingsInput = {
    update: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateWithoutBookingsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: reviewUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: reviewUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tripsUpsertWithoutBookingsInput = {
    update: XOR<tripsUpdateWithoutBookingsInput, tripsUncheckedUpdateWithoutBookingsInput>
    create: XOR<tripsCreateWithoutBookingsInput, tripsUncheckedCreateWithoutBookingsInput>
    where?: tripsWhereInput
  }

  export type tripsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: tripsWhereInput
    data: XOR<tripsUpdateWithoutBookingsInput, tripsUncheckedUpdateWithoutBookingsInput>
  }

  export type tripsUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    includes?: includesUpdateManyWithoutTripsNestedInput
    review?: reviewUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUpdateManyWithoutTripsNestedInput
    uses?: usesUpdateManyWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    includes?: includesUncheckedUpdateManyWithoutTripsNestedInput
    review?: reviewUncheckedUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUncheckedUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUncheckedUpdateManyWithoutTripsNestedInput
    uses?: usesUncheckedUpdateManyWithoutTripsNestedInput
  }

  export type paymentsUpsertWithWhereUniqueWithoutBookingsInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutBookingsInput, paymentsUncheckedUpdateWithoutBookingsInput>
    create: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutBookingsInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutBookingsInput, paymentsUncheckedUpdateWithoutBookingsInput>
  }

  export type paymentsUpdateManyWithWhereWithoutBookingsInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutBookingsInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: IntFilter<"payments"> | number
    bookings_id?: IntFilter<"payments"> | number
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"payments"> | string
    payment_status?: StringFilter<"payments"> | string
    created_at?: DateTimeFilter<"payments"> | Date | string
  }

  export type usesCreateWithoutFlightsInput = {
    trips: tripsCreateNestedOneWithoutUsesInput
  }

  export type usesUncheckedCreateWithoutFlightsInput = {
    id?: number
    trips_id: number
  }

  export type usesCreateOrConnectWithoutFlightsInput = {
    where: usesWhereUniqueInput
    create: XOR<usesCreateWithoutFlightsInput, usesUncheckedCreateWithoutFlightsInput>
  }

  export type usesCreateManyFlightsInputEnvelope = {
    data: usesCreateManyFlightsInput | usesCreateManyFlightsInput[]
    skipDuplicates?: boolean
  }

  export type usesUpsertWithWhereUniqueWithoutFlightsInput = {
    where: usesWhereUniqueInput
    update: XOR<usesUpdateWithoutFlightsInput, usesUncheckedUpdateWithoutFlightsInput>
    create: XOR<usesCreateWithoutFlightsInput, usesUncheckedCreateWithoutFlightsInput>
  }

  export type usesUpdateWithWhereUniqueWithoutFlightsInput = {
    where: usesWhereUniqueInput
    data: XOR<usesUpdateWithoutFlightsInput, usesUncheckedUpdateWithoutFlightsInput>
  }

  export type usesUpdateManyWithWhereWithoutFlightsInput = {
    where: usesScalarWhereInput
    data: XOR<usesUpdateManyMutationInput, usesUncheckedUpdateManyWithoutFlightsInput>
  }

  export type usesScalarWhereInput = {
    AND?: usesScalarWhereInput | usesScalarWhereInput[]
    OR?: usesScalarWhereInput[]
    NOT?: usesScalarWhereInput | usesScalarWhereInput[]
    id?: IntFilter<"uses"> | number
    trips_id?: IntFilter<"uses"> | number
    flights_id?: IntFilter<"uses"> | number
  }

  export type includesCreateWithoutHotelsInput = {
    trips: tripsCreateNestedOneWithoutIncludesInput
  }

  export type includesUncheckedCreateWithoutHotelsInput = {
    id?: number
    trips_id: number
  }

  export type includesCreateOrConnectWithoutHotelsInput = {
    where: includesWhereUniqueInput
    create: XOR<includesCreateWithoutHotelsInput, includesUncheckedCreateWithoutHotelsInput>
  }

  export type includesCreateManyHotelsInputEnvelope = {
    data: includesCreateManyHotelsInput | includesCreateManyHotelsInput[]
    skipDuplicates?: boolean
  }

  export type includesUpsertWithWhereUniqueWithoutHotelsInput = {
    where: includesWhereUniqueInput
    update: XOR<includesUpdateWithoutHotelsInput, includesUncheckedUpdateWithoutHotelsInput>
    create: XOR<includesCreateWithoutHotelsInput, includesUncheckedCreateWithoutHotelsInput>
  }

  export type includesUpdateWithWhereUniqueWithoutHotelsInput = {
    where: includesWhereUniqueInput
    data: XOR<includesUpdateWithoutHotelsInput, includesUncheckedUpdateWithoutHotelsInput>
  }

  export type includesUpdateManyWithWhereWithoutHotelsInput = {
    where: includesScalarWhereInput
    data: XOR<includesUpdateManyMutationInput, includesUncheckedUpdateManyWithoutHotelsInput>
  }

  export type includesScalarWhereInput = {
    AND?: includesScalarWhereInput | includesScalarWhereInput[]
    OR?: includesScalarWhereInput[]
    NOT?: includesScalarWhereInput | includesScalarWhereInput[]
    id?: IntFilter<"includes"> | number
    trips_id?: IntFilter<"includes"> | number
    hotels_id?: IntFilter<"includes"> | number
  }

  export type tripsCreateWithoutIncludesInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsCreateNestedManyWithoutTripsInput
    review?: reviewCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesCreateNestedManyWithoutTripsInput
    uses?: usesCreateNestedManyWithoutTripsInput
  }

  export type tripsUncheckedCreateWithoutIncludesInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTripsInput
    review?: reviewUncheckedCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesUncheckedCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesUncheckedCreateNestedManyWithoutTripsInput
    uses?: usesUncheckedCreateNestedManyWithoutTripsInput
  }

  export type tripsCreateOrConnectWithoutIncludesInput = {
    where: tripsWhereUniqueInput
    create: XOR<tripsCreateWithoutIncludesInput, tripsUncheckedCreateWithoutIncludesInput>
  }

  export type hotelsCreateWithoutIncludesInput = {
    hotel_name: string
    stars: number
  }

  export type hotelsUncheckedCreateWithoutIncludesInput = {
    id?: number
    hotel_name: string
    stars: number
  }

  export type hotelsCreateOrConnectWithoutIncludesInput = {
    where: hotelsWhereUniqueInput
    create: XOR<hotelsCreateWithoutIncludesInput, hotelsUncheckedCreateWithoutIncludesInput>
  }

  export type tripsUpsertWithoutIncludesInput = {
    update: XOR<tripsUpdateWithoutIncludesInput, tripsUncheckedUpdateWithoutIncludesInput>
    create: XOR<tripsCreateWithoutIncludesInput, tripsUncheckedCreateWithoutIncludesInput>
    where?: tripsWhereInput
  }

  export type tripsUpdateToOneWithWhereWithoutIncludesInput = {
    where?: tripsWhereInput
    data: XOR<tripsUpdateWithoutIncludesInput, tripsUncheckedUpdateWithoutIncludesInput>
  }

  export type tripsUpdateWithoutIncludesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUpdateManyWithoutTripsNestedInput
    review?: reviewUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUpdateManyWithoutTripsNestedInput
    uses?: usesUpdateManyWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateWithoutIncludesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutTripsNestedInput
    review?: reviewUncheckedUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUncheckedUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUncheckedUpdateManyWithoutTripsNestedInput
    uses?: usesUncheckedUpdateManyWithoutTripsNestedInput
  }

  export type hotelsUpsertWithoutIncludesInput = {
    update: XOR<hotelsUpdateWithoutIncludesInput, hotelsUncheckedUpdateWithoutIncludesInput>
    create: XOR<hotelsCreateWithoutIncludesInput, hotelsUncheckedCreateWithoutIncludesInput>
    where?: hotelsWhereInput
  }

  export type hotelsUpdateToOneWithWhereWithoutIncludesInput = {
    where?: hotelsWhereInput
    data: XOR<hotelsUpdateWithoutIncludesInput, hotelsUncheckedUpdateWithoutIncludesInput>
  }

  export type hotelsUpdateWithoutIncludesInput = {
    hotel_name?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
  }

  export type hotelsUncheckedUpdateWithoutIncludesInput = {
    id?: IntFieldUpdateOperationsInput | number
    hotel_name?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
  }

  export type bookingsCreateWithoutPaymentsInput = {
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
    users: usersCreateNestedOneWithoutBookingsInput
    trips: tripsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutPaymentsInput = {
    id?: number
    user_id: number
    trips_id: number
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
  }

  export type bookingsCreateOrConnectWithoutPaymentsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
  }

  export type bookingsUpsertWithoutPaymentsInput = {
    update: XOR<bookingsUpdateWithoutPaymentsInput, bookingsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
    where?: bookingsWhereInput
  }

  export type bookingsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: bookingsWhereInput
    data: XOR<bookingsUpdateWithoutPaymentsInput, bookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type bookingsUpdateWithoutPaymentsInput = {
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
    trips?: tripsUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutReviewInput = {
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutReviewInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    profile_image?: string | null
    created_at: Date | string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReviewInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewInput, usersUncheckedCreateWithoutReviewInput>
  }

  export type tripsCreateWithoutReviewInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsCreateNestedManyWithoutTripsInput
    includes?: includesCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesCreateNestedManyWithoutTripsInput
    uses?: usesCreateNestedManyWithoutTripsInput
  }

  export type tripsUncheckedCreateWithoutReviewInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTripsInput
    includes?: includesUncheckedCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesUncheckedCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesUncheckedCreateNestedManyWithoutTripsInput
    uses?: usesUncheckedCreateNestedManyWithoutTripsInput
  }

  export type tripsCreateOrConnectWithoutReviewInput = {
    where: tripsWhereUniqueInput
    create: XOR<tripsCreateWithoutReviewInput, tripsUncheckedCreateWithoutReviewInput>
  }

  export type usersUpsertWithoutReviewInput = {
    update: XOR<usersUpdateWithoutReviewInput, usersUncheckedUpdateWithoutReviewInput>
    create: XOR<usersCreateWithoutReviewInput, usersUncheckedCreateWithoutReviewInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewInput, usersUncheckedUpdateWithoutReviewInput>
  }

  export type usersUpdateWithoutReviewInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tripsUpsertWithoutReviewInput = {
    update: XOR<tripsUpdateWithoutReviewInput, tripsUncheckedUpdateWithoutReviewInput>
    create: XOR<tripsCreateWithoutReviewInput, tripsUncheckedCreateWithoutReviewInput>
    where?: tripsWhereInput
  }

  export type tripsUpdateToOneWithWhereWithoutReviewInput = {
    where?: tripsWhereInput
    data: XOR<tripsUpdateWithoutReviewInput, tripsUncheckedUpdateWithoutReviewInput>
  }

  export type tripsUpdateWithoutReviewInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUpdateManyWithoutTripsNestedInput
    includes?: includesUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUpdateManyWithoutTripsNestedInput
    uses?: usesUpdateManyWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutTripsNestedInput
    includes?: includesUncheckedUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUncheckedUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUncheckedUpdateManyWithoutTripsNestedInput
    uses?: usesUncheckedUpdateManyWithoutTripsNestedInput
  }

  export type tripsCreateWithoutTrip_datesInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsCreateNestedManyWithoutTripsInput
    includes?: includesCreateNestedManyWithoutTripsInput
    review?: reviewCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesCreateNestedManyWithoutTripsInput
    uses?: usesCreateNestedManyWithoutTripsInput
  }

  export type tripsUncheckedCreateWithoutTrip_datesInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTripsInput
    includes?: includesUncheckedCreateNestedManyWithoutTripsInput
    review?: reviewUncheckedCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesUncheckedCreateNestedManyWithoutTripsInput
    uses?: usesUncheckedCreateNestedManyWithoutTripsInput
  }

  export type tripsCreateOrConnectWithoutTrip_datesInput = {
    where: tripsWhereUniqueInput
    create: XOR<tripsCreateWithoutTrip_datesInput, tripsUncheckedCreateWithoutTrip_datesInput>
  }

  export type tripsUpsertWithoutTrip_datesInput = {
    update: XOR<tripsUpdateWithoutTrip_datesInput, tripsUncheckedUpdateWithoutTrip_datesInput>
    create: XOR<tripsCreateWithoutTrip_datesInput, tripsUncheckedCreateWithoutTrip_datesInput>
    where?: tripsWhereInput
  }

  export type tripsUpdateToOneWithWhereWithoutTrip_datesInput = {
    where?: tripsWhereInput
    data: XOR<tripsUpdateWithoutTrip_datesInput, tripsUncheckedUpdateWithoutTrip_datesInput>
  }

  export type tripsUpdateWithoutTrip_datesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUpdateManyWithoutTripsNestedInput
    includes?: includesUpdateManyWithoutTripsNestedInput
    review?: reviewUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUpdateManyWithoutTripsNestedInput
    uses?: usesUpdateManyWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateWithoutTrip_datesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutTripsNestedInput
    includes?: includesUncheckedUpdateManyWithoutTripsNestedInput
    review?: reviewUncheckedUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUncheckedUpdateManyWithoutTripsNestedInput
    uses?: usesUncheckedUpdateManyWithoutTripsNestedInput
  }

  export type tripsCreateWithoutTrip_imagesInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsCreateNestedManyWithoutTripsInput
    includes?: includesCreateNestedManyWithoutTripsInput
    review?: reviewCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesCreateNestedManyWithoutTripsInput
    uses?: usesCreateNestedManyWithoutTripsInput
  }

  export type tripsUncheckedCreateWithoutTrip_imagesInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTripsInput
    includes?: includesUncheckedCreateNestedManyWithoutTripsInput
    review?: reviewUncheckedCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesUncheckedCreateNestedManyWithoutTripsInput
    uses?: usesUncheckedCreateNestedManyWithoutTripsInput
  }

  export type tripsCreateOrConnectWithoutTrip_imagesInput = {
    where: tripsWhereUniqueInput
    create: XOR<tripsCreateWithoutTrip_imagesInput, tripsUncheckedCreateWithoutTrip_imagesInput>
  }

  export type tripsUpsertWithoutTrip_imagesInput = {
    update: XOR<tripsUpdateWithoutTrip_imagesInput, tripsUncheckedUpdateWithoutTrip_imagesInput>
    create: XOR<tripsCreateWithoutTrip_imagesInput, tripsUncheckedCreateWithoutTrip_imagesInput>
    where?: tripsWhereInput
  }

  export type tripsUpdateToOneWithWhereWithoutTrip_imagesInput = {
    where?: tripsWhereInput
    data: XOR<tripsUpdateWithoutTrip_imagesInput, tripsUncheckedUpdateWithoutTrip_imagesInput>
  }

  export type tripsUpdateWithoutTrip_imagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUpdateManyWithoutTripsNestedInput
    includes?: includesUpdateManyWithoutTripsNestedInput
    review?: reviewUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUpdateManyWithoutTripsNestedInput
    uses?: usesUpdateManyWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateWithoutTrip_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutTripsNestedInput
    includes?: includesUncheckedUpdateManyWithoutTripsNestedInput
    review?: reviewUncheckedUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUncheckedUpdateManyWithoutTripsNestedInput
    uses?: usesUncheckedUpdateManyWithoutTripsNestedInput
  }

  export type bookingsCreateWithoutTripsInput = {
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
    users: usersCreateNestedOneWithoutBookingsInput
    payments?: paymentsCreateNestedManyWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutTripsInput = {
    id?: number
    user_id: number
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutTripsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput>
  }

  export type bookingsCreateManyTripsInputEnvelope = {
    data: bookingsCreateManyTripsInput | bookingsCreateManyTripsInput[]
    skipDuplicates?: boolean
  }

  export type includesCreateWithoutTripsInput = {
    hotels: hotelsCreateNestedOneWithoutIncludesInput
  }

  export type includesUncheckedCreateWithoutTripsInput = {
    id?: number
    hotels_id: number
  }

  export type includesCreateOrConnectWithoutTripsInput = {
    where: includesWhereUniqueInput
    create: XOR<includesCreateWithoutTripsInput, includesUncheckedCreateWithoutTripsInput>
  }

  export type includesCreateManyTripsInputEnvelope = {
    data: includesCreateManyTripsInput | includesCreateManyTripsInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutTripsInput = {
    rating: number
    comment?: string | null
    created_at: Date | string
    users: usersCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutTripsInput = {
    id?: number
    user_id: number
    rating: number
    comment?: string | null
    created_at: Date | string
  }

  export type reviewCreateOrConnectWithoutTripsInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutTripsInput, reviewUncheckedCreateWithoutTripsInput>
  }

  export type reviewCreateManyTripsInputEnvelope = {
    data: reviewCreateManyTripsInput | reviewCreateManyTripsInput[]
    skipDuplicates?: boolean
  }

  export type trip_datesCreateWithoutTripsInput = {
    available_date: Date | string
  }

  export type trip_datesUncheckedCreateWithoutTripsInput = {
    id?: number
    available_date: Date | string
  }

  export type trip_datesCreateOrConnectWithoutTripsInput = {
    where: trip_datesWhereUniqueInput
    create: XOR<trip_datesCreateWithoutTripsInput, trip_datesUncheckedCreateWithoutTripsInput>
  }

  export type trip_datesCreateManyTripsInputEnvelope = {
    data: trip_datesCreateManyTripsInput | trip_datesCreateManyTripsInput[]
    skipDuplicates?: boolean
  }

  export type trip_imagesCreateWithoutTripsInput = {
    image_url: string
  }

  export type trip_imagesUncheckedCreateWithoutTripsInput = {
    id?: number
    image_url: string
  }

  export type trip_imagesCreateOrConnectWithoutTripsInput = {
    where: trip_imagesWhereUniqueInput
    create: XOR<trip_imagesCreateWithoutTripsInput, trip_imagesUncheckedCreateWithoutTripsInput>
  }

  export type trip_imagesCreateManyTripsInputEnvelope = {
    data: trip_imagesCreateManyTripsInput | trip_imagesCreateManyTripsInput[]
    skipDuplicates?: boolean
  }

  export type usesCreateWithoutTripsInput = {
    flights: flightsCreateNestedOneWithoutUsesInput
  }

  export type usesUncheckedCreateWithoutTripsInput = {
    id?: number
    flights_id: number
  }

  export type usesCreateOrConnectWithoutTripsInput = {
    where: usesWhereUniqueInput
    create: XOR<usesCreateWithoutTripsInput, usesUncheckedCreateWithoutTripsInput>
  }

  export type usesCreateManyTripsInputEnvelope = {
    data: usesCreateManyTripsInput | usesCreateManyTripsInput[]
    skipDuplicates?: boolean
  }

  export type bookingsUpsertWithWhereUniqueWithoutTripsInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutTripsInput, bookingsUncheckedUpdateWithoutTripsInput>
    create: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutTripsInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutTripsInput, bookingsUncheckedUpdateWithoutTripsInput>
  }

  export type bookingsUpdateManyWithWhereWithoutTripsInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutTripsInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id?: IntFilter<"bookings"> | number
    user_id?: IntFilter<"bookings"> | number
    trips_id?: IntFilter<"bookings"> | number
    travel_date?: DateTimeFilter<"bookings"> | Date | string
    travelers_count?: IntFilter<"bookings"> | number
    total_price?: DecimalFilter<"bookings"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"bookings"> | string
    created_at?: DateTimeFilter<"bookings"> | Date | string
  }

  export type includesUpsertWithWhereUniqueWithoutTripsInput = {
    where: includesWhereUniqueInput
    update: XOR<includesUpdateWithoutTripsInput, includesUncheckedUpdateWithoutTripsInput>
    create: XOR<includesCreateWithoutTripsInput, includesUncheckedCreateWithoutTripsInput>
  }

  export type includesUpdateWithWhereUniqueWithoutTripsInput = {
    where: includesWhereUniqueInput
    data: XOR<includesUpdateWithoutTripsInput, includesUncheckedUpdateWithoutTripsInput>
  }

  export type includesUpdateManyWithWhereWithoutTripsInput = {
    where: includesScalarWhereInput
    data: XOR<includesUpdateManyMutationInput, includesUncheckedUpdateManyWithoutTripsInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutTripsInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutTripsInput, reviewUncheckedUpdateWithoutTripsInput>
    create: XOR<reviewCreateWithoutTripsInput, reviewUncheckedCreateWithoutTripsInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutTripsInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutTripsInput, reviewUncheckedUpdateWithoutTripsInput>
  }

  export type reviewUpdateManyWithWhereWithoutTripsInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutTripsInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    id?: IntFilter<"review"> | number
    user_id?: IntFilter<"review"> | number
    trips_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeFilter<"review"> | Date | string
  }

  export type trip_datesUpsertWithWhereUniqueWithoutTripsInput = {
    where: trip_datesWhereUniqueInput
    update: XOR<trip_datesUpdateWithoutTripsInput, trip_datesUncheckedUpdateWithoutTripsInput>
    create: XOR<trip_datesCreateWithoutTripsInput, trip_datesUncheckedCreateWithoutTripsInput>
  }

  export type trip_datesUpdateWithWhereUniqueWithoutTripsInput = {
    where: trip_datesWhereUniqueInput
    data: XOR<trip_datesUpdateWithoutTripsInput, trip_datesUncheckedUpdateWithoutTripsInput>
  }

  export type trip_datesUpdateManyWithWhereWithoutTripsInput = {
    where: trip_datesScalarWhereInput
    data: XOR<trip_datesUpdateManyMutationInput, trip_datesUncheckedUpdateManyWithoutTripsInput>
  }

  export type trip_datesScalarWhereInput = {
    AND?: trip_datesScalarWhereInput | trip_datesScalarWhereInput[]
    OR?: trip_datesScalarWhereInput[]
    NOT?: trip_datesScalarWhereInput | trip_datesScalarWhereInput[]
    id?: IntFilter<"trip_dates"> | number
    trips_id?: IntFilter<"trip_dates"> | number
    available_date?: DateTimeFilter<"trip_dates"> | Date | string
  }

  export type trip_imagesUpsertWithWhereUniqueWithoutTripsInput = {
    where: trip_imagesWhereUniqueInput
    update: XOR<trip_imagesUpdateWithoutTripsInput, trip_imagesUncheckedUpdateWithoutTripsInput>
    create: XOR<trip_imagesCreateWithoutTripsInput, trip_imagesUncheckedCreateWithoutTripsInput>
  }

  export type trip_imagesUpdateWithWhereUniqueWithoutTripsInput = {
    where: trip_imagesWhereUniqueInput
    data: XOR<trip_imagesUpdateWithoutTripsInput, trip_imagesUncheckedUpdateWithoutTripsInput>
  }

  export type trip_imagesUpdateManyWithWhereWithoutTripsInput = {
    where: trip_imagesScalarWhereInput
    data: XOR<trip_imagesUpdateManyMutationInput, trip_imagesUncheckedUpdateManyWithoutTripsInput>
  }

  export type trip_imagesScalarWhereInput = {
    AND?: trip_imagesScalarWhereInput | trip_imagesScalarWhereInput[]
    OR?: trip_imagesScalarWhereInput[]
    NOT?: trip_imagesScalarWhereInput | trip_imagesScalarWhereInput[]
    id?: IntFilter<"trip_images"> | number
    trips_id?: IntFilter<"trip_images"> | number
    image_url?: StringFilter<"trip_images"> | string
  }

  export type usesUpsertWithWhereUniqueWithoutTripsInput = {
    where: usesWhereUniqueInput
    update: XOR<usesUpdateWithoutTripsInput, usesUncheckedUpdateWithoutTripsInput>
    create: XOR<usesCreateWithoutTripsInput, usesUncheckedCreateWithoutTripsInput>
  }

  export type usesUpdateWithWhereUniqueWithoutTripsInput = {
    where: usesWhereUniqueInput
    data: XOR<usesUpdateWithoutTripsInput, usesUncheckedUpdateWithoutTripsInput>
  }

  export type usesUpdateManyWithWhereWithoutTripsInput = {
    where: usesScalarWhereInput
    data: XOR<usesUpdateManyMutationInput, usesUncheckedUpdateManyWithoutTripsInput>
  }

  export type bookingsCreateWithoutUsersInput = {
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
    trips: tripsCreateNestedOneWithoutBookingsInput
    payments?: paymentsCreateNestedManyWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutUsersInput = {
    id?: number
    trips_id: number
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsCreateManyUsersInputEnvelope = {
    data: bookingsCreateManyUsersInput | bookingsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutUsersInput = {
    rating: number
    comment?: string | null
    created_at: Date | string
    trips: tripsCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutUsersInput = {
    id?: number
    trips_id: number
    rating: number
    comment?: string | null
    created_at: Date | string
  }

  export type reviewCreateOrConnectWithoutUsersInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput>
  }

  export type reviewCreateManyUsersInputEnvelope = {
    data: reviewCreateManyUsersInput | reviewCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type bookingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUsersInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUsersInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutUsersInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUsersInput, reviewUncheckedUpdateWithoutUsersInput>
    create: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUsersInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUsersInput, reviewUncheckedUpdateWithoutUsersInput>
  }

  export type reviewUpdateManyWithWhereWithoutUsersInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUsersInput>
  }

  export type tripsCreateWithoutUsesInput = {
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsCreateNestedManyWithoutTripsInput
    includes?: includesCreateNestedManyWithoutTripsInput
    review?: reviewCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesCreateNestedManyWithoutTripsInput
  }

  export type tripsUncheckedCreateWithoutUsesInput = {
    id?: number
    title: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    rating?: number | null
    created_at: Date | string
    countries_id?: number | null
    travel_types_id?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTripsInput
    includes?: includesUncheckedCreateNestedManyWithoutTripsInput
    review?: reviewUncheckedCreateNestedManyWithoutTripsInput
    trip_dates?: trip_datesUncheckedCreateNestedManyWithoutTripsInput
    trip_images?: trip_imagesUncheckedCreateNestedManyWithoutTripsInput
  }

  export type tripsCreateOrConnectWithoutUsesInput = {
    where: tripsWhereUniqueInput
    create: XOR<tripsCreateWithoutUsesInput, tripsUncheckedCreateWithoutUsesInput>
  }

  export type flightsCreateWithoutUsesInput = {
    airline: string
    duration: number
  }

  export type flightsUncheckedCreateWithoutUsesInput = {
    id?: number
    airline: string
    duration: number
  }

  export type flightsCreateOrConnectWithoutUsesInput = {
    where: flightsWhereUniqueInput
    create: XOR<flightsCreateWithoutUsesInput, flightsUncheckedCreateWithoutUsesInput>
  }

  export type tripsUpsertWithoutUsesInput = {
    update: XOR<tripsUpdateWithoutUsesInput, tripsUncheckedUpdateWithoutUsesInput>
    create: XOR<tripsCreateWithoutUsesInput, tripsUncheckedCreateWithoutUsesInput>
    where?: tripsWhereInput
  }

  export type tripsUpdateToOneWithWhereWithoutUsesInput = {
    where?: tripsWhereInput
    data: XOR<tripsUpdateWithoutUsesInput, tripsUncheckedUpdateWithoutUsesInput>
  }

  export type tripsUpdateWithoutUsesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUpdateManyWithoutTripsNestedInput
    includes?: includesUpdateManyWithoutTripsNestedInput
    review?: reviewUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUpdateManyWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateWithoutUsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries_id?: NullableIntFieldUpdateOperationsInput | number | null
    travel_types_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutTripsNestedInput
    includes?: includesUncheckedUpdateManyWithoutTripsNestedInput
    review?: reviewUncheckedUpdateManyWithoutTripsNestedInput
    trip_dates?: trip_datesUncheckedUpdateManyWithoutTripsNestedInput
    trip_images?: trip_imagesUncheckedUpdateManyWithoutTripsNestedInput
  }

  export type flightsUpsertWithoutUsesInput = {
    update: XOR<flightsUpdateWithoutUsesInput, flightsUncheckedUpdateWithoutUsesInput>
    create: XOR<flightsCreateWithoutUsesInput, flightsUncheckedCreateWithoutUsesInput>
    where?: flightsWhereInput
  }

  export type flightsUpdateToOneWithWhereWithoutUsesInput = {
    where?: flightsWhereInput
    data: XOR<flightsUpdateWithoutUsesInput, flightsUncheckedUpdateWithoutUsesInput>
  }

  export type flightsUpdateWithoutUsesInput = {
    airline?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type flightsUncheckedUpdateWithoutUsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    airline?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type paymentsCreateManyBookingsInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status: string
    created_at: Date | string
  }

  export type paymentsUpdateWithoutBookingsInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usesCreateManyFlightsInput = {
    id?: number
    trips_id: number
  }

  export type usesUpdateWithoutFlightsInput = {
    trips?: tripsUpdateOneRequiredWithoutUsesNestedInput
  }

  export type usesUncheckedUpdateWithoutFlightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
  }

  export type usesUncheckedUpdateManyWithoutFlightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
  }

  export type includesCreateManyHotelsInput = {
    id?: number
    trips_id: number
  }

  export type includesUpdateWithoutHotelsInput = {
    trips?: tripsUpdateOneRequiredWithoutIncludesNestedInput
  }

  export type includesUncheckedUpdateWithoutHotelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
  }

  export type includesUncheckedUpdateManyWithoutHotelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookingsCreateManyTripsInput = {
    id?: number
    user_id: number
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
  }

  export type includesCreateManyTripsInput = {
    id?: number
    hotels_id: number
  }

  export type reviewCreateManyTripsInput = {
    id?: number
    user_id: number
    rating: number
    comment?: string | null
    created_at: Date | string
  }

  export type trip_datesCreateManyTripsInput = {
    id?: number
    available_date: Date | string
  }

  export type trip_imagesCreateManyTripsInput = {
    id?: number
    image_url: string
  }

  export type usesCreateManyTripsInput = {
    id?: number
    flights_id: number
  }

  export type bookingsUpdateWithoutTripsInput = {
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
    payments?: paymentsUpdateManyWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type includesUpdateWithoutTripsInput = {
    hotels?: hotelsUpdateOneRequiredWithoutIncludesNestedInput
  }

  export type includesUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hotels_id?: IntFieldUpdateOperationsInput | number
  }

  export type includesUncheckedUpdateManyWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hotels_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUpdateWithoutTripsInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trip_datesUpdateWithoutTripsInput = {
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trip_datesUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trip_datesUncheckedUpdateManyWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trip_imagesUpdateWithoutTripsInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type trip_imagesUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type trip_imagesUncheckedUpdateManyWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type usesUpdateWithoutTripsInput = {
    flights?: flightsUpdateOneRequiredWithoutUsesNestedInput
  }

  export type usesUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    flights_id?: IntFieldUpdateOperationsInput | number
  }

  export type usesUncheckedUpdateManyWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    flights_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookingsCreateManyUsersInput = {
    id?: number
    trips_id: number
    travel_date: Date | string
    travelers_count: number
    total_price: Decimal | DecimalJsLike | number | string
    status: string
    created_at: Date | string
  }

  export type reviewCreateManyUsersInput = {
    id?: number
    trips_id: number
    rating: number
    comment?: string | null
    created_at: Date | string
  }

  export type bookingsUpdateWithoutUsersInput = {
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: tripsUpdateOneRequiredWithoutBookingsNestedInput
    payments?: paymentsUpdateManyWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    travel_date?: DateTimeFieldUpdateOperationsInput | Date | string
    travelers_count?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUpdateWithoutUsersInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: tripsUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    trips_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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