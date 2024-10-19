import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bpchar: { input: any; output: any; }
  date: { input: any; output: any; }
  numeric: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** columns and relationships of "Brand" */
export type Brand = {
  __typename?: 'Brand';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "Brand" */
export type Brand_Aggregate = {
  __typename?: 'Brand_aggregate';
  aggregate?: Maybe<Brand_Aggregate_Fields>;
  nodes: Array<Brand>;
};

/** aggregate fields of "Brand" */
export type Brand_Aggregate_Fields = {
  __typename?: 'Brand_aggregate_fields';
  avg?: Maybe<Brand_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Brand_Max_Fields>;
  min?: Maybe<Brand_Min_Fields>;
  stddev?: Maybe<Brand_Stddev_Fields>;
  stddev_pop?: Maybe<Brand_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Brand_Stddev_Samp_Fields>;
  sum?: Maybe<Brand_Sum_Fields>;
  var_pop?: Maybe<Brand_Var_Pop_Fields>;
  var_samp?: Maybe<Brand_Var_Samp_Fields>;
  variance?: Maybe<Brand_Variance_Fields>;
};


/** aggregate fields of "Brand" */
export type Brand_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Brand_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Brand_Avg_Fields = {
  __typename?: 'Brand_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Brand". All fields are combined with a logical 'AND'. */
export type Brand_Bool_Exp = {
  _and?: InputMaybe<Array<Brand_Bool_Exp>>;
  _not?: InputMaybe<Brand_Bool_Exp>;
  _or?: InputMaybe<Array<Brand_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Brand" */
export enum Brand_Constraint {
  /** unique or primary key constraint on columns "name" */
  BrandNameKey = 'Brand_name_key',
  /** unique or primary key constraint on columns "id" */
  BrandPkey = 'Brand_pkey'
}

/** input type for incrementing numeric columns in table "Brand" */
export type Brand_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Brand" */
export type Brand_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Brand_Max_Fields = {
  __typename?: 'Brand_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Brand_Min_Fields = {
  __typename?: 'Brand_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Brand" */
export type Brand_Mutation_Response = {
  __typename?: 'Brand_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Brand>;
};

/** on_conflict condition type for table "Brand" */
export type Brand_On_Conflict = {
  constraint: Brand_Constraint;
  update_columns?: Array<Brand_Update_Column>;
  where?: InputMaybe<Brand_Bool_Exp>;
};

/** Ordering options when selecting data from "Brand". */
export type Brand_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Brand */
export type Brand_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Brand" */
export enum Brand_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Brand" */
export type Brand_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Brand_Stddev_Fields = {
  __typename?: 'Brand_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Brand_Stddev_Pop_Fields = {
  __typename?: 'Brand_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Brand_Stddev_Samp_Fields = {
  __typename?: 'Brand_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Brand" */
export type Brand_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Brand_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Brand_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Brand_Sum_Fields = {
  __typename?: 'Brand_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Brand" */
export enum Brand_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Brand_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Brand_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Brand_Set_Input>;
  /** filter the rows which have to be updated */
  where: Brand_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Brand_Var_Pop_Fields = {
  __typename?: 'Brand_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Brand_Var_Samp_Fields = {
  __typename?: 'Brand_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Brand_Variance_Fields = {
  __typename?: 'Brand_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Category" */
export type Category = {
  __typename?: 'Category';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "Category" */
export type Category_Aggregate = {
  __typename?: 'Category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "Category" */
export type Category_Aggregate_Fields = {
  __typename?: 'Category_aggregate_fields';
  avg?: Maybe<Category_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
  stddev?: Maybe<Category_Stddev_Fields>;
  stddev_pop?: Maybe<Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Category_Stddev_Samp_Fields>;
  sum?: Maybe<Category_Sum_Fields>;
  var_pop?: Maybe<Category_Var_Pop_Fields>;
  var_samp?: Maybe<Category_Var_Samp_Fields>;
  variance?: Maybe<Category_Variance_Fields>;
};


/** aggregate fields of "Category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Category_Avg_Fields = {
  __typename?: 'Category_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Category" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "name" */
  CategoryNameKey = 'Category_name_key',
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'Category_pkey'
}

/** input type for incrementing numeric columns in table "Category" */
export type Category_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Category" */
export type Category_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'Category_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'Category_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Category" */
export type Category_Mutation_Response = {
  __typename?: 'Category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** on_conflict condition type for table "Category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "Category". */
export type Category_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Category */
export type Category_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Category" */
export enum Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Category" */
export type Category_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
  __typename?: 'Category_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
  __typename?: 'Category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
  __typename?: 'Category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Category_Sum_Fields = {
  __typename?: 'Category_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Category" */
export enum Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Category_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Category_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Category_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
  __typename?: 'Category_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
  __typename?: 'Category_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Category_Variance_Fields = {
  __typename?: 'Category_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "City" */
export type City = {
  __typename?: 'City';
  countryId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  stateId?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "City" */
export type City_Aggregate = {
  __typename?: 'City_aggregate';
  aggregate?: Maybe<City_Aggregate_Fields>;
  nodes: Array<City>;
};

/** aggregate fields of "City" */
export type City_Aggregate_Fields = {
  __typename?: 'City_aggregate_fields';
  avg?: Maybe<City_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<City_Max_Fields>;
  min?: Maybe<City_Min_Fields>;
  stddev?: Maybe<City_Stddev_Fields>;
  stddev_pop?: Maybe<City_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<City_Stddev_Samp_Fields>;
  sum?: Maybe<City_Sum_Fields>;
  var_pop?: Maybe<City_Var_Pop_Fields>;
  var_samp?: Maybe<City_Var_Samp_Fields>;
  variance?: Maybe<City_Variance_Fields>;
};


/** aggregate fields of "City" */
export type City_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<City_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type City_Avg_Fields = {
  __typename?: 'City_avg_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stateId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "City". All fields are combined with a logical 'AND'. */
export type City_Bool_Exp = {
  _and?: InputMaybe<Array<City_Bool_Exp>>;
  _not?: InputMaybe<City_Bool_Exp>;
  _or?: InputMaybe<Array<City_Bool_Exp>>;
  countryId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  stateId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "City" */
export enum City_Constraint {
  /** unique or primary key constraint on columns "id" */
  CityPkey = 'City_pkey'
}

/** input type for incrementing numeric columns in table "City" */
export type City_Inc_Input = {
  countryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "City" */
export type City_Insert_Input = {
  countryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type City_Max_Fields = {
  __typename?: 'City_max_fields';
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stateId?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type City_Min_Fields = {
  __typename?: 'City_min_fields';
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stateId?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "City" */
export type City_Mutation_Response = {
  __typename?: 'City_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<City>;
};

/** on_conflict condition type for table "City" */
export type City_On_Conflict = {
  constraint: City_Constraint;
  update_columns?: Array<City_Update_Column>;
  where?: InputMaybe<City_Bool_Exp>;
};

/** Ordering options when selecting data from "City". */
export type City_Order_By = {
  countryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  stateId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: City */
export type City_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "City" */
export enum City_Select_Column {
  /** column name */
  CountryId = 'countryId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'stateId'
}

/** input type for updating data in table "City" */
export type City_Set_Input = {
  countryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type City_Stddev_Fields = {
  __typename?: 'City_stddev_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stateId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type City_Stddev_Pop_Fields = {
  __typename?: 'City_stddev_pop_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stateId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type City_Stddev_Samp_Fields = {
  __typename?: 'City_stddev_samp_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stateId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "City" */
export type City_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: City_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type City_Stream_Cursor_Value_Input = {
  countryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type City_Sum_Fields = {
  __typename?: 'City_sum_fields';
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  stateId?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "City" */
export enum City_Update_Column {
  /** column name */
  CountryId = 'countryId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'stateId'
}

export type City_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<City_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<City_Set_Input>;
  /** filter the rows which have to be updated */
  where: City_Bool_Exp;
};

/** aggregate var_pop on columns */
export type City_Var_Pop_Fields = {
  __typename?: 'City_var_pop_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stateId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type City_Var_Samp_Fields = {
  __typename?: 'City_var_samp_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stateId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type City_Variance_Fields = {
  __typename?: 'City_variance_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stateId?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Color" */
export type Color = {
  __typename?: 'Color';
  displayOrder?: Maybe<Scalars['smallint']['output']>;
  hexCode: Scalars['bpchar']['output'];
  id: Scalars['Int']['output'];
  isShining: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "Color" */
export type Color_Aggregate = {
  __typename?: 'Color_aggregate';
  aggregate?: Maybe<Color_Aggregate_Fields>;
  nodes: Array<Color>;
};

/** aggregate fields of "Color" */
export type Color_Aggregate_Fields = {
  __typename?: 'Color_aggregate_fields';
  avg?: Maybe<Color_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Color_Max_Fields>;
  min?: Maybe<Color_Min_Fields>;
  stddev?: Maybe<Color_Stddev_Fields>;
  stddev_pop?: Maybe<Color_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Color_Stddev_Samp_Fields>;
  sum?: Maybe<Color_Sum_Fields>;
  var_pop?: Maybe<Color_Var_Pop_Fields>;
  var_samp?: Maybe<Color_Var_Samp_Fields>;
  variance?: Maybe<Color_Variance_Fields>;
};


/** aggregate fields of "Color" */
export type Color_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Color_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Color_Avg_Fields = {
  __typename?: 'Color_avg_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Color". All fields are combined with a logical 'AND'. */
export type Color_Bool_Exp = {
  _and?: InputMaybe<Array<Color_Bool_Exp>>;
  _not?: InputMaybe<Color_Bool_Exp>;
  _or?: InputMaybe<Array<Color_Bool_Exp>>;
  displayOrder?: InputMaybe<Smallint_Comparison_Exp>;
  hexCode?: InputMaybe<Bpchar_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isShining?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Color" */
export enum Color_Constraint {
  /** unique or primary key constraint on columns "name" */
  ColorsNameKey = 'Colors_name_key',
  /** unique or primary key constraint on columns "id" */
  ColorsPkey = 'Colors_pkey'
}

/** input type for incrementing numeric columns in table "Color" */
export type Color_Inc_Input = {
  displayOrder?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Color" */
export type Color_Insert_Input = {
  displayOrder?: InputMaybe<Scalars['smallint']['input']>;
  hexCode?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isShining?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Color_Max_Fields = {
  __typename?: 'Color_max_fields';
  displayOrder?: Maybe<Scalars['smallint']['output']>;
  hexCode?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Color_Min_Fields = {
  __typename?: 'Color_min_fields';
  displayOrder?: Maybe<Scalars['smallint']['output']>;
  hexCode?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Color" */
export type Color_Mutation_Response = {
  __typename?: 'Color_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Color>;
};

/** on_conflict condition type for table "Color" */
export type Color_On_Conflict = {
  constraint: Color_Constraint;
  update_columns?: Array<Color_Update_Column>;
  where?: InputMaybe<Color_Bool_Exp>;
};

/** Ordering options when selecting data from "Color". */
export type Color_Order_By = {
  displayOrder?: InputMaybe<Order_By>;
  hexCode?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isShining?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Color */
export type Color_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Color" */
export enum Color_Select_Column {
  /** column name */
  DisplayOrder = 'displayOrder',
  /** column name */
  HexCode = 'hexCode',
  /** column name */
  Id = 'id',
  /** column name */
  IsShining = 'isShining',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Color" */
export type Color_Set_Input = {
  displayOrder?: InputMaybe<Scalars['smallint']['input']>;
  hexCode?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isShining?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Color_Stddev_Fields = {
  __typename?: 'Color_stddev_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Color_Stddev_Pop_Fields = {
  __typename?: 'Color_stddev_pop_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Color_Stddev_Samp_Fields = {
  __typename?: 'Color_stddev_samp_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Color" */
export type Color_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Color_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Color_Stream_Cursor_Value_Input = {
  displayOrder?: InputMaybe<Scalars['smallint']['input']>;
  hexCode?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isShining?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Color_Sum_Fields = {
  __typename?: 'Color_sum_fields';
  displayOrder?: Maybe<Scalars['smallint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Color" */
export enum Color_Update_Column {
  /** column name */
  DisplayOrder = 'displayOrder',
  /** column name */
  HexCode = 'hexCode',
  /** column name */
  Id = 'id',
  /** column name */
  IsShining = 'isShining',
  /** column name */
  Name = 'name'
}

export type Color_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Color_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Color_Set_Input>;
  /** filter the rows which have to be updated */
  where: Color_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Color_Var_Pop_Fields = {
  __typename?: 'Color_var_pop_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Color_Var_Samp_Fields = {
  __typename?: 'Color_var_samp_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Color_Variance_Fields = {
  __typename?: 'Color_variance_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Condition" */
export type Condition = {
  __typename?: 'Condition';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "Condition" */
export type Condition_Aggregate = {
  __typename?: 'Condition_aggregate';
  aggregate?: Maybe<Condition_Aggregate_Fields>;
  nodes: Array<Condition>;
};

/** aggregate fields of "Condition" */
export type Condition_Aggregate_Fields = {
  __typename?: 'Condition_aggregate_fields';
  avg?: Maybe<Condition_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Condition_Max_Fields>;
  min?: Maybe<Condition_Min_Fields>;
  stddev?: Maybe<Condition_Stddev_Fields>;
  stddev_pop?: Maybe<Condition_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Condition_Stddev_Samp_Fields>;
  sum?: Maybe<Condition_Sum_Fields>;
  var_pop?: Maybe<Condition_Var_Pop_Fields>;
  var_samp?: Maybe<Condition_Var_Samp_Fields>;
  variance?: Maybe<Condition_Variance_Fields>;
};


/** aggregate fields of "Condition" */
export type Condition_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Condition_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Condition_Avg_Fields = {
  __typename?: 'Condition_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Condition". All fields are combined with a logical 'AND'. */
export type Condition_Bool_Exp = {
  _and?: InputMaybe<Array<Condition_Bool_Exp>>;
  _not?: InputMaybe<Condition_Bool_Exp>;
  _or?: InputMaybe<Array<Condition_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Condition" */
export enum Condition_Constraint {
  /** unique or primary key constraint on columns "name" */
  ConditionNameKey = 'Condition_name_key',
  /** unique or primary key constraint on columns "id" */
  ConditionPkey = 'Condition_pkey'
}

/** input type for incrementing numeric columns in table "Condition" */
export type Condition_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Condition" */
export type Condition_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Condition_Max_Fields = {
  __typename?: 'Condition_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Condition_Min_Fields = {
  __typename?: 'Condition_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Condition" */
export type Condition_Mutation_Response = {
  __typename?: 'Condition_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Condition>;
};

/** on_conflict condition type for table "Condition" */
export type Condition_On_Conflict = {
  constraint: Condition_Constraint;
  update_columns?: Array<Condition_Update_Column>;
  where?: InputMaybe<Condition_Bool_Exp>;
};

/** Ordering options when selecting data from "Condition". */
export type Condition_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Condition */
export type Condition_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Condition" */
export enum Condition_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Condition" */
export type Condition_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Condition_Stddev_Fields = {
  __typename?: 'Condition_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Condition_Stddev_Pop_Fields = {
  __typename?: 'Condition_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Condition_Stddev_Samp_Fields = {
  __typename?: 'Condition_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Condition" */
export type Condition_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Condition_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Condition_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Condition_Sum_Fields = {
  __typename?: 'Condition_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Condition" */
export enum Condition_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Condition_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Condition_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Condition_Set_Input>;
  /** filter the rows which have to be updated */
  where: Condition_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Condition_Var_Pop_Fields = {
  __typename?: 'Condition_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Condition_Var_Samp_Fields = {
  __typename?: 'Condition_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Condition_Variance_Fields = {
  __typename?: 'Condition_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Country" */
export type Country = {
  __typename?: 'Country';
  continent_code?: Maybe<Scalars['String']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  iso: Scalars['bpchar']['output'];
  iso3?: Maybe<Scalars['bpchar']['output']>;
  name: Scalars['String']['output'];
  phone_code: Scalars['smallint']['output'];
};

/** aggregated selection of "Country" */
export type Country_Aggregate = {
  __typename?: 'Country_aggregate';
  aggregate?: Maybe<Country_Aggregate_Fields>;
  nodes: Array<Country>;
};

/** aggregate fields of "Country" */
export type Country_Aggregate_Fields = {
  __typename?: 'Country_aggregate_fields';
  avg?: Maybe<Country_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Country_Max_Fields>;
  min?: Maybe<Country_Min_Fields>;
  stddev?: Maybe<Country_Stddev_Fields>;
  stddev_pop?: Maybe<Country_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Country_Stddev_Samp_Fields>;
  sum?: Maybe<Country_Sum_Fields>;
  var_pop?: Maybe<Country_Var_Pop_Fields>;
  var_samp?: Maybe<Country_Var_Samp_Fields>;
  variance?: Maybe<Country_Variance_Fields>;
};


/** aggregate fields of "Country" */
export type Country_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Country_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Country_Avg_Fields = {
  __typename?: 'Country_avg_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  phone_code?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Country". All fields are combined with a logical 'AND'. */
export type Country_Bool_Exp = {
  _and?: InputMaybe<Array<Country_Bool_Exp>>;
  _not?: InputMaybe<Country_Bool_Exp>;
  _or?: InputMaybe<Array<Country_Bool_Exp>>;
  continent_code?: InputMaybe<String_Comparison_Exp>;
  currency_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  iso?: InputMaybe<Bpchar_Comparison_Exp>;
  iso3?: InputMaybe<Bpchar_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone_code?: InputMaybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "Country" */
export enum Country_Constraint {
  /** unique or primary key constraint on columns "name" */
  CountryNameKey = 'Country_name_key',
  /** unique or primary key constraint on columns "id" */
  CountryPkey = 'Country_pkey'
}

/** input type for incrementing numeric columns in table "Country" */
export type Country_Inc_Input = {
  currency_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  phone_code?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "Country" */
export type Country_Insert_Input = {
  continent_code?: InputMaybe<Scalars['String']['input']>;
  currency_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  iso?: InputMaybe<Scalars['bpchar']['input']>;
  iso3?: InputMaybe<Scalars['bpchar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_code?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate max on columns */
export type Country_Max_Fields = {
  __typename?: 'Country_max_fields';
  continent_code?: Maybe<Scalars['String']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  iso?: Maybe<Scalars['bpchar']['output']>;
  iso3?: Maybe<Scalars['bpchar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_code?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate min on columns */
export type Country_Min_Fields = {
  __typename?: 'Country_min_fields';
  continent_code?: Maybe<Scalars['String']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  iso?: Maybe<Scalars['bpchar']['output']>;
  iso3?: Maybe<Scalars['bpchar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_code?: Maybe<Scalars['smallint']['output']>;
};

/** response of any mutation on the table "Country" */
export type Country_Mutation_Response = {
  __typename?: 'Country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Country>;
};

/** on_conflict condition type for table "Country" */
export type Country_On_Conflict = {
  constraint: Country_Constraint;
  update_columns?: Array<Country_Update_Column>;
  where?: InputMaybe<Country_Bool_Exp>;
};

/** Ordering options when selecting data from "Country". */
export type Country_Order_By = {
  continent_code?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  iso?: InputMaybe<Order_By>;
  iso3?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone_code?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Country */
export type Country_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Country" */
export enum Country_Select_Column {
  /** column name */
  ContinentCode = 'continent_code',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  Iso = 'iso',
  /** column name */
  Iso3 = 'iso3',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneCode = 'phone_code'
}

/** input type for updating data in table "Country" */
export type Country_Set_Input = {
  continent_code?: InputMaybe<Scalars['String']['input']>;
  currency_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  iso?: InputMaybe<Scalars['bpchar']['input']>;
  iso3?: InputMaybe<Scalars['bpchar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_code?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate stddev on columns */
export type Country_Stddev_Fields = {
  __typename?: 'Country_stddev_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  phone_code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Country_Stddev_Pop_Fields = {
  __typename?: 'Country_stddev_pop_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  phone_code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Country_Stddev_Samp_Fields = {
  __typename?: 'Country_stddev_samp_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  phone_code?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Country" */
export type Country_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Country_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Country_Stream_Cursor_Value_Input = {
  continent_code?: InputMaybe<Scalars['String']['input']>;
  currency_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  iso?: InputMaybe<Scalars['bpchar']['input']>;
  iso3?: InputMaybe<Scalars['bpchar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_code?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Country_Sum_Fields = {
  __typename?: 'Country_sum_fields';
  currency_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  phone_code?: Maybe<Scalars['smallint']['output']>;
};

/** update columns of table "Country" */
export enum Country_Update_Column {
  /** column name */
  ContinentCode = 'continent_code',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  Id = 'id',
  /** column name */
  Iso = 'iso',
  /** column name */
  Iso3 = 'iso3',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneCode = 'phone_code'
}

export type Country_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Country_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Country_Set_Input>;
  /** filter the rows which have to be updated */
  where: Country_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Country_Var_Pop_Fields = {
  __typename?: 'Country_var_pop_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  phone_code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Country_Var_Samp_Fields = {
  __typename?: 'Country_var_samp_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  phone_code?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Country_Variance_Fields = {
  __typename?: 'Country_variance_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  phone_code?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Currency" */
export type Currency = {
  __typename?: 'Currency';
  displayOrder?: Maybe<Scalars['smallint']['output']>;
  id: Scalars['Int']['output'];
  isoCode: Scalars['bpchar']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

/** aggregated selection of "Currency" */
export type Currency_Aggregate = {
  __typename?: 'Currency_aggregate';
  aggregate?: Maybe<Currency_Aggregate_Fields>;
  nodes: Array<Currency>;
};

/** aggregate fields of "Currency" */
export type Currency_Aggregate_Fields = {
  __typename?: 'Currency_aggregate_fields';
  avg?: Maybe<Currency_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Currency_Max_Fields>;
  min?: Maybe<Currency_Min_Fields>;
  stddev?: Maybe<Currency_Stddev_Fields>;
  stddev_pop?: Maybe<Currency_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Currency_Stddev_Samp_Fields>;
  sum?: Maybe<Currency_Sum_Fields>;
  var_pop?: Maybe<Currency_Var_Pop_Fields>;
  var_samp?: Maybe<Currency_Var_Samp_Fields>;
  variance?: Maybe<Currency_Variance_Fields>;
};


/** aggregate fields of "Currency" */
export type Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Currency_Avg_Fields = {
  __typename?: 'Currency_avg_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Currency". All fields are combined with a logical 'AND'. */
export type Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Currency_Bool_Exp>>;
  _not?: InputMaybe<Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Currency_Bool_Exp>>;
  displayOrder?: InputMaybe<Smallint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isoCode?: InputMaybe<Bpchar_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Currency" */
export enum Currency_Constraint {
  /** unique or primary key constraint on columns "iso_code" */
  CurrencyIsoCodeKey = 'currency_iso_code_key',
  /** unique or primary key constraint on columns "id" */
  CurrencyPkey = 'currency_pkey'
}

/** input type for incrementing numeric columns in table "Currency" */
export type Currency_Inc_Input = {
  displayOrder?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Currency" */
export type Currency_Insert_Input = {
  displayOrder?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isoCode?: InputMaybe<Scalars['bpchar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Currency_Max_Fields = {
  __typename?: 'Currency_max_fields';
  displayOrder?: Maybe<Scalars['smallint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isoCode?: Maybe<Scalars['bpchar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Currency_Min_Fields = {
  __typename?: 'Currency_min_fields';
  displayOrder?: Maybe<Scalars['smallint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isoCode?: Maybe<Scalars['bpchar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Currency" */
export type Currency_Mutation_Response = {
  __typename?: 'Currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Currency>;
};

/** on_conflict condition type for table "Currency" */
export type Currency_On_Conflict = {
  constraint: Currency_Constraint;
  update_columns?: Array<Currency_Update_Column>;
  where?: InputMaybe<Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "Currency". */
export type Currency_Order_By = {
  displayOrder?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isoCode?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Currency */
export type Currency_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Currency" */
export enum Currency_Select_Column {
  /** column name */
  DisplayOrder = 'displayOrder',
  /** column name */
  Id = 'id',
  /** column name */
  IsoCode = 'isoCode',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol'
}

/** input type for updating data in table "Currency" */
export type Currency_Set_Input = {
  displayOrder?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isoCode?: InputMaybe<Scalars['bpchar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Currency_Stddev_Fields = {
  __typename?: 'Currency_stddev_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Currency_Stddev_Pop_Fields = {
  __typename?: 'Currency_stddev_pop_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Currency_Stddev_Samp_Fields = {
  __typename?: 'Currency_stddev_samp_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Currency" */
export type Currency_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Currency_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Currency_Stream_Cursor_Value_Input = {
  displayOrder?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isoCode?: InputMaybe<Scalars['bpchar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Currency_Sum_Fields = {
  __typename?: 'Currency_sum_fields';
  displayOrder?: Maybe<Scalars['smallint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Currency" */
export enum Currency_Update_Column {
  /** column name */
  DisplayOrder = 'displayOrder',
  /** column name */
  Id = 'id',
  /** column name */
  IsoCode = 'isoCode',
  /** column name */
  Name = 'name',
  /** column name */
  Symbol = 'symbol'
}

export type Currency_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Currency_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Currency_Set_Input>;
  /** filter the rows which have to be updated */
  where: Currency_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Currency_Var_Pop_Fields = {
  __typename?: 'Currency_var_pop_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Currency_Var_Samp_Fields = {
  __typename?: 'Currency_var_samp_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Currency_Variance_Fields = {
  __typename?: 'Currency_variance_fields';
  displayOrder?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** columns and relationships of "Item" */
export type Item = {
  __typename?: 'Item';
  /** An array relationship */
  ItemTags: Array<ItemTag>;
  /** An aggregate relationship */
  ItemTags_aggregate: ItemTag_Aggregate;
  /** An array relationship */
  WantedItemTransactions: Array<WantedItemTransaction>;
  /** An aggregate relationship */
  WantedItemTransactions_aggregate: WantedItemTransaction_Aggregate;
  brand?: Maybe<Scalars['Int']['output']>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  condition?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  isWantedItem: Scalars['Boolean']['output'];
  mainColorId?: Maybe<Scalars['Int']['output']>;
  manufacturerDate?: Maybe<Scalars['date']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  private: Scalars['Boolean']['output'];
  quickInfo?: Maybe<Scalars['String']['output']>;
  shippingFromCity?: Maybe<Scalars['Int']['output']>;
  shippingFromCountry?: Maybe<Scalars['Int']['output']>;
  shippingFromState?: Maybe<Scalars['Int']['output']>;
  sizeId?: Maybe<Scalars['Int']['output']>;
  subcategoryId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "Item" */
export type ItemItemTagsArgs = {
  distinct_on?: InputMaybe<Array<ItemTag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ItemTag_Order_By>>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};


/** columns and relationships of "Item" */
export type ItemItemTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ItemTag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ItemTag_Order_By>>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};


/** columns and relationships of "Item" */
export type ItemWantedItemTransactionsArgs = {
  distinct_on?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WantedItemTransaction_Order_By>>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};


/** columns and relationships of "Item" */
export type ItemWantedItemTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WantedItemTransaction_Order_By>>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};

/** columns and relationships of "ItemTag" */
export type ItemTag = {
  __typename?: 'ItemTag';
  /** An object relationship */
  Item?: Maybe<Item>;
  /** An object relationship */
  Tag?: Maybe<Tag>;
  id: Scalars['Int']['output'];
  itemId?: Maybe<Scalars['uuid']['output']>;
  tagId?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "ItemTag" */
export type ItemTag_Aggregate = {
  __typename?: 'ItemTag_aggregate';
  aggregate?: Maybe<ItemTag_Aggregate_Fields>;
  nodes: Array<ItemTag>;
};

export type ItemTag_Aggregate_Bool_Exp = {
  count?: InputMaybe<ItemTag_Aggregate_Bool_Exp_Count>;
};

export type ItemTag_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ItemTag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ItemTag_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ItemTag" */
export type ItemTag_Aggregate_Fields = {
  __typename?: 'ItemTag_aggregate_fields';
  avg?: Maybe<ItemTag_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ItemTag_Max_Fields>;
  min?: Maybe<ItemTag_Min_Fields>;
  stddev?: Maybe<ItemTag_Stddev_Fields>;
  stddev_pop?: Maybe<ItemTag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ItemTag_Stddev_Samp_Fields>;
  sum?: Maybe<ItemTag_Sum_Fields>;
  var_pop?: Maybe<ItemTag_Var_Pop_Fields>;
  var_samp?: Maybe<ItemTag_Var_Samp_Fields>;
  variance?: Maybe<ItemTag_Variance_Fields>;
};


/** aggregate fields of "ItemTag" */
export type ItemTag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ItemTag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ItemTag" */
export type ItemTag_Aggregate_Order_By = {
  avg?: InputMaybe<ItemTag_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ItemTag_Max_Order_By>;
  min?: InputMaybe<ItemTag_Min_Order_By>;
  stddev?: InputMaybe<ItemTag_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ItemTag_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ItemTag_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ItemTag_Sum_Order_By>;
  var_pop?: InputMaybe<ItemTag_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ItemTag_Var_Samp_Order_By>;
  variance?: InputMaybe<ItemTag_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ItemTag" */
export type ItemTag_Arr_Rel_Insert_Input = {
  data: Array<ItemTag_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ItemTag_On_Conflict>;
};

/** aggregate avg on columns */
export type ItemTag_Avg_Fields = {
  __typename?: 'ItemTag_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tagId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ItemTag" */
export type ItemTag_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ItemTag". All fields are combined with a logical 'AND'. */
export type ItemTag_Bool_Exp = {
  Item?: InputMaybe<Item_Bool_Exp>;
  Tag?: InputMaybe<Tag_Bool_Exp>;
  _and?: InputMaybe<Array<ItemTag_Bool_Exp>>;
  _not?: InputMaybe<ItemTag_Bool_Exp>;
  _or?: InputMaybe<Array<ItemTag_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  itemId?: InputMaybe<Uuid_Comparison_Exp>;
  tagId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "ItemTag" */
export enum ItemTag_Constraint {
  /** unique or primary key constraint on columns "tag_id", "item_id" */
  ItemTagItemIdTagIdKey = 'ItemTag_item_id_tag_id_key',
  /** unique or primary key constraint on columns "id" */
  ItemTagPkey = 'ItemTag_pkey'
}

/** input type for incrementing numeric columns in table "ItemTag" */
export type ItemTag_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  tagId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "ItemTag" */
export type ItemTag_Insert_Input = {
  Item?: InputMaybe<Item_Obj_Rel_Insert_Input>;
  Tag?: InputMaybe<Tag_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  itemId?: InputMaybe<Scalars['uuid']['input']>;
  tagId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type ItemTag_Max_Fields = {
  __typename?: 'ItemTag_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  itemId?: Maybe<Scalars['uuid']['output']>;
  tagId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "ItemTag" */
export type ItemTag_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  itemId?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ItemTag_Min_Fields = {
  __typename?: 'ItemTag_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  itemId?: Maybe<Scalars['uuid']['output']>;
  tagId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "ItemTag" */
export type ItemTag_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  itemId?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ItemTag" */
export type ItemTag_Mutation_Response = {
  __typename?: 'ItemTag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ItemTag>;
};

/** on_conflict condition type for table "ItemTag" */
export type ItemTag_On_Conflict = {
  constraint: ItemTag_Constraint;
  update_columns?: Array<ItemTag_Update_Column>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};

/** Ordering options when selecting data from "ItemTag". */
export type ItemTag_Order_By = {
  Item?: InputMaybe<Item_Order_By>;
  Tag?: InputMaybe<Tag_Order_By>;
  id?: InputMaybe<Order_By>;
  itemId?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ItemTag */
export type ItemTag_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "ItemTag" */
export enum ItemTag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'itemId',
  /** column name */
  TagId = 'tagId'
}

/** input type for updating data in table "ItemTag" */
export type ItemTag_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  itemId?: InputMaybe<Scalars['uuid']['input']>;
  tagId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type ItemTag_Stddev_Fields = {
  __typename?: 'ItemTag_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tagId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ItemTag" */
export type ItemTag_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ItemTag_Stddev_Pop_Fields = {
  __typename?: 'ItemTag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tagId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ItemTag" */
export type ItemTag_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ItemTag_Stddev_Samp_Fields = {
  __typename?: 'ItemTag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tagId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ItemTag" */
export type ItemTag_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ItemTag" */
export type ItemTag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ItemTag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ItemTag_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  itemId?: InputMaybe<Scalars['uuid']['input']>;
  tagId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type ItemTag_Sum_Fields = {
  __typename?: 'ItemTag_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  tagId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "ItemTag" */
export type ItemTag_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** update columns of table "ItemTag" */
export enum ItemTag_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'itemId',
  /** column name */
  TagId = 'tagId'
}

export type ItemTag_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ItemTag_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ItemTag_Set_Input>;
  /** filter the rows which have to be updated */
  where: ItemTag_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ItemTag_Var_Pop_Fields = {
  __typename?: 'ItemTag_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tagId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ItemTag" */
export type ItemTag_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ItemTag_Var_Samp_Fields = {
  __typename?: 'ItemTag_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tagId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ItemTag" */
export type ItemTag_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ItemTag_Variance_Fields = {
  __typename?: 'ItemTag_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tagId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ItemTag" */
export type ItemTag_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  tagId?: InputMaybe<Order_By>;
};

/** aggregated selection of "Item" */
export type Item_Aggregate = {
  __typename?: 'Item_aggregate';
  aggregate?: Maybe<Item_Aggregate_Fields>;
  nodes: Array<Item>;
};

/** aggregate fields of "Item" */
export type Item_Aggregate_Fields = {
  __typename?: 'Item_aggregate_fields';
  avg?: Maybe<Item_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Item_Max_Fields>;
  min?: Maybe<Item_Min_Fields>;
  stddev?: Maybe<Item_Stddev_Fields>;
  stddev_pop?: Maybe<Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Item_Stddev_Samp_Fields>;
  sum?: Maybe<Item_Sum_Fields>;
  var_pop?: Maybe<Item_Var_Pop_Fields>;
  var_samp?: Maybe<Item_Var_Samp_Fields>;
  variance?: Maybe<Item_Variance_Fields>;
};


/** aggregate fields of "Item" */
export type Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Item_Avg_Fields = {
  __typename?: 'Item_avg_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  condition?: Maybe<Scalars['Float']['output']>;
  mainColorId?: Maybe<Scalars['Float']['output']>;
  shippingFromCity?: Maybe<Scalars['Float']['output']>;
  shippingFromCountry?: Maybe<Scalars['Float']['output']>;
  shippingFromState?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Item". All fields are combined with a logical 'AND'. */
export type Item_Bool_Exp = {
  ItemTags?: InputMaybe<ItemTag_Bool_Exp>;
  ItemTags_aggregate?: InputMaybe<ItemTag_Aggregate_Bool_Exp>;
  WantedItemTransactions?: InputMaybe<WantedItemTransaction_Bool_Exp>;
  WantedItemTransactions_aggregate?: InputMaybe<WantedItemTransaction_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Item_Bool_Exp>>;
  _not?: InputMaybe<Item_Bool_Exp>;
  _or?: InputMaybe<Array<Item_Bool_Exp>>;
  brand?: InputMaybe<Int_Comparison_Exp>;
  categoryId?: InputMaybe<Int_Comparison_Exp>;
  condition?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  images?: InputMaybe<String_Array_Comparison_Exp>;
  isWantedItem?: InputMaybe<Boolean_Comparison_Exp>;
  mainColorId?: InputMaybe<Int_Comparison_Exp>;
  manufacturerDate?: InputMaybe<Date_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  quickInfo?: InputMaybe<String_Comparison_Exp>;
  shippingFromCity?: InputMaybe<Int_Comparison_Exp>;
  shippingFromCountry?: InputMaybe<Int_Comparison_Exp>;
  shippingFromState?: InputMaybe<Int_Comparison_Exp>;
  sizeId?: InputMaybe<Int_Comparison_Exp>;
  subcategoryId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Item" */
export enum Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  ItemPkey = 'Item_pkey'
}

/** input type for incrementing numeric columns in table "Item" */
export type Item_Inc_Input = {
  brand?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<Scalars['Int']['input']>;
  mainColorId?: InputMaybe<Scalars['Int']['input']>;
  shippingFromCity?: InputMaybe<Scalars['Int']['input']>;
  shippingFromCountry?: InputMaybe<Scalars['Int']['input']>;
  shippingFromState?: InputMaybe<Scalars['Int']['input']>;
  sizeId?: InputMaybe<Scalars['Int']['input']>;
  subcategoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Item" */
export type Item_Insert_Input = {
  ItemTags?: InputMaybe<ItemTag_Arr_Rel_Insert_Input>;
  WantedItemTransactions?: InputMaybe<WantedItemTransaction_Arr_Rel_Insert_Input>;
  brand?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isWantedItem?: InputMaybe<Scalars['Boolean']['input']>;
  mainColorId?: InputMaybe<Scalars['Int']['input']>;
  manufacturerDate?: InputMaybe<Scalars['date']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  quickInfo?: InputMaybe<Scalars['String']['input']>;
  shippingFromCity?: InputMaybe<Scalars['Int']['input']>;
  shippingFromCountry?: InputMaybe<Scalars['Int']['input']>;
  shippingFromState?: InputMaybe<Scalars['Int']['input']>;
  sizeId?: InputMaybe<Scalars['Int']['input']>;
  subcategoryId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Item_Max_Fields = {
  __typename?: 'Item_max_fields';
  brand?: Maybe<Scalars['Int']['output']>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  condition?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  mainColorId?: Maybe<Scalars['Int']['output']>;
  manufacturerDate?: Maybe<Scalars['date']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quickInfo?: Maybe<Scalars['String']['output']>;
  shippingFromCity?: Maybe<Scalars['Int']['output']>;
  shippingFromCountry?: Maybe<Scalars['Int']['output']>;
  shippingFromState?: Maybe<Scalars['Int']['output']>;
  sizeId?: Maybe<Scalars['Int']['output']>;
  subcategoryId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Item_Min_Fields = {
  __typename?: 'Item_min_fields';
  brand?: Maybe<Scalars['Int']['output']>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  condition?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  mainColorId?: Maybe<Scalars['Int']['output']>;
  manufacturerDate?: Maybe<Scalars['date']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quickInfo?: Maybe<Scalars['String']['output']>;
  shippingFromCity?: Maybe<Scalars['Int']['output']>;
  shippingFromCountry?: Maybe<Scalars['Int']['output']>;
  shippingFromState?: Maybe<Scalars['Int']['output']>;
  sizeId?: Maybe<Scalars['Int']['output']>;
  subcategoryId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Item" */
export type Item_Mutation_Response = {
  __typename?: 'Item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Item>;
};

/** input type for inserting object relation for remote table "Item" */
export type Item_Obj_Rel_Insert_Input = {
  data: Item_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Item_On_Conflict>;
};

/** on_conflict condition type for table "Item" */
export type Item_On_Conflict = {
  constraint: Item_Constraint;
  update_columns?: Array<Item_Update_Column>;
  where?: InputMaybe<Item_Bool_Exp>;
};

/** Ordering options when selecting data from "Item". */
export type Item_Order_By = {
  ItemTags_aggregate?: InputMaybe<ItemTag_Aggregate_Order_By>;
  WantedItemTransactions_aggregate?: InputMaybe<WantedItemTransaction_Aggregate_Order_By>;
  brand?: InputMaybe<Order_By>;
  categoryId?: InputMaybe<Order_By>;
  condition?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images?: InputMaybe<Order_By>;
  isWantedItem?: InputMaybe<Order_By>;
  mainColorId?: InputMaybe<Order_By>;
  manufacturerDate?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  private?: InputMaybe<Order_By>;
  quickInfo?: InputMaybe<Order_By>;
  shippingFromCity?: InputMaybe<Order_By>;
  shippingFromCountry?: InputMaybe<Order_By>;
  shippingFromState?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Item */
export type Item_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "Item" */
export enum Item_Select_Column {
  /** column name */
  Brand = 'brand',
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  Condition = 'condition',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  IsWantedItem = 'isWantedItem',
  /** column name */
  MainColorId = 'mainColorId',
  /** column name */
  ManufacturerDate = 'manufacturerDate',
  /** column name */
  Model = 'model',
  /** column name */
  Name = 'name',
  /** column name */
  Private = 'private',
  /** column name */
  QuickInfo = 'quickInfo',
  /** column name */
  ShippingFromCity = 'shippingFromCity',
  /** column name */
  ShippingFromCountry = 'shippingFromCountry',
  /** column name */
  ShippingFromState = 'shippingFromState',
  /** column name */
  SizeId = 'sizeId',
  /** column name */
  SubcategoryId = 'subcategoryId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "Item" */
export type Item_Set_Input = {
  brand?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isWantedItem?: InputMaybe<Scalars['Boolean']['input']>;
  mainColorId?: InputMaybe<Scalars['Int']['input']>;
  manufacturerDate?: InputMaybe<Scalars['date']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  quickInfo?: InputMaybe<Scalars['String']['input']>;
  shippingFromCity?: InputMaybe<Scalars['Int']['input']>;
  shippingFromCountry?: InputMaybe<Scalars['Int']['input']>;
  shippingFromState?: InputMaybe<Scalars['Int']['input']>;
  sizeId?: InputMaybe<Scalars['Int']['input']>;
  subcategoryId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Item_Stddev_Fields = {
  __typename?: 'Item_stddev_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  condition?: Maybe<Scalars['Float']['output']>;
  mainColorId?: Maybe<Scalars['Float']['output']>;
  shippingFromCity?: Maybe<Scalars['Float']['output']>;
  shippingFromCountry?: Maybe<Scalars['Float']['output']>;
  shippingFromState?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Item_Stddev_Pop_Fields = {
  __typename?: 'Item_stddev_pop_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  condition?: Maybe<Scalars['Float']['output']>;
  mainColorId?: Maybe<Scalars['Float']['output']>;
  shippingFromCity?: Maybe<Scalars['Float']['output']>;
  shippingFromCountry?: Maybe<Scalars['Float']['output']>;
  shippingFromState?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Item_Stddev_Samp_Fields = {
  __typename?: 'Item_stddev_samp_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  condition?: Maybe<Scalars['Float']['output']>;
  mainColorId?: Maybe<Scalars['Float']['output']>;
  shippingFromCity?: Maybe<Scalars['Float']['output']>;
  shippingFromCountry?: Maybe<Scalars['Float']['output']>;
  shippingFromState?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Item" */
export type Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Item_Stream_Cursor_Value_Input = {
  brand?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  condition?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  isWantedItem?: InputMaybe<Scalars['Boolean']['input']>;
  mainColorId?: InputMaybe<Scalars['Int']['input']>;
  manufacturerDate?: InputMaybe<Scalars['date']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  quickInfo?: InputMaybe<Scalars['String']['input']>;
  shippingFromCity?: InputMaybe<Scalars['Int']['input']>;
  shippingFromCountry?: InputMaybe<Scalars['Int']['input']>;
  shippingFromState?: InputMaybe<Scalars['Int']['input']>;
  sizeId?: InputMaybe<Scalars['Int']['input']>;
  subcategoryId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Item_Sum_Fields = {
  __typename?: 'Item_sum_fields';
  brand?: Maybe<Scalars['Int']['output']>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  condition?: Maybe<Scalars['Int']['output']>;
  mainColorId?: Maybe<Scalars['Int']['output']>;
  shippingFromCity?: Maybe<Scalars['Int']['output']>;
  shippingFromCountry?: Maybe<Scalars['Int']['output']>;
  shippingFromState?: Maybe<Scalars['Int']['output']>;
  sizeId?: Maybe<Scalars['Int']['output']>;
  subcategoryId?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Item" */
export enum Item_Update_Column {
  /** column name */
  Brand = 'brand',
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  Condition = 'condition',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  IsWantedItem = 'isWantedItem',
  /** column name */
  MainColorId = 'mainColorId',
  /** column name */
  ManufacturerDate = 'manufacturerDate',
  /** column name */
  Model = 'model',
  /** column name */
  Name = 'name',
  /** column name */
  Private = 'private',
  /** column name */
  QuickInfo = 'quickInfo',
  /** column name */
  ShippingFromCity = 'shippingFromCity',
  /** column name */
  ShippingFromCountry = 'shippingFromCountry',
  /** column name */
  ShippingFromState = 'shippingFromState',
  /** column name */
  SizeId = 'sizeId',
  /** column name */
  SubcategoryId = 'subcategoryId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Item_Set_Input>;
  /** filter the rows which have to be updated */
  where: Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Item_Var_Pop_Fields = {
  __typename?: 'Item_var_pop_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  condition?: Maybe<Scalars['Float']['output']>;
  mainColorId?: Maybe<Scalars['Float']['output']>;
  shippingFromCity?: Maybe<Scalars['Float']['output']>;
  shippingFromCountry?: Maybe<Scalars['Float']['output']>;
  shippingFromState?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Item_Var_Samp_Fields = {
  __typename?: 'Item_var_samp_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  condition?: Maybe<Scalars['Float']['output']>;
  mainColorId?: Maybe<Scalars['Float']['output']>;
  shippingFromCity?: Maybe<Scalars['Float']['output']>;
  shippingFromCountry?: Maybe<Scalars['Float']['output']>;
  shippingFromState?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Item_Variance_Fields = {
  __typename?: 'Item_variance_fields';
  brand?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['Float']['output']>;
  condition?: Maybe<Scalars['Float']['output']>;
  mainColorId?: Maybe<Scalars['Float']['output']>;
  shippingFromCity?: Maybe<Scalars['Float']['output']>;
  shippingFromCountry?: Maybe<Scalars['Float']['output']>;
  shippingFromState?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Size" */
export type Size = {
  __typename?: 'Size';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "SizeSubcategory" */
export type SizeSubcategory = {
  __typename?: 'SizeSubcategory';
  /** An object relationship */
  Subcategory?: Maybe<Subcategory>;
  id: Scalars['Int']['output'];
  sizeId?: Maybe<Scalars['Int']['output']>;
  subcategoryId?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "SizeSubcategory" */
export type SizeSubcategory_Aggregate = {
  __typename?: 'SizeSubcategory_aggregate';
  aggregate?: Maybe<SizeSubcategory_Aggregate_Fields>;
  nodes: Array<SizeSubcategory>;
};

export type SizeSubcategory_Aggregate_Bool_Exp = {
  count?: InputMaybe<SizeSubcategory_Aggregate_Bool_Exp_Count>;
};

export type SizeSubcategory_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<SizeSubcategory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<SizeSubcategory_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "SizeSubcategory" */
export type SizeSubcategory_Aggregate_Fields = {
  __typename?: 'SizeSubcategory_aggregate_fields';
  avg?: Maybe<SizeSubcategory_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<SizeSubcategory_Max_Fields>;
  min?: Maybe<SizeSubcategory_Min_Fields>;
  stddev?: Maybe<SizeSubcategory_Stddev_Fields>;
  stddev_pop?: Maybe<SizeSubcategory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<SizeSubcategory_Stddev_Samp_Fields>;
  sum?: Maybe<SizeSubcategory_Sum_Fields>;
  var_pop?: Maybe<SizeSubcategory_Var_Pop_Fields>;
  var_samp?: Maybe<SizeSubcategory_Var_Samp_Fields>;
  variance?: Maybe<SizeSubcategory_Variance_Fields>;
};


/** aggregate fields of "SizeSubcategory" */
export type SizeSubcategory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<SizeSubcategory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "SizeSubcategory" */
export type SizeSubcategory_Aggregate_Order_By = {
  avg?: InputMaybe<SizeSubcategory_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<SizeSubcategory_Max_Order_By>;
  min?: InputMaybe<SizeSubcategory_Min_Order_By>;
  stddev?: InputMaybe<SizeSubcategory_Stddev_Order_By>;
  stddev_pop?: InputMaybe<SizeSubcategory_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<SizeSubcategory_Stddev_Samp_Order_By>;
  sum?: InputMaybe<SizeSubcategory_Sum_Order_By>;
  var_pop?: InputMaybe<SizeSubcategory_Var_Pop_Order_By>;
  var_samp?: InputMaybe<SizeSubcategory_Var_Samp_Order_By>;
  variance?: InputMaybe<SizeSubcategory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "SizeSubcategory" */
export type SizeSubcategory_Arr_Rel_Insert_Input = {
  data: Array<SizeSubcategory_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<SizeSubcategory_On_Conflict>;
};

/** aggregate avg on columns */
export type SizeSubcategory_Avg_Fields = {
  __typename?: 'SizeSubcategory_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "SizeSubcategory". All fields are combined with a logical 'AND'. */
export type SizeSubcategory_Bool_Exp = {
  Subcategory?: InputMaybe<Subcategory_Bool_Exp>;
  _and?: InputMaybe<Array<SizeSubcategory_Bool_Exp>>;
  _not?: InputMaybe<SizeSubcategory_Bool_Exp>;
  _or?: InputMaybe<Array<SizeSubcategory_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  sizeId?: InputMaybe<Int_Comparison_Exp>;
  subcategoryId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "SizeSubcategory" */
export enum SizeSubcategory_Constraint {
  /** unique or primary key constraint on columns "id" */
  SizeCategoryPkey = 'SizeCategory_pkey',
  /** unique or primary key constraint on columns "size_id", "subcategory_id" */
  UcSizecategory = 'uc_sizecategory'
}

/** input type for incrementing numeric columns in table "SizeSubcategory" */
export type SizeSubcategory_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sizeId?: InputMaybe<Scalars['Int']['input']>;
  subcategoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "SizeSubcategory" */
export type SizeSubcategory_Insert_Input = {
  Subcategory?: InputMaybe<Subcategory_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  sizeId?: InputMaybe<Scalars['Int']['input']>;
  subcategoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type SizeSubcategory_Max_Fields = {
  __typename?: 'SizeSubcategory_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  sizeId?: Maybe<Scalars['Int']['output']>;
  subcategoryId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type SizeSubcategory_Min_Fields = {
  __typename?: 'SizeSubcategory_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  sizeId?: Maybe<Scalars['Int']['output']>;
  subcategoryId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "SizeSubcategory" */
export type SizeSubcategory_Mutation_Response = {
  __typename?: 'SizeSubcategory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<SizeSubcategory>;
};

/** on_conflict condition type for table "SizeSubcategory" */
export type SizeSubcategory_On_Conflict = {
  constraint: SizeSubcategory_Constraint;
  update_columns?: Array<SizeSubcategory_Update_Column>;
  where?: InputMaybe<SizeSubcategory_Bool_Exp>;
};

/** Ordering options when selecting data from "SizeSubcategory". */
export type SizeSubcategory_Order_By = {
  Subcategory?: InputMaybe<Subcategory_Order_By>;
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: SizeSubcategory */
export type SizeSubcategory_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "SizeSubcategory" */
export enum SizeSubcategory_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  SizeId = 'sizeId',
  /** column name */
  SubcategoryId = 'subcategoryId'
}

/** input type for updating data in table "SizeSubcategory" */
export type SizeSubcategory_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sizeId?: InputMaybe<Scalars['Int']['input']>;
  subcategoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type SizeSubcategory_Stddev_Fields = {
  __typename?: 'SizeSubcategory_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type SizeSubcategory_Stddev_Pop_Fields = {
  __typename?: 'SizeSubcategory_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type SizeSubcategory_Stddev_Samp_Fields = {
  __typename?: 'SizeSubcategory_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "SizeSubcategory" */
export type SizeSubcategory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: SizeSubcategory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type SizeSubcategory_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sizeId?: InputMaybe<Scalars['Int']['input']>;
  subcategoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type SizeSubcategory_Sum_Fields = {
  __typename?: 'SizeSubcategory_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  sizeId?: Maybe<Scalars['Int']['output']>;
  subcategoryId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** update columns of table "SizeSubcategory" */
export enum SizeSubcategory_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  SizeId = 'sizeId',
  /** column name */
  SubcategoryId = 'subcategoryId'
}

export type SizeSubcategory_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<SizeSubcategory_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SizeSubcategory_Set_Input>;
  /** filter the rows which have to be updated */
  where: SizeSubcategory_Bool_Exp;
};

/** aggregate var_pop on columns */
export type SizeSubcategory_Var_Pop_Fields = {
  __typename?: 'SizeSubcategory_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type SizeSubcategory_Var_Samp_Fields = {
  __typename?: 'SizeSubcategory_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type SizeSubcategory_Variance_Fields = {
  __typename?: 'SizeSubcategory_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sizeId?: Maybe<Scalars['Float']['output']>;
  subcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "SizeSubcategory" */
export type SizeSubcategory_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  sizeId?: InputMaybe<Order_By>;
  subcategoryId?: InputMaybe<Order_By>;
};

/** aggregated selection of "Size" */
export type Size_Aggregate = {
  __typename?: 'Size_aggregate';
  aggregate?: Maybe<Size_Aggregate_Fields>;
  nodes: Array<Size>;
};

/** aggregate fields of "Size" */
export type Size_Aggregate_Fields = {
  __typename?: 'Size_aggregate_fields';
  avg?: Maybe<Size_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Size_Max_Fields>;
  min?: Maybe<Size_Min_Fields>;
  stddev?: Maybe<Size_Stddev_Fields>;
  stddev_pop?: Maybe<Size_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Size_Stddev_Samp_Fields>;
  sum?: Maybe<Size_Sum_Fields>;
  var_pop?: Maybe<Size_Var_Pop_Fields>;
  var_samp?: Maybe<Size_Var_Samp_Fields>;
  variance?: Maybe<Size_Variance_Fields>;
};


/** aggregate fields of "Size" */
export type Size_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Size_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Size_Avg_Fields = {
  __typename?: 'Size_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Size". All fields are combined with a logical 'AND'. */
export type Size_Bool_Exp = {
  _and?: InputMaybe<Array<Size_Bool_Exp>>;
  _not?: InputMaybe<Size_Bool_Exp>;
  _or?: InputMaybe<Array<Size_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Size" */
export enum Size_Constraint {
  /** unique or primary key constraint on columns "id" */
  SizePkey = 'Size_pkey'
}

/** input type for incrementing numeric columns in table "Size" */
export type Size_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Size" */
export type Size_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Size_Max_Fields = {
  __typename?: 'Size_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Size_Min_Fields = {
  __typename?: 'Size_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Size" */
export type Size_Mutation_Response = {
  __typename?: 'Size_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Size>;
};

/** on_conflict condition type for table "Size" */
export type Size_On_Conflict = {
  constraint: Size_Constraint;
  update_columns?: Array<Size_Update_Column>;
  where?: InputMaybe<Size_Bool_Exp>;
};

/** Ordering options when selecting data from "Size". */
export type Size_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Size */
export type Size_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Size" */
export enum Size_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Unit = 'unit',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "Size" */
export type Size_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Size_Stddev_Fields = {
  __typename?: 'Size_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Size_Stddev_Pop_Fields = {
  __typename?: 'Size_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Size_Stddev_Samp_Fields = {
  __typename?: 'Size_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Size" */
export type Size_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Size_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Size_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Size_Sum_Fields = {
  __typename?: 'Size_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Size" */
export enum Size_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Unit = 'unit',
  /** column name */
  Value = 'value'
}

export type Size_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Size_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Size_Set_Input>;
  /** filter the rows which have to be updated */
  where: Size_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Size_Var_Pop_Fields = {
  __typename?: 'Size_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Size_Var_Samp_Fields = {
  __typename?: 'Size_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Size_Variance_Fields = {
  __typename?: 'Size_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "State" */
export type State = {
  __typename?: 'State';
  abbreviation: Scalars['String']['output'];
  countryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "State" */
export type State_Aggregate = {
  __typename?: 'State_aggregate';
  aggregate?: Maybe<State_Aggregate_Fields>;
  nodes: Array<State>;
};

/** aggregate fields of "State" */
export type State_Aggregate_Fields = {
  __typename?: 'State_aggregate_fields';
  avg?: Maybe<State_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<State_Max_Fields>;
  min?: Maybe<State_Min_Fields>;
  stddev?: Maybe<State_Stddev_Fields>;
  stddev_pop?: Maybe<State_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<State_Stddev_Samp_Fields>;
  sum?: Maybe<State_Sum_Fields>;
  var_pop?: Maybe<State_Var_Pop_Fields>;
  var_samp?: Maybe<State_Var_Samp_Fields>;
  variance?: Maybe<State_Variance_Fields>;
};


/** aggregate fields of "State" */
export type State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type State_Avg_Fields = {
  __typename?: 'State_avg_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "State". All fields are combined with a logical 'AND'. */
export type State_Bool_Exp = {
  _and?: InputMaybe<Array<State_Bool_Exp>>;
  _not?: InputMaybe<State_Bool_Exp>;
  _or?: InputMaybe<Array<State_Bool_Exp>>;
  abbreviation?: InputMaybe<String_Comparison_Exp>;
  countryId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "State" */
export enum State_Constraint {
  /** unique or primary key constraint on columns "abbreviation" */
  CountryStateAbbreviationKey = 'CountryState_abbreviation_key',
  /** unique or primary key constraint on columns "name" */
  CountryStateNameKey = 'CountryState_name_key',
  /** unique or primary key constraint on columns "id" */
  CountryStatePkey = 'CountryState_pkey'
}

/** input type for incrementing numeric columns in table "State" */
export type State_Inc_Input = {
  countryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "State" */
export type State_Insert_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type State_Max_Fields = {
  __typename?: 'State_max_fields';
  abbreviation?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type State_Min_Fields = {
  __typename?: 'State_min_fields';
  abbreviation?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "State" */
export type State_Mutation_Response = {
  __typename?: 'State_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<State>;
};

/** on_conflict condition type for table "State" */
export type State_On_Conflict = {
  constraint: State_Constraint;
  update_columns?: Array<State_Update_Column>;
  where?: InputMaybe<State_Bool_Exp>;
};

/** Ordering options when selecting data from "State". */
export type State_Order_By = {
  abbreviation?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: State */
export type State_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "State" */
export enum State_Select_Column {
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CountryId = 'countryId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "State" */
export type State_Set_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type State_Stddev_Fields = {
  __typename?: 'State_stddev_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type State_Stddev_Pop_Fields = {
  __typename?: 'State_stddev_pop_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type State_Stddev_Samp_Fields = {
  __typename?: 'State_stddev_samp_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "State" */
export type State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type State_Stream_Cursor_Value_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type State_Sum_Fields = {
  __typename?: 'State_sum_fields';
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "State" */
export enum State_Update_Column {
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  CountryId = 'countryId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type State_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<State_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<State_Set_Input>;
  /** filter the rows which have to be updated */
  where: State_Bool_Exp;
};

/** aggregate var_pop on columns */
export type State_Var_Pop_Fields = {
  __typename?: 'State_var_pop_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type State_Var_Samp_Fields = {
  __typename?: 'State_var_samp_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type State_Variance_Fields = {
  __typename?: 'State_variance_fields';
  countryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Table for storing user's info from clerk - updates with webhooks */
export type StoreUser = {
  __typename?: 'StoreUser';
  createdAt: Scalars['timestamptz']['output'];
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  hasImage: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  primaryEmailAddress: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  username: Scalars['String']['output'];
};

/** aggregated selection of "StoreUser" */
export type StoreUser_Aggregate = {
  __typename?: 'StoreUser_aggregate';
  aggregate?: Maybe<StoreUser_Aggregate_Fields>;
  nodes: Array<StoreUser>;
};

/** aggregate fields of "StoreUser" */
export type StoreUser_Aggregate_Fields = {
  __typename?: 'StoreUser_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<StoreUser_Max_Fields>;
  min?: Maybe<StoreUser_Min_Fields>;
};


/** aggregate fields of "StoreUser" */
export type StoreUser_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<StoreUser_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "StoreUser". All fields are combined with a logical 'AND'. */
export type StoreUser_Bool_Exp = {
  _and?: InputMaybe<Array<StoreUser_Bool_Exp>>;
  _not?: InputMaybe<StoreUser_Bool_Exp>;
  _or?: InputMaybe<Array<StoreUser_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  hasImage?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  imageUrl?: InputMaybe<String_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  primaryEmailAddress?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "StoreUser" */
export enum StoreUser_Constraint {
  /** unique or primary key constraint on columns "id" */
  StoreUserPkey = 'StoreUser_pkey',
  /** unique or primary key constraint on columns "username" */
  StoreUserUsernameKey = 'StoreUser_username_key'
}

/** input type for inserting data into table "StoreUser" */
export type StoreUser_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  hasImage?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  primaryEmailAddress?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type StoreUser_Max_Fields = {
  __typename?: 'StoreUser_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  primaryEmailAddress?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type StoreUser_Min_Fields = {
  __typename?: 'StoreUser_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  primaryEmailAddress?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "StoreUser" */
export type StoreUser_Mutation_Response = {
  __typename?: 'StoreUser_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<StoreUser>;
};

/** on_conflict condition type for table "StoreUser" */
export type StoreUser_On_Conflict = {
  constraint: StoreUser_Constraint;
  update_columns?: Array<StoreUser_Update_Column>;
  where?: InputMaybe<StoreUser_Bool_Exp>;
};

/** Ordering options when selecting data from "StoreUser". */
export type StoreUser_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  hasImage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  primaryEmailAddress?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: StoreUser */
export type StoreUser_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "StoreUser" */
export enum StoreUser_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  FullName = 'fullName',
  /** column name */
  HasImage = 'hasImage',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PrimaryEmailAddress = 'primaryEmailAddress',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "StoreUser" */
export type StoreUser_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  hasImage?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  primaryEmailAddress?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "StoreUser" */
export type StoreUser_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: StoreUser_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type StoreUser_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  hasImage?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  primaryEmailAddress?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "StoreUser" */
export enum StoreUser_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  FullName = 'fullName',
  /** column name */
  HasImage = 'hasImage',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PrimaryEmailAddress = 'primaryEmailAddress',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

export type StoreUser_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StoreUser_Set_Input>;
  /** filter the rows which have to be updated */
  where: StoreUser_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "Subcategory" */
export type Subcategory = {
  __typename?: 'Subcategory';
  /** An array relationship */
  SizeSubcategories: Array<SizeSubcategory>;
  /** An aggregate relationship */
  SizeSubcategories_aggregate: SizeSubcategory_Aggregate;
  categoryId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  parentSubcategoryId?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "Subcategory" */
export type SubcategorySizeSubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<SizeSubcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SizeSubcategory_Order_By>>;
  where?: InputMaybe<SizeSubcategory_Bool_Exp>;
};


/** columns and relationships of "Subcategory" */
export type SubcategorySizeSubcategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SizeSubcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SizeSubcategory_Order_By>>;
  where?: InputMaybe<SizeSubcategory_Bool_Exp>;
};

/** aggregated selection of "Subcategory" */
export type Subcategory_Aggregate = {
  __typename?: 'Subcategory_aggregate';
  aggregate?: Maybe<Subcategory_Aggregate_Fields>;
  nodes: Array<Subcategory>;
};

/** aggregate fields of "Subcategory" */
export type Subcategory_Aggregate_Fields = {
  __typename?: 'Subcategory_aggregate_fields';
  avg?: Maybe<Subcategory_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Subcategory_Max_Fields>;
  min?: Maybe<Subcategory_Min_Fields>;
  stddev?: Maybe<Subcategory_Stddev_Fields>;
  stddev_pop?: Maybe<Subcategory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subcategory_Stddev_Samp_Fields>;
  sum?: Maybe<Subcategory_Sum_Fields>;
  var_pop?: Maybe<Subcategory_Var_Pop_Fields>;
  var_samp?: Maybe<Subcategory_Var_Samp_Fields>;
  variance?: Maybe<Subcategory_Variance_Fields>;
};


/** aggregate fields of "Subcategory" */
export type Subcategory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subcategory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Subcategory_Avg_Fields = {
  __typename?: 'Subcategory_avg_fields';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Subcategory". All fields are combined with a logical 'AND'. */
export type Subcategory_Bool_Exp = {
  SizeSubcategories?: InputMaybe<SizeSubcategory_Bool_Exp>;
  SizeSubcategories_aggregate?: InputMaybe<SizeSubcategory_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Subcategory_Bool_Exp>>;
  _not?: InputMaybe<Subcategory_Bool_Exp>;
  _or?: InputMaybe<Array<Subcategory_Bool_Exp>>;
  categoryId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  parentSubcategoryId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Subcategory" */
export enum Subcategory_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubcategoryPkey = 'Subcategory_pkey'
}

/** input type for incrementing numeric columns in table "Subcategory" */
export type Subcategory_Inc_Input = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  parentSubcategoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Subcategory" */
export type Subcategory_Insert_Input = {
  SizeSubcategories?: InputMaybe<SizeSubcategory_Arr_Rel_Insert_Input>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentSubcategoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Subcategory_Max_Fields = {
  __typename?: 'Subcategory_max_fields';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Subcategory_Min_Fields = {
  __typename?: 'Subcategory_min_fields';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "Subcategory" */
export type Subcategory_Mutation_Response = {
  __typename?: 'Subcategory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subcategory>;
};

/** input type for inserting object relation for remote table "Subcategory" */
export type Subcategory_Obj_Rel_Insert_Input = {
  data: Subcategory_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subcategory_On_Conflict>;
};

/** on_conflict condition type for table "Subcategory" */
export type Subcategory_On_Conflict = {
  constraint: Subcategory_Constraint;
  update_columns?: Array<Subcategory_Update_Column>;
  where?: InputMaybe<Subcategory_Bool_Exp>;
};

/** Ordering options when selecting data from "Subcategory". */
export type Subcategory_Order_By = {
  SizeSubcategories_aggregate?: InputMaybe<SizeSubcategory_Aggregate_Order_By>;
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parentSubcategoryId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Subcategory */
export type Subcategory_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Subcategory" */
export enum Subcategory_Select_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentSubcategoryId = 'parentSubcategoryId'
}

/** input type for updating data in table "Subcategory" */
export type Subcategory_Set_Input = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentSubcategoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Subcategory_Stddev_Fields = {
  __typename?: 'Subcategory_stddev_fields';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Subcategory_Stddev_Pop_Fields = {
  __typename?: 'Subcategory_stddev_pop_fields';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Subcategory_Stddev_Samp_Fields = {
  __typename?: 'Subcategory_stddev_samp_fields';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Subcategory" */
export type Subcategory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subcategory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subcategory_Stream_Cursor_Value_Input = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentSubcategoryId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Subcategory_Sum_Fields = {
  __typename?: 'Subcategory_sum_fields';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Subcategory" */
export enum Subcategory_Update_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentSubcategoryId = 'parentSubcategoryId'
}

export type Subcategory_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subcategory_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subcategory_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subcategory_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subcategory_Var_Pop_Fields = {
  __typename?: 'Subcategory_var_pop_fields';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Subcategory_Var_Samp_Fields = {
  __typename?: 'Subcategory_var_samp_fields';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Subcategory_Variance_Fields = {
  __typename?: 'Subcategory_variance_fields';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parentSubcategoryId?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Tag" */
export type Tag = {
  __typename?: 'Tag';
  /** An array relationship */
  TagItems: Array<ItemTag>;
  /** An aggregate relationship */
  TagItems_aggregate: ItemTag_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};


/** columns and relationships of "Tag" */
export type TagTagItemsArgs = {
  distinct_on?: InputMaybe<Array<ItemTag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ItemTag_Order_By>>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};


/** columns and relationships of "Tag" */
export type TagTagItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ItemTag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ItemTag_Order_By>>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};

/** aggregated selection of "Tag" */
export type Tag_Aggregate = {
  __typename?: 'Tag_aggregate';
  aggregate?: Maybe<Tag_Aggregate_Fields>;
  nodes: Array<Tag>;
};

/** aggregate fields of "Tag" */
export type Tag_Aggregate_Fields = {
  __typename?: 'Tag_aggregate_fields';
  avg?: Maybe<Tag_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Tag_Max_Fields>;
  min?: Maybe<Tag_Min_Fields>;
  stddev?: Maybe<Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Sum_Fields>;
  var_pop?: Maybe<Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Var_Samp_Fields>;
  variance?: Maybe<Tag_Variance_Fields>;
};


/** aggregate fields of "Tag" */
export type Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Tag_Avg_Fields = {
  __typename?: 'Tag_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Tag". All fields are combined with a logical 'AND'. */
export type Tag_Bool_Exp = {
  TagItems?: InputMaybe<ItemTag_Bool_Exp>;
  TagItems_aggregate?: InputMaybe<ItemTag_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Tag_Bool_Exp>>;
  _not?: InputMaybe<Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Tag_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Tag" */
export enum Tag_Constraint {
  /** unique or primary key constraint on columns "name" */
  TagNameKey = 'Tag_name_key',
  /** unique or primary key constraint on columns "id" */
  TagPkey = 'Tag_pkey'
}

/** input type for incrementing numeric columns in table "Tag" */
export type Tag_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Tag" */
export type Tag_Insert_Input = {
  TagItems?: InputMaybe<ItemTag_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Tag_Max_Fields = {
  __typename?: 'Tag_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Tag_Min_Fields = {
  __typename?: 'Tag_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Tag" */
export type Tag_Mutation_Response = {
  __typename?: 'Tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tag>;
};

/** input type for inserting object relation for remote table "Tag" */
export type Tag_Obj_Rel_Insert_Input = {
  data: Tag_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tag_On_Conflict>;
};

/** on_conflict condition type for table "Tag" */
export type Tag_On_Conflict = {
  constraint: Tag_Constraint;
  update_columns?: Array<Tag_Update_Column>;
  where?: InputMaybe<Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "Tag". */
export type Tag_Order_By = {
  TagItems_aggregate?: InputMaybe<ItemTag_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Tag */
export type Tag_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Tag" */
export enum Tag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Tag" */
export type Tag_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Tag_Stddev_Fields = {
  __typename?: 'Tag_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Tag_Stddev_Pop_Fields = {
  __typename?: 'Tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Tag_Stddev_Samp_Fields = {
  __typename?: 'Tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Tag" */
export type Tag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tag_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Tag_Sum_Fields = {
  __typename?: 'Tag_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Tag" */
export enum Tag_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Tag_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tag_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tag_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tag_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tag_Var_Pop_Fields = {
  __typename?: 'Tag_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Tag_Var_Samp_Fields = {
  __typename?: 'Tag_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Tag_Variance_Fields = {
  __typename?: 'Tag_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Table for swaps that users post */
export type Transaction = {
  __typename?: 'Transaction';
  /** An array relationship */
  WantedItemTransactions: Array<WantedItemTransaction>;
  /** An aggregate relationship */
  WantedItemTransactions_aggregate: WantedItemTransaction_Aggregate;
  availableUntil?: Maybe<Scalars['timestamp']['output']>;
  completedAt?: Maybe<Scalars['timestamptz']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  currencyId?: Maybe<Scalars['Int']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['numeric']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['numeric']['output']>;
  id: Scalars['uuid']['output'];
  isCompleted: Scalars['Boolean']['output'];
  offeredItemId?: Maybe<Scalars['uuid']['output']>;
  seekingItemId?: Maybe<Scalars['uuid']['output']>;
  swapForAnyItem?: Maybe<Scalars['Boolean']['output']>;
  transactionTypeId: Scalars['Int']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  userId: Scalars['String']['output'];
  willPayExtra?: Maybe<Scalars['Boolean']['output']>;
  willReceiveExtra?: Maybe<Scalars['Boolean']['output']>;
};


/** Table for swaps that users post */
export type TransactionWantedItemTransactionsArgs = {
  distinct_on?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WantedItemTransaction_Order_By>>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};


/** Table for swaps that users post */
export type TransactionWantedItemTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WantedItemTransaction_Order_By>>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};

/** columns and relationships of "TransactionType" */
export type TransactionType = {
  __typename?: 'TransactionType';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "TransactionType" */
export type TransactionType_Aggregate = {
  __typename?: 'TransactionType_aggregate';
  aggregate?: Maybe<TransactionType_Aggregate_Fields>;
  nodes: Array<TransactionType>;
};

/** aggregate fields of "TransactionType" */
export type TransactionType_Aggregate_Fields = {
  __typename?: 'TransactionType_aggregate_fields';
  avg?: Maybe<TransactionType_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<TransactionType_Max_Fields>;
  min?: Maybe<TransactionType_Min_Fields>;
  stddev?: Maybe<TransactionType_Stddev_Fields>;
  stddev_pop?: Maybe<TransactionType_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TransactionType_Stddev_Samp_Fields>;
  sum?: Maybe<TransactionType_Sum_Fields>;
  var_pop?: Maybe<TransactionType_Var_Pop_Fields>;
  var_samp?: Maybe<TransactionType_Var_Samp_Fields>;
  variance?: Maybe<TransactionType_Variance_Fields>;
};


/** aggregate fields of "TransactionType" */
export type TransactionType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TransactionType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type TransactionType_Avg_Fields = {
  __typename?: 'TransactionType_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "TransactionType". All fields are combined with a logical 'AND'. */
export type TransactionType_Bool_Exp = {
  _and?: InputMaybe<Array<TransactionType_Bool_Exp>>;
  _not?: InputMaybe<TransactionType_Bool_Exp>;
  _or?: InputMaybe<Array<TransactionType_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "TransactionType" */
export enum TransactionType_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionTypePkey = 'TransactionType_pkey'
}

/** input type for incrementing numeric columns in table "TransactionType" */
export type TransactionType_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "TransactionType" */
export type TransactionType_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type TransactionType_Max_Fields = {
  __typename?: 'TransactionType_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type TransactionType_Min_Fields = {
  __typename?: 'TransactionType_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "TransactionType" */
export type TransactionType_Mutation_Response = {
  __typename?: 'TransactionType_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<TransactionType>;
};

/** on_conflict condition type for table "TransactionType" */
export type TransactionType_On_Conflict = {
  constraint: TransactionType_Constraint;
  update_columns?: Array<TransactionType_Update_Column>;
  where?: InputMaybe<TransactionType_Bool_Exp>;
};

/** Ordering options when selecting data from "TransactionType". */
export type TransactionType_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: TransactionType */
export type TransactionType_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "TransactionType" */
export enum TransactionType_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "TransactionType" */
export type TransactionType_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type TransactionType_Stddev_Fields = {
  __typename?: 'TransactionType_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type TransactionType_Stddev_Pop_Fields = {
  __typename?: 'TransactionType_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type TransactionType_Stddev_Samp_Fields = {
  __typename?: 'TransactionType_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "TransactionType" */
export type TransactionType_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TransactionType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TransactionType_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type TransactionType_Sum_Fields = {
  __typename?: 'TransactionType_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "TransactionType" */
export enum TransactionType_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type TransactionType_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TransactionType_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TransactionType_Set_Input>;
  /** filter the rows which have to be updated */
  where: TransactionType_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TransactionType_Var_Pop_Fields = {
  __typename?: 'TransactionType_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type TransactionType_Var_Samp_Fields = {
  __typename?: 'TransactionType_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type TransactionType_Variance_Fields = {
  __typename?: 'TransactionType_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregated selection of "Transaction" */
export type Transaction_Aggregate = {
  __typename?: 'Transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "Transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'Transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "Transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'Transaction_avg_fields';
  currencyId?: Maybe<Scalars['Float']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['Float']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['Float']['output']>;
  transactionTypeId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  WantedItemTransactions?: InputMaybe<WantedItemTransaction_Bool_Exp>;
  WantedItemTransactions_aggregate?: InputMaybe<WantedItemTransaction_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  availableUntil?: InputMaybe<Timestamp_Comparison_Exp>;
  completedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currencyId?: InputMaybe<Int_Comparison_Exp>;
  extraPayMaxAmount?: InputMaybe<Numeric_Comparison_Exp>;
  extraReceiveMaxAmount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isCompleted?: InputMaybe<Boolean_Comparison_Exp>;
  offeredItemId?: InputMaybe<Uuid_Comparison_Exp>;
  seekingItemId?: InputMaybe<Uuid_Comparison_Exp>;
  swapForAnyItem?: InputMaybe<Boolean_Comparison_Exp>;
  transactionTypeId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  willPayExtra?: InputMaybe<Boolean_Comparison_Exp>;
  willReceiveExtra?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "Transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionPkey = 'Transaction_pkey'
}

/** input type for incrementing numeric columns in table "Transaction" */
export type Transaction_Inc_Input = {
  currencyId?: InputMaybe<Scalars['Int']['input']>;
  extraPayMaxAmount?: InputMaybe<Scalars['numeric']['input']>;
  extraReceiveMaxAmount?: InputMaybe<Scalars['numeric']['input']>;
  transactionTypeId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Transaction" */
export type Transaction_Insert_Input = {
  WantedItemTransactions?: InputMaybe<WantedItemTransaction_Arr_Rel_Insert_Input>;
  availableUntil?: InputMaybe<Scalars['timestamp']['input']>;
  completedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currencyId?: InputMaybe<Scalars['Int']['input']>;
  extraPayMaxAmount?: InputMaybe<Scalars['numeric']['input']>;
  extraReceiveMaxAmount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  offeredItemId?: InputMaybe<Scalars['uuid']['input']>;
  seekingItemId?: InputMaybe<Scalars['uuid']['input']>;
  swapForAnyItem?: InputMaybe<Scalars['Boolean']['input']>;
  transactionTypeId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  willPayExtra?: InputMaybe<Scalars['Boolean']['input']>;
  willReceiveExtra?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'Transaction_max_fields';
  availableUntil?: Maybe<Scalars['timestamp']['output']>;
  completedAt?: Maybe<Scalars['timestamptz']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currencyId?: Maybe<Scalars['Int']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['numeric']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  offeredItemId?: Maybe<Scalars['uuid']['output']>;
  seekingItemId?: Maybe<Scalars['uuid']['output']>;
  transactionTypeId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'Transaction_min_fields';
  availableUntil?: Maybe<Scalars['timestamp']['output']>;
  completedAt?: Maybe<Scalars['timestamptz']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currencyId?: Maybe<Scalars['Int']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['numeric']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  offeredItemId?: Maybe<Scalars['uuid']['output']>;
  seekingItemId?: Maybe<Scalars['uuid']['output']>;
  transactionTypeId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'Transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** input type for inserting object relation for remote table "Transaction" */
export type Transaction_Obj_Rel_Insert_Input = {
  data: Transaction_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** on_conflict condition type for table "Transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "Transaction". */
export type Transaction_Order_By = {
  WantedItemTransactions_aggregate?: InputMaybe<WantedItemTransaction_Aggregate_Order_By>;
  availableUntil?: InputMaybe<Order_By>;
  completedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currencyId?: InputMaybe<Order_By>;
  extraPayMaxAmount?: InputMaybe<Order_By>;
  extraReceiveMaxAmount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isCompleted?: InputMaybe<Order_By>;
  offeredItemId?: InputMaybe<Order_By>;
  seekingItemId?: InputMaybe<Order_By>;
  swapForAnyItem?: InputMaybe<Order_By>;
  transactionTypeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  willPayExtra?: InputMaybe<Order_By>;
  willReceiveExtra?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Transaction */
export type Transaction_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "Transaction" */
export enum Transaction_Select_Column {
  /** column name */
  AvailableUntil = 'availableUntil',
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  ExtraPayMaxAmount = 'extraPayMaxAmount',
  /** column name */
  ExtraReceiveMaxAmount = 'extraReceiveMaxAmount',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'isCompleted',
  /** column name */
  OfferedItemId = 'offeredItemId',
  /** column name */
  SeekingItemId = 'seekingItemId',
  /** column name */
  SwapForAnyItem = 'swapForAnyItem',
  /** column name */
  TransactionTypeId = 'transactionTypeId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WillPayExtra = 'willPayExtra',
  /** column name */
  WillReceiveExtra = 'willReceiveExtra'
}

/** input type for updating data in table "Transaction" */
export type Transaction_Set_Input = {
  availableUntil?: InputMaybe<Scalars['timestamp']['input']>;
  completedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currencyId?: InputMaybe<Scalars['Int']['input']>;
  extraPayMaxAmount?: InputMaybe<Scalars['numeric']['input']>;
  extraReceiveMaxAmount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  offeredItemId?: InputMaybe<Scalars['uuid']['input']>;
  seekingItemId?: InputMaybe<Scalars['uuid']['input']>;
  swapForAnyItem?: InputMaybe<Scalars['Boolean']['input']>;
  transactionTypeId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  willPayExtra?: InputMaybe<Scalars['Boolean']['input']>;
  willReceiveExtra?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'Transaction_stddev_fields';
  currencyId?: Maybe<Scalars['Float']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['Float']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['Float']['output']>;
  transactionTypeId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'Transaction_stddev_pop_fields';
  currencyId?: Maybe<Scalars['Float']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['Float']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['Float']['output']>;
  transactionTypeId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'Transaction_stddev_samp_fields';
  currencyId?: Maybe<Scalars['Float']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['Float']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['Float']['output']>;
  transactionTypeId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  availableUntil?: InputMaybe<Scalars['timestamp']['input']>;
  completedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currencyId?: InputMaybe<Scalars['Int']['input']>;
  extraPayMaxAmount?: InputMaybe<Scalars['numeric']['input']>;
  extraReceiveMaxAmount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  offeredItemId?: InputMaybe<Scalars['uuid']['input']>;
  seekingItemId?: InputMaybe<Scalars['uuid']['input']>;
  swapForAnyItem?: InputMaybe<Scalars['Boolean']['input']>;
  transactionTypeId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  willPayExtra?: InputMaybe<Scalars['Boolean']['input']>;
  willReceiveExtra?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'Transaction_sum_fields';
  currencyId?: Maybe<Scalars['Int']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['numeric']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['numeric']['output']>;
  transactionTypeId?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Transaction" */
export enum Transaction_Update_Column {
  /** column name */
  AvailableUntil = 'availableUntil',
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  ExtraPayMaxAmount = 'extraPayMaxAmount',
  /** column name */
  ExtraReceiveMaxAmount = 'extraReceiveMaxAmount',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'isCompleted',
  /** column name */
  OfferedItemId = 'offeredItemId',
  /** column name */
  SeekingItemId = 'seekingItemId',
  /** column name */
  SwapForAnyItem = 'swapForAnyItem',
  /** column name */
  TransactionTypeId = 'transactionTypeId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WillPayExtra = 'willPayExtra',
  /** column name */
  WillReceiveExtra = 'willReceiveExtra'
}

export type Transaction_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'Transaction_var_pop_fields';
  currencyId?: Maybe<Scalars['Float']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['Float']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['Float']['output']>;
  transactionTypeId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'Transaction_var_samp_fields';
  currencyId?: Maybe<Scalars['Float']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['Float']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['Float']['output']>;
  transactionTypeId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'Transaction_variance_fields';
  currencyId?: Maybe<Scalars['Float']['output']>;
  extraPayMaxAmount?: Maybe<Scalars['Float']['output']>;
  extraReceiveMaxAmount?: Maybe<Scalars['Float']['output']>;
  transactionTypeId?: Maybe<Scalars['Float']['output']>;
};

/** Table that connects wanted items from a 'swap' type transaction, so user items that he/she would like to swap for his/her item */
export type WantedItemTransaction = {
  __typename?: 'WantedItemTransaction';
  /** An object relationship */
  Item: Item;
  /** An object relationship */
  Transaction: Transaction;
  id: Scalars['uuid']['output'];
  transaction_id: Scalars['uuid']['output'];
  wanted_item_id: Scalars['uuid']['output'];
};

/** aggregated selection of "WantedItemTransaction" */
export type WantedItemTransaction_Aggregate = {
  __typename?: 'WantedItemTransaction_aggregate';
  aggregate?: Maybe<WantedItemTransaction_Aggregate_Fields>;
  nodes: Array<WantedItemTransaction>;
};

export type WantedItemTransaction_Aggregate_Bool_Exp = {
  count?: InputMaybe<WantedItemTransaction_Aggregate_Bool_Exp_Count>;
};

export type WantedItemTransaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<WantedItemTransaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "WantedItemTransaction" */
export type WantedItemTransaction_Aggregate_Fields = {
  __typename?: 'WantedItemTransaction_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<WantedItemTransaction_Max_Fields>;
  min?: Maybe<WantedItemTransaction_Min_Fields>;
};


/** aggregate fields of "WantedItemTransaction" */
export type WantedItemTransaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "WantedItemTransaction" */
export type WantedItemTransaction_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<WantedItemTransaction_Max_Order_By>;
  min?: InputMaybe<WantedItemTransaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "WantedItemTransaction" */
export type WantedItemTransaction_Arr_Rel_Insert_Input = {
  data: Array<WantedItemTransaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<WantedItemTransaction_On_Conflict>;
};

/** Boolean expression to filter rows from the table "WantedItemTransaction". All fields are combined with a logical 'AND'. */
export type WantedItemTransaction_Bool_Exp = {
  Item?: InputMaybe<Item_Bool_Exp>;
  Transaction?: InputMaybe<Transaction_Bool_Exp>;
  _and?: InputMaybe<Array<WantedItemTransaction_Bool_Exp>>;
  _not?: InputMaybe<WantedItemTransaction_Bool_Exp>;
  _or?: InputMaybe<Array<WantedItemTransaction_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  transaction_id?: InputMaybe<Uuid_Comparison_Exp>;
  wanted_item_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "WantedItemTransaction" */
export enum WantedItemTransaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  WantedItemTransactionPkey = 'WantedItemTransaction_pkey',
  /** unique or primary key constraint on columns "transaction_id", "wanted_item_id" */
  WantedItemTransactionWantedItemIdTransactionIdKey = 'WantedItemTransaction_wanted_item_id_transaction_id_key'
}

/** input type for inserting data into table "WantedItemTransaction" */
export type WantedItemTransaction_Insert_Input = {
  Item?: InputMaybe<Item_Obj_Rel_Insert_Input>;
  Transaction?: InputMaybe<Transaction_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  wanted_item_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type WantedItemTransaction_Max_Fields = {
  __typename?: 'WantedItemTransaction_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  transaction_id?: Maybe<Scalars['uuid']['output']>;
  wanted_item_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "WantedItemTransaction" */
export type WantedItemTransaction_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  wanted_item_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type WantedItemTransaction_Min_Fields = {
  __typename?: 'WantedItemTransaction_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  transaction_id?: Maybe<Scalars['uuid']['output']>;
  wanted_item_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "WantedItemTransaction" */
export type WantedItemTransaction_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  wanted_item_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "WantedItemTransaction" */
export type WantedItemTransaction_Mutation_Response = {
  __typename?: 'WantedItemTransaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<WantedItemTransaction>;
};

/** on_conflict condition type for table "WantedItemTransaction" */
export type WantedItemTransaction_On_Conflict = {
  constraint: WantedItemTransaction_Constraint;
  update_columns?: Array<WantedItemTransaction_Update_Column>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};

/** Ordering options when selecting data from "WantedItemTransaction". */
export type WantedItemTransaction_Order_By = {
  Item?: InputMaybe<Item_Order_By>;
  Transaction?: InputMaybe<Transaction_Order_By>;
  id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  wanted_item_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: WantedItemTransaction */
export type WantedItemTransaction_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "WantedItemTransaction" */
export enum WantedItemTransaction_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  WantedItemId = 'wanted_item_id'
}

/** input type for updating data in table "WantedItemTransaction" */
export type WantedItemTransaction_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  wanted_item_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "WantedItemTransaction" */
export type WantedItemTransaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: WantedItemTransaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type WantedItemTransaction_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  wanted_item_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "WantedItemTransaction" */
export enum WantedItemTransaction_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  WantedItemId = 'wanted_item_id'
}

export type WantedItemTransaction_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WantedItemTransaction_Set_Input>;
  /** filter the rows which have to be updated */
  where: WantedItemTransaction_Bool_Exp;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Brand" */
  delete_Brand?: Maybe<Brand_Mutation_Response>;
  /** delete single row from the table: "Brand" */
  delete_Brand_by_pk?: Maybe<Brand>;
  /** delete data from the table: "Category" */
  delete_Category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "Category" */
  delete_Category_by_pk?: Maybe<Category>;
  /** delete data from the table: "City" */
  delete_City?: Maybe<City_Mutation_Response>;
  /** delete single row from the table: "City" */
  delete_City_by_pk?: Maybe<City>;
  /** delete data from the table: "Color" */
  delete_Color?: Maybe<Color_Mutation_Response>;
  /** delete single row from the table: "Color" */
  delete_Color_by_pk?: Maybe<Color>;
  /** delete data from the table: "Condition" */
  delete_Condition?: Maybe<Condition_Mutation_Response>;
  /** delete single row from the table: "Condition" */
  delete_Condition_by_pk?: Maybe<Condition>;
  /** delete data from the table: "Country" */
  delete_Country?: Maybe<Country_Mutation_Response>;
  /** delete single row from the table: "Country" */
  delete_Country_by_pk?: Maybe<Country>;
  /** delete data from the table: "Currency" */
  delete_Currency?: Maybe<Currency_Mutation_Response>;
  /** delete single row from the table: "Currency" */
  delete_Currency_by_pk?: Maybe<Currency>;
  /** delete data from the table: "Item" */
  delete_Item?: Maybe<Item_Mutation_Response>;
  /** delete data from the table: "ItemTag" */
  delete_ItemTag?: Maybe<ItemTag_Mutation_Response>;
  /** delete single row from the table: "ItemTag" */
  delete_ItemTag_by_pk?: Maybe<ItemTag>;
  /** delete single row from the table: "Item" */
  delete_Item_by_pk?: Maybe<Item>;
  /** delete data from the table: "Size" */
  delete_Size?: Maybe<Size_Mutation_Response>;
  /** delete data from the table: "SizeSubcategory" */
  delete_SizeSubcategory?: Maybe<SizeSubcategory_Mutation_Response>;
  /** delete single row from the table: "SizeSubcategory" */
  delete_SizeSubcategory_by_pk?: Maybe<SizeSubcategory>;
  /** delete single row from the table: "Size" */
  delete_Size_by_pk?: Maybe<Size>;
  /** delete data from the table: "State" */
  delete_State?: Maybe<State_Mutation_Response>;
  /** delete single row from the table: "State" */
  delete_State_by_pk?: Maybe<State>;
  /** delete data from the table: "StoreUser" */
  delete_StoreUser?: Maybe<StoreUser_Mutation_Response>;
  /** delete single row from the table: "StoreUser" */
  delete_StoreUser_by_pk?: Maybe<StoreUser>;
  /** delete data from the table: "Subcategory" */
  delete_Subcategory?: Maybe<Subcategory_Mutation_Response>;
  /** delete single row from the table: "Subcategory" */
  delete_Subcategory_by_pk?: Maybe<Subcategory>;
  /** delete data from the table: "Tag" */
  delete_Tag?: Maybe<Tag_Mutation_Response>;
  /** delete single row from the table: "Tag" */
  delete_Tag_by_pk?: Maybe<Tag>;
  /** delete data from the table: "Transaction" */
  delete_Transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete data from the table: "TransactionType" */
  delete_TransactionType?: Maybe<TransactionType_Mutation_Response>;
  /** delete single row from the table: "TransactionType" */
  delete_TransactionType_by_pk?: Maybe<TransactionType>;
  /** delete single row from the table: "Transaction" */
  delete_Transaction_by_pk?: Maybe<Transaction>;
  /** delete data from the table: "WantedItemTransaction" */
  delete_WantedItemTransaction?: Maybe<WantedItemTransaction_Mutation_Response>;
  /** delete single row from the table: "WantedItemTransaction" */
  delete_WantedItemTransaction_by_pk?: Maybe<WantedItemTransaction>;
  /** insert data into the table: "Brand" */
  insert_Brand?: Maybe<Brand_Mutation_Response>;
  /** insert a single row into the table: "Brand" */
  insert_Brand_one?: Maybe<Brand>;
  /** insert data into the table: "Category" */
  insert_Category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "Category" */
  insert_Category_one?: Maybe<Category>;
  /** insert data into the table: "City" */
  insert_City?: Maybe<City_Mutation_Response>;
  /** insert a single row into the table: "City" */
  insert_City_one?: Maybe<City>;
  /** insert data into the table: "Color" */
  insert_Color?: Maybe<Color_Mutation_Response>;
  /** insert a single row into the table: "Color" */
  insert_Color_one?: Maybe<Color>;
  /** insert data into the table: "Condition" */
  insert_Condition?: Maybe<Condition_Mutation_Response>;
  /** insert a single row into the table: "Condition" */
  insert_Condition_one?: Maybe<Condition>;
  /** insert data into the table: "Country" */
  insert_Country?: Maybe<Country_Mutation_Response>;
  /** insert a single row into the table: "Country" */
  insert_Country_one?: Maybe<Country>;
  /** insert data into the table: "Currency" */
  insert_Currency?: Maybe<Currency_Mutation_Response>;
  /** insert a single row into the table: "Currency" */
  insert_Currency_one?: Maybe<Currency>;
  /** insert data into the table: "Item" */
  insert_Item?: Maybe<Item_Mutation_Response>;
  /** insert data into the table: "ItemTag" */
  insert_ItemTag?: Maybe<ItemTag_Mutation_Response>;
  /** insert a single row into the table: "ItemTag" */
  insert_ItemTag_one?: Maybe<ItemTag>;
  /** insert a single row into the table: "Item" */
  insert_Item_one?: Maybe<Item>;
  /** insert data into the table: "Size" */
  insert_Size?: Maybe<Size_Mutation_Response>;
  /** insert data into the table: "SizeSubcategory" */
  insert_SizeSubcategory?: Maybe<SizeSubcategory_Mutation_Response>;
  /** insert a single row into the table: "SizeSubcategory" */
  insert_SizeSubcategory_one?: Maybe<SizeSubcategory>;
  /** insert a single row into the table: "Size" */
  insert_Size_one?: Maybe<Size>;
  /** insert data into the table: "State" */
  insert_State?: Maybe<State_Mutation_Response>;
  /** insert a single row into the table: "State" */
  insert_State_one?: Maybe<State>;
  /** insert data into the table: "StoreUser" */
  insert_StoreUser?: Maybe<StoreUser_Mutation_Response>;
  /** insert a single row into the table: "StoreUser" */
  insert_StoreUser_one?: Maybe<StoreUser>;
  /** insert data into the table: "Subcategory" */
  insert_Subcategory?: Maybe<Subcategory_Mutation_Response>;
  /** insert a single row into the table: "Subcategory" */
  insert_Subcategory_one?: Maybe<Subcategory>;
  /** insert data into the table: "Tag" */
  insert_Tag?: Maybe<Tag_Mutation_Response>;
  /** insert a single row into the table: "Tag" */
  insert_Tag_one?: Maybe<Tag>;
  /** insert data into the table: "Transaction" */
  insert_Transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert data into the table: "TransactionType" */
  insert_TransactionType?: Maybe<TransactionType_Mutation_Response>;
  /** insert a single row into the table: "TransactionType" */
  insert_TransactionType_one?: Maybe<TransactionType>;
  /** insert a single row into the table: "Transaction" */
  insert_Transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "WantedItemTransaction" */
  insert_WantedItemTransaction?: Maybe<WantedItemTransaction_Mutation_Response>;
  /** insert a single row into the table: "WantedItemTransaction" */
  insert_WantedItemTransaction_one?: Maybe<WantedItemTransaction>;
  /** update data of the table: "Brand" */
  update_Brand?: Maybe<Brand_Mutation_Response>;
  /** update single row of the table: "Brand" */
  update_Brand_by_pk?: Maybe<Brand>;
  /** update multiples rows of table: "Brand" */
  update_Brand_many?: Maybe<Array<Maybe<Brand_Mutation_Response>>>;
  /** update data of the table: "Category" */
  update_Category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "Category" */
  update_Category_by_pk?: Maybe<Category>;
  /** update multiples rows of table: "Category" */
  update_Category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
  /** update data of the table: "City" */
  update_City?: Maybe<City_Mutation_Response>;
  /** update single row of the table: "City" */
  update_City_by_pk?: Maybe<City>;
  /** update multiples rows of table: "City" */
  update_City_many?: Maybe<Array<Maybe<City_Mutation_Response>>>;
  /** update data of the table: "Color" */
  update_Color?: Maybe<Color_Mutation_Response>;
  /** update single row of the table: "Color" */
  update_Color_by_pk?: Maybe<Color>;
  /** update multiples rows of table: "Color" */
  update_Color_many?: Maybe<Array<Maybe<Color_Mutation_Response>>>;
  /** update data of the table: "Condition" */
  update_Condition?: Maybe<Condition_Mutation_Response>;
  /** update single row of the table: "Condition" */
  update_Condition_by_pk?: Maybe<Condition>;
  /** update multiples rows of table: "Condition" */
  update_Condition_many?: Maybe<Array<Maybe<Condition_Mutation_Response>>>;
  /** update data of the table: "Country" */
  update_Country?: Maybe<Country_Mutation_Response>;
  /** update single row of the table: "Country" */
  update_Country_by_pk?: Maybe<Country>;
  /** update multiples rows of table: "Country" */
  update_Country_many?: Maybe<Array<Maybe<Country_Mutation_Response>>>;
  /** update data of the table: "Currency" */
  update_Currency?: Maybe<Currency_Mutation_Response>;
  /** update single row of the table: "Currency" */
  update_Currency_by_pk?: Maybe<Currency>;
  /** update multiples rows of table: "Currency" */
  update_Currency_many?: Maybe<Array<Maybe<Currency_Mutation_Response>>>;
  /** update data of the table: "Item" */
  update_Item?: Maybe<Item_Mutation_Response>;
  /** update data of the table: "ItemTag" */
  update_ItemTag?: Maybe<ItemTag_Mutation_Response>;
  /** update single row of the table: "ItemTag" */
  update_ItemTag_by_pk?: Maybe<ItemTag>;
  /** update multiples rows of table: "ItemTag" */
  update_ItemTag_many?: Maybe<Array<Maybe<ItemTag_Mutation_Response>>>;
  /** update single row of the table: "Item" */
  update_Item_by_pk?: Maybe<Item>;
  /** update multiples rows of table: "Item" */
  update_Item_many?: Maybe<Array<Maybe<Item_Mutation_Response>>>;
  /** update data of the table: "Size" */
  update_Size?: Maybe<Size_Mutation_Response>;
  /** update data of the table: "SizeSubcategory" */
  update_SizeSubcategory?: Maybe<SizeSubcategory_Mutation_Response>;
  /** update single row of the table: "SizeSubcategory" */
  update_SizeSubcategory_by_pk?: Maybe<SizeSubcategory>;
  /** update multiples rows of table: "SizeSubcategory" */
  update_SizeSubcategory_many?: Maybe<Array<Maybe<SizeSubcategory_Mutation_Response>>>;
  /** update single row of the table: "Size" */
  update_Size_by_pk?: Maybe<Size>;
  /** update multiples rows of table: "Size" */
  update_Size_many?: Maybe<Array<Maybe<Size_Mutation_Response>>>;
  /** update data of the table: "State" */
  update_State?: Maybe<State_Mutation_Response>;
  /** update single row of the table: "State" */
  update_State_by_pk?: Maybe<State>;
  /** update multiples rows of table: "State" */
  update_State_many?: Maybe<Array<Maybe<State_Mutation_Response>>>;
  /** update data of the table: "StoreUser" */
  update_StoreUser?: Maybe<StoreUser_Mutation_Response>;
  /** update single row of the table: "StoreUser" */
  update_StoreUser_by_pk?: Maybe<StoreUser>;
  /** update multiples rows of table: "StoreUser" */
  update_StoreUser_many?: Maybe<Array<Maybe<StoreUser_Mutation_Response>>>;
  /** update data of the table: "Subcategory" */
  update_Subcategory?: Maybe<Subcategory_Mutation_Response>;
  /** update single row of the table: "Subcategory" */
  update_Subcategory_by_pk?: Maybe<Subcategory>;
  /** update multiples rows of table: "Subcategory" */
  update_Subcategory_many?: Maybe<Array<Maybe<Subcategory_Mutation_Response>>>;
  /** update data of the table: "Tag" */
  update_Tag?: Maybe<Tag_Mutation_Response>;
  /** update single row of the table: "Tag" */
  update_Tag_by_pk?: Maybe<Tag>;
  /** update multiples rows of table: "Tag" */
  update_Tag_many?: Maybe<Array<Maybe<Tag_Mutation_Response>>>;
  /** update data of the table: "Transaction" */
  update_Transaction?: Maybe<Transaction_Mutation_Response>;
  /** update data of the table: "TransactionType" */
  update_TransactionType?: Maybe<TransactionType_Mutation_Response>;
  /** update single row of the table: "TransactionType" */
  update_TransactionType_by_pk?: Maybe<TransactionType>;
  /** update multiples rows of table: "TransactionType" */
  update_TransactionType_many?: Maybe<Array<Maybe<TransactionType_Mutation_Response>>>;
  /** update single row of the table: "Transaction" */
  update_Transaction_by_pk?: Maybe<Transaction>;
  /** update multiples rows of table: "Transaction" */
  update_Transaction_many?: Maybe<Array<Maybe<Transaction_Mutation_Response>>>;
  /** update data of the table: "WantedItemTransaction" */
  update_WantedItemTransaction?: Maybe<WantedItemTransaction_Mutation_Response>;
  /** update single row of the table: "WantedItemTransaction" */
  update_WantedItemTransaction_by_pk?: Maybe<WantedItemTransaction>;
  /** update multiples rows of table: "WantedItemTransaction" */
  update_WantedItemTransaction_many?: Maybe<Array<Maybe<WantedItemTransaction_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BrandArgs = {
  where: Brand_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Brand_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CityArgs = {
  where: City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_City_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ColorArgs = {
  where: Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Color_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ConditionArgs = {
  where: Condition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Condition_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CountryArgs = {
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Country_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CurrencyArgs = {
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Currency_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ItemArgs = {
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ItemTagArgs = {
  where: ItemTag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ItemTag_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Item_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SizeArgs = {
  where: Size_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SizeSubcategoryArgs = {
  where: SizeSubcategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SizeSubcategory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Size_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_StateArgs = {
  where: State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_State_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_StoreUserArgs = {
  where: StoreUser_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_StoreUser_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SubcategoryArgs = {
  where: Subcategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subcategory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TagArgs = {
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tag_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TransactionTypeArgs = {
  where: TransactionType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TransactionType_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WantedItemTransactionArgs = {
  where: WantedItemTransaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_WantedItemTransaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_BrandArgs = {
  objects: Array<Brand_Insert_Input>;
  on_conflict?: InputMaybe<Brand_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Brand_OneArgs = {
  object: Brand_Insert_Input;
  on_conflict?: InputMaybe<Brand_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CityArgs = {
  objects: Array<City_Insert_Input>;
  on_conflict?: InputMaybe<City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_City_OneArgs = {
  object: City_Insert_Input;
  on_conflict?: InputMaybe<City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ColorArgs = {
  objects: Array<Color_Insert_Input>;
  on_conflict?: InputMaybe<Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Color_OneArgs = {
  object: Color_Insert_Input;
  on_conflict?: InputMaybe<Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConditionArgs = {
  objects: Array<Condition_Insert_Input>;
  on_conflict?: InputMaybe<Condition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Condition_OneArgs = {
  object: Condition_Insert_Input;
  on_conflict?: InputMaybe<Condition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountryArgs = {
  objects: Array<Country_Insert_Input>;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Country_OneArgs = {
  object: Country_Insert_Input;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CurrencyArgs = {
  objects: Array<Currency_Insert_Input>;
  on_conflict?: InputMaybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Currency_OneArgs = {
  object: Currency_Insert_Input;
  on_conflict?: InputMaybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemArgs = {
  objects: Array<Item_Insert_Input>;
  on_conflict?: InputMaybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemTagArgs = {
  objects: Array<ItemTag_Insert_Input>;
  on_conflict?: InputMaybe<ItemTag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemTag_OneArgs = {
  object: ItemTag_Insert_Input;
  on_conflict?: InputMaybe<ItemTag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Item_OneArgs = {
  object: Item_Insert_Input;
  on_conflict?: InputMaybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SizeArgs = {
  objects: Array<Size_Insert_Input>;
  on_conflict?: InputMaybe<Size_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SizeSubcategoryArgs = {
  objects: Array<SizeSubcategory_Insert_Input>;
  on_conflict?: InputMaybe<SizeSubcategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SizeSubcategory_OneArgs = {
  object: SizeSubcategory_Insert_Input;
  on_conflict?: InputMaybe<SizeSubcategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Size_OneArgs = {
  object: Size_Insert_Input;
  on_conflict?: InputMaybe<Size_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StateArgs = {
  objects: Array<State_Insert_Input>;
  on_conflict?: InputMaybe<State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_State_OneArgs = {
  object: State_Insert_Input;
  on_conflict?: InputMaybe<State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoreUserArgs = {
  objects: Array<StoreUser_Insert_Input>;
  on_conflict?: InputMaybe<StoreUser_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoreUser_OneArgs = {
  object: StoreUser_Insert_Input;
  on_conflict?: InputMaybe<StoreUser_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubcategoryArgs = {
  objects: Array<Subcategory_Insert_Input>;
  on_conflict?: InputMaybe<Subcategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subcategory_OneArgs = {
  object: Subcategory_Insert_Input;
  on_conflict?: InputMaybe<Subcategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagArgs = {
  objects: Array<Tag_Insert_Input>;
  on_conflict?: InputMaybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tag_OneArgs = {
  object: Tag_Insert_Input;
  on_conflict?: InputMaybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionTypeArgs = {
  objects: Array<TransactionType_Insert_Input>;
  on_conflict?: InputMaybe<TransactionType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionType_OneArgs = {
  object: TransactionType_Insert_Input;
  on_conflict?: InputMaybe<TransactionType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WantedItemTransactionArgs = {
  objects: Array<WantedItemTransaction_Insert_Input>;
  on_conflict?: InputMaybe<WantedItemTransaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WantedItemTransaction_OneArgs = {
  object: WantedItemTransaction_Insert_Input;
  on_conflict?: InputMaybe<WantedItemTransaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BrandArgs = {
  _inc?: InputMaybe<Brand_Inc_Input>;
  _set?: InputMaybe<Brand_Set_Input>;
  where: Brand_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Brand_By_PkArgs = {
  _inc?: InputMaybe<Brand_Inc_Input>;
  _set?: InputMaybe<Brand_Set_Input>;
  pk_columns: Brand_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Brand_ManyArgs = {
  updates: Array<Brand_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _inc?: InputMaybe<Category_Inc_Input>;
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _inc?: InputMaybe<Category_Inc_Input>;
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CityArgs = {
  _inc?: InputMaybe<City_Inc_Input>;
  _set?: InputMaybe<City_Set_Input>;
  where: City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_City_By_PkArgs = {
  _inc?: InputMaybe<City_Inc_Input>;
  _set?: InputMaybe<City_Set_Input>;
  pk_columns: City_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_City_ManyArgs = {
  updates: Array<City_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ColorArgs = {
  _inc?: InputMaybe<Color_Inc_Input>;
  _set?: InputMaybe<Color_Set_Input>;
  where: Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Color_By_PkArgs = {
  _inc?: InputMaybe<Color_Inc_Input>;
  _set?: InputMaybe<Color_Set_Input>;
  pk_columns: Color_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Color_ManyArgs = {
  updates: Array<Color_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ConditionArgs = {
  _inc?: InputMaybe<Condition_Inc_Input>;
  _set?: InputMaybe<Condition_Set_Input>;
  where: Condition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Condition_By_PkArgs = {
  _inc?: InputMaybe<Condition_Inc_Input>;
  _set?: InputMaybe<Condition_Set_Input>;
  pk_columns: Condition_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Condition_ManyArgs = {
  updates: Array<Condition_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CountryArgs = {
  _inc?: InputMaybe<Country_Inc_Input>;
  _set?: InputMaybe<Country_Set_Input>;
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Country_By_PkArgs = {
  _inc?: InputMaybe<Country_Inc_Input>;
  _set?: InputMaybe<Country_Set_Input>;
  pk_columns: Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Country_ManyArgs = {
  updates: Array<Country_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CurrencyArgs = {
  _inc?: InputMaybe<Currency_Inc_Input>;
  _set?: InputMaybe<Currency_Set_Input>;
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Currency_By_PkArgs = {
  _inc?: InputMaybe<Currency_Inc_Input>;
  _set?: InputMaybe<Currency_Set_Input>;
  pk_columns: Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Currency_ManyArgs = {
  updates: Array<Currency_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemArgs = {
  _inc?: InputMaybe<Item_Inc_Input>;
  _set?: InputMaybe<Item_Set_Input>;
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ItemTagArgs = {
  _inc?: InputMaybe<ItemTag_Inc_Input>;
  _set?: InputMaybe<ItemTag_Set_Input>;
  where: ItemTag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ItemTag_By_PkArgs = {
  _inc?: InputMaybe<ItemTag_Inc_Input>;
  _set?: InputMaybe<ItemTag_Set_Input>;
  pk_columns: ItemTag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ItemTag_ManyArgs = {
  updates: Array<ItemTag_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Item_By_PkArgs = {
  _inc?: InputMaybe<Item_Inc_Input>;
  _set?: InputMaybe<Item_Set_Input>;
  pk_columns: Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Item_ManyArgs = {
  updates: Array<Item_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SizeArgs = {
  _inc?: InputMaybe<Size_Inc_Input>;
  _set?: InputMaybe<Size_Set_Input>;
  where: Size_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SizeSubcategoryArgs = {
  _inc?: InputMaybe<SizeSubcategory_Inc_Input>;
  _set?: InputMaybe<SizeSubcategory_Set_Input>;
  where: SizeSubcategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SizeSubcategory_By_PkArgs = {
  _inc?: InputMaybe<SizeSubcategory_Inc_Input>;
  _set?: InputMaybe<SizeSubcategory_Set_Input>;
  pk_columns: SizeSubcategory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SizeSubcategory_ManyArgs = {
  updates: Array<SizeSubcategory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Size_By_PkArgs = {
  _inc?: InputMaybe<Size_Inc_Input>;
  _set?: InputMaybe<Size_Set_Input>;
  pk_columns: Size_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Size_ManyArgs = {
  updates: Array<Size_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StateArgs = {
  _inc?: InputMaybe<State_Inc_Input>;
  _set?: InputMaybe<State_Set_Input>;
  where: State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_State_By_PkArgs = {
  _inc?: InputMaybe<State_Inc_Input>;
  _set?: InputMaybe<State_Set_Input>;
  pk_columns: State_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_State_ManyArgs = {
  updates: Array<State_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StoreUserArgs = {
  _set?: InputMaybe<StoreUser_Set_Input>;
  where: StoreUser_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_StoreUser_By_PkArgs = {
  _set?: InputMaybe<StoreUser_Set_Input>;
  pk_columns: StoreUser_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StoreUser_ManyArgs = {
  updates: Array<StoreUser_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SubcategoryArgs = {
  _inc?: InputMaybe<Subcategory_Inc_Input>;
  _set?: InputMaybe<Subcategory_Set_Input>;
  where: Subcategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subcategory_By_PkArgs = {
  _inc?: InputMaybe<Subcategory_Inc_Input>;
  _set?: InputMaybe<Subcategory_Set_Input>;
  pk_columns: Subcategory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subcategory_ManyArgs = {
  updates: Array<Subcategory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TagArgs = {
  _inc?: InputMaybe<Tag_Inc_Input>;
  _set?: InputMaybe<Tag_Set_Input>;
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_By_PkArgs = {
  _inc?: InputMaybe<Tag_Inc_Input>;
  _set?: InputMaybe<Tag_Set_Input>;
  pk_columns: Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_ManyArgs = {
  updates: Array<Tag_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionTypeArgs = {
  _inc?: InputMaybe<TransactionType_Inc_Input>;
  _set?: InputMaybe<TransactionType_Set_Input>;
  where: TransactionType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionType_By_PkArgs = {
  _inc?: InputMaybe<TransactionType_Inc_Input>;
  _set?: InputMaybe<TransactionType_Set_Input>;
  pk_columns: TransactionType_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionType_ManyArgs = {
  updates: Array<TransactionType_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ManyArgs = {
  updates: Array<Transaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WantedItemTransactionArgs = {
  _set?: InputMaybe<WantedItemTransaction_Set_Input>;
  where: WantedItemTransaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_WantedItemTransaction_By_PkArgs = {
  _set?: InputMaybe<WantedItemTransaction_Set_Input>;
  pk_columns: WantedItemTransaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WantedItemTransaction_ManyArgs = {
  updates: Array<WantedItemTransaction_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Brand" */
  Brand: Array<Brand>;
  /** fetch aggregated fields from the table: "Brand" */
  Brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "Brand" using primary key columns */
  Brand_by_pk?: Maybe<Brand>;
  /** fetch data from the table: "Category" */
  Category: Array<Category>;
  /** fetch aggregated fields from the table: "Category" */
  Category_aggregate: Category_Aggregate;
  /** fetch data from the table: "Category" using primary key columns */
  Category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "City" */
  City: Array<City>;
  /** fetch aggregated fields from the table: "City" */
  City_aggregate: City_Aggregate;
  /** fetch data from the table: "City" using primary key columns */
  City_by_pk?: Maybe<City>;
  /** fetch data from the table: "Color" */
  Color: Array<Color>;
  /** fetch aggregated fields from the table: "Color" */
  Color_aggregate: Color_Aggregate;
  /** fetch data from the table: "Color" using primary key columns */
  Color_by_pk?: Maybe<Color>;
  /** fetch data from the table: "Condition" */
  Condition: Array<Condition>;
  /** fetch aggregated fields from the table: "Condition" */
  Condition_aggregate: Condition_Aggregate;
  /** fetch data from the table: "Condition" using primary key columns */
  Condition_by_pk?: Maybe<Condition>;
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "Currency" */
  Currency: Array<Currency>;
  /** fetch aggregated fields from the table: "Currency" */
  Currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "Currency" using primary key columns */
  Currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "Item" */
  Item: Array<Item>;
  /** fetch data from the table: "ItemTag" */
  ItemTag: Array<ItemTag>;
  /** fetch aggregated fields from the table: "ItemTag" */
  ItemTag_aggregate: ItemTag_Aggregate;
  /** fetch data from the table: "ItemTag" using primary key columns */
  ItemTag_by_pk?: Maybe<ItemTag>;
  /** fetch aggregated fields from the table: "Item" */
  Item_aggregate: Item_Aggregate;
  /** fetch data from the table: "Item" using primary key columns */
  Item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "Size" */
  Size: Array<Size>;
  /** fetch data from the table: "SizeSubcategory" */
  SizeSubcategory: Array<SizeSubcategory>;
  /** fetch aggregated fields from the table: "SizeSubcategory" */
  SizeSubcategory_aggregate: SizeSubcategory_Aggregate;
  /** fetch data from the table: "SizeSubcategory" using primary key columns */
  SizeSubcategory_by_pk?: Maybe<SizeSubcategory>;
  /** fetch aggregated fields from the table: "Size" */
  Size_aggregate: Size_Aggregate;
  /** fetch data from the table: "Size" using primary key columns */
  Size_by_pk?: Maybe<Size>;
  /** fetch data from the table: "State" */
  State: Array<State>;
  /** fetch aggregated fields from the table: "State" */
  State_aggregate: State_Aggregate;
  /** fetch data from the table: "State" using primary key columns */
  State_by_pk?: Maybe<State>;
  /** fetch data from the table: "StoreUser" */
  StoreUser: Array<StoreUser>;
  /** fetch aggregated fields from the table: "StoreUser" */
  StoreUser_aggregate: StoreUser_Aggregate;
  /** fetch data from the table: "StoreUser" using primary key columns */
  StoreUser_by_pk?: Maybe<StoreUser>;
  /** fetch data from the table: "Subcategory" */
  Subcategory: Array<Subcategory>;
  /** fetch aggregated fields from the table: "Subcategory" */
  Subcategory_aggregate: Subcategory_Aggregate;
  /** fetch data from the table: "Subcategory" using primary key columns */
  Subcategory_by_pk?: Maybe<Subcategory>;
  /** fetch data from the table: "Tag" */
  Tag: Array<Tag>;
  /** fetch aggregated fields from the table: "Tag" */
  Tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "Tag" using primary key columns */
  Tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "Transaction" */
  Transaction: Array<Transaction>;
  /** fetch data from the table: "TransactionType" */
  TransactionType: Array<TransactionType>;
  /** fetch aggregated fields from the table: "TransactionType" */
  TransactionType_aggregate: TransactionType_Aggregate;
  /** fetch data from the table: "TransactionType" using primary key columns */
  TransactionType_by_pk?: Maybe<TransactionType>;
  /** fetch aggregated fields from the table: "Transaction" */
  Transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "Transaction" using primary key columns */
  Transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "WantedItemTransaction" */
  WantedItemTransaction: Array<WantedItemTransaction>;
  /** fetch aggregated fields from the table: "WantedItemTransaction" */
  WantedItemTransaction_aggregate: WantedItemTransaction_Aggregate;
  /** fetch data from the table: "WantedItemTransaction" using primary key columns */
  WantedItemTransaction_by_pk?: Maybe<WantedItemTransaction>;
};


export type Query_RootBrandArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Query_RootBrand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Query_RootBrand_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCityArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Query_RootCity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Query_RootCity_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootColorArgs = {
  distinct_on?: InputMaybe<Array<Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Color_Order_By>>;
  where?: InputMaybe<Color_Bool_Exp>;
};


export type Query_RootColor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Color_Order_By>>;
  where?: InputMaybe<Color_Bool_Exp>;
};


export type Query_RootColor_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootConditionArgs = {
  distinct_on?: InputMaybe<Array<Condition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Condition_Order_By>>;
  where?: InputMaybe<Condition_Bool_Exp>;
};


export type Query_RootCondition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Condition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Condition_Order_By>>;
  where?: InputMaybe<Condition_Bool_Exp>;
};


export type Query_RootCondition_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Query_RootItemTagArgs = {
  distinct_on?: InputMaybe<Array<ItemTag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ItemTag_Order_By>>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};


export type Query_RootItemTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ItemTag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ItemTag_Order_By>>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};


export type Query_RootItemTag_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Query_RootItem_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSizeArgs = {
  distinct_on?: InputMaybe<Array<Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Size_Order_By>>;
  where?: InputMaybe<Size_Bool_Exp>;
};


export type Query_RootSizeSubcategoryArgs = {
  distinct_on?: InputMaybe<Array<SizeSubcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SizeSubcategory_Order_By>>;
  where?: InputMaybe<SizeSubcategory_Bool_Exp>;
};


export type Query_RootSizeSubcategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SizeSubcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SizeSubcategory_Order_By>>;
  where?: InputMaybe<SizeSubcategory_Bool_Exp>;
};


export type Query_RootSizeSubcategory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSize_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Size_Order_By>>;
  where?: InputMaybe<Size_Bool_Exp>;
};


export type Query_RootSize_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootStateArgs = {
  distinct_on?: InputMaybe<Array<State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<State_Order_By>>;
  where?: InputMaybe<State_Bool_Exp>;
};


export type Query_RootState_AggregateArgs = {
  distinct_on?: InputMaybe<Array<State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<State_Order_By>>;
  where?: InputMaybe<State_Bool_Exp>;
};


export type Query_RootState_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootStoreUserArgs = {
  distinct_on?: InputMaybe<Array<StoreUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<StoreUser_Order_By>>;
  where?: InputMaybe<StoreUser_Bool_Exp>;
};


export type Query_RootStoreUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StoreUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<StoreUser_Order_By>>;
  where?: InputMaybe<StoreUser_Bool_Exp>;
};


export type Query_RootStoreUser_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootSubcategoryArgs = {
  distinct_on?: InputMaybe<Array<Subcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subcategory_Order_By>>;
  where?: InputMaybe<Subcategory_Bool_Exp>;
};


export type Query_RootSubcategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subcategory_Order_By>>;
  where?: InputMaybe<Subcategory_Bool_Exp>;
};


export type Query_RootSubcategory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTagArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Query_RootTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Query_RootTag_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransactionTypeArgs = {
  distinct_on?: InputMaybe<Array<TransactionType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TransactionType_Order_By>>;
  where?: InputMaybe<TransactionType_Bool_Exp>;
};


export type Query_RootTransactionType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TransactionType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TransactionType_Order_By>>;
  where?: InputMaybe<TransactionType_Bool_Exp>;
};


export type Query_RootTransactionType_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWantedItemTransactionArgs = {
  distinct_on?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WantedItemTransaction_Order_By>>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};


export type Query_RootWantedItemTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WantedItemTransaction_Order_By>>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};


export type Query_RootWantedItemTransaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Brand" */
  Brand: Array<Brand>;
  /** fetch aggregated fields from the table: "Brand" */
  Brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "Brand" using primary key columns */
  Brand_by_pk?: Maybe<Brand>;
  /** fetch data from the table in a streaming manner: "Brand" */
  Brand_stream: Array<Brand>;
  /** fetch data from the table: "Category" */
  Category: Array<Category>;
  /** fetch aggregated fields from the table: "Category" */
  Category_aggregate: Category_Aggregate;
  /** fetch data from the table: "Category" using primary key columns */
  Category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "Category" */
  Category_stream: Array<Category>;
  /** fetch data from the table: "City" */
  City: Array<City>;
  /** fetch aggregated fields from the table: "City" */
  City_aggregate: City_Aggregate;
  /** fetch data from the table: "City" using primary key columns */
  City_by_pk?: Maybe<City>;
  /** fetch data from the table in a streaming manner: "City" */
  City_stream: Array<City>;
  /** fetch data from the table: "Color" */
  Color: Array<Color>;
  /** fetch aggregated fields from the table: "Color" */
  Color_aggregate: Color_Aggregate;
  /** fetch data from the table: "Color" using primary key columns */
  Color_by_pk?: Maybe<Color>;
  /** fetch data from the table in a streaming manner: "Color" */
  Color_stream: Array<Color>;
  /** fetch data from the table: "Condition" */
  Condition: Array<Condition>;
  /** fetch aggregated fields from the table: "Condition" */
  Condition_aggregate: Condition_Aggregate;
  /** fetch data from the table: "Condition" using primary key columns */
  Condition_by_pk?: Maybe<Condition>;
  /** fetch data from the table in a streaming manner: "Condition" */
  Condition_stream: Array<Condition>;
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table in a streaming manner: "Country" */
  Country_stream: Array<Country>;
  /** fetch data from the table: "Currency" */
  Currency: Array<Currency>;
  /** fetch aggregated fields from the table: "Currency" */
  Currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "Currency" using primary key columns */
  Currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table in a streaming manner: "Currency" */
  Currency_stream: Array<Currency>;
  /** fetch data from the table: "Item" */
  Item: Array<Item>;
  /** fetch data from the table: "ItemTag" */
  ItemTag: Array<ItemTag>;
  /** fetch aggregated fields from the table: "ItemTag" */
  ItemTag_aggregate: ItemTag_Aggregate;
  /** fetch data from the table: "ItemTag" using primary key columns */
  ItemTag_by_pk?: Maybe<ItemTag>;
  /** fetch data from the table in a streaming manner: "ItemTag" */
  ItemTag_stream: Array<ItemTag>;
  /** fetch aggregated fields from the table: "Item" */
  Item_aggregate: Item_Aggregate;
  /** fetch data from the table: "Item" using primary key columns */
  Item_by_pk?: Maybe<Item>;
  /** fetch data from the table in a streaming manner: "Item" */
  Item_stream: Array<Item>;
  /** fetch data from the table: "Size" */
  Size: Array<Size>;
  /** fetch data from the table: "SizeSubcategory" */
  SizeSubcategory: Array<SizeSubcategory>;
  /** fetch aggregated fields from the table: "SizeSubcategory" */
  SizeSubcategory_aggregate: SizeSubcategory_Aggregate;
  /** fetch data from the table: "SizeSubcategory" using primary key columns */
  SizeSubcategory_by_pk?: Maybe<SizeSubcategory>;
  /** fetch data from the table in a streaming manner: "SizeSubcategory" */
  SizeSubcategory_stream: Array<SizeSubcategory>;
  /** fetch aggregated fields from the table: "Size" */
  Size_aggregate: Size_Aggregate;
  /** fetch data from the table: "Size" using primary key columns */
  Size_by_pk?: Maybe<Size>;
  /** fetch data from the table in a streaming manner: "Size" */
  Size_stream: Array<Size>;
  /** fetch data from the table: "State" */
  State: Array<State>;
  /** fetch aggregated fields from the table: "State" */
  State_aggregate: State_Aggregate;
  /** fetch data from the table: "State" using primary key columns */
  State_by_pk?: Maybe<State>;
  /** fetch data from the table in a streaming manner: "State" */
  State_stream: Array<State>;
  /** fetch data from the table: "StoreUser" */
  StoreUser: Array<StoreUser>;
  /** fetch aggregated fields from the table: "StoreUser" */
  StoreUser_aggregate: StoreUser_Aggregate;
  /** fetch data from the table: "StoreUser" using primary key columns */
  StoreUser_by_pk?: Maybe<StoreUser>;
  /** fetch data from the table in a streaming manner: "StoreUser" */
  StoreUser_stream: Array<StoreUser>;
  /** fetch data from the table: "Subcategory" */
  Subcategory: Array<Subcategory>;
  /** fetch aggregated fields from the table: "Subcategory" */
  Subcategory_aggregate: Subcategory_Aggregate;
  /** fetch data from the table: "Subcategory" using primary key columns */
  Subcategory_by_pk?: Maybe<Subcategory>;
  /** fetch data from the table in a streaming manner: "Subcategory" */
  Subcategory_stream: Array<Subcategory>;
  /** fetch data from the table: "Tag" */
  Tag: Array<Tag>;
  /** fetch aggregated fields from the table: "Tag" */
  Tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "Tag" using primary key columns */
  Tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table in a streaming manner: "Tag" */
  Tag_stream: Array<Tag>;
  /** fetch data from the table: "Transaction" */
  Transaction: Array<Transaction>;
  /** fetch data from the table: "TransactionType" */
  TransactionType: Array<TransactionType>;
  /** fetch aggregated fields from the table: "TransactionType" */
  TransactionType_aggregate: TransactionType_Aggregate;
  /** fetch data from the table: "TransactionType" using primary key columns */
  TransactionType_by_pk?: Maybe<TransactionType>;
  /** fetch data from the table in a streaming manner: "TransactionType" */
  TransactionType_stream: Array<TransactionType>;
  /** fetch aggregated fields from the table: "Transaction" */
  Transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "Transaction" using primary key columns */
  Transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table in a streaming manner: "Transaction" */
  Transaction_stream: Array<Transaction>;
  /** fetch data from the table: "WantedItemTransaction" */
  WantedItemTransaction: Array<WantedItemTransaction>;
  /** fetch aggregated fields from the table: "WantedItemTransaction" */
  WantedItemTransaction_aggregate: WantedItemTransaction_Aggregate;
  /** fetch data from the table: "WantedItemTransaction" using primary key columns */
  WantedItemTransaction_by_pk?: Maybe<WantedItemTransaction>;
  /** fetch data from the table in a streaming manner: "WantedItemTransaction" */
  WantedItemTransaction_stream: Array<WantedItemTransaction>;
};


export type Subscription_RootBrandArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Subscription_RootBrand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Subscription_RootBrand_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootBrand_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Brand_Stream_Cursor_Input>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCityArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Subscription_RootCity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Subscription_RootCity_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<City_Stream_Cursor_Input>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Subscription_RootColorArgs = {
  distinct_on?: InputMaybe<Array<Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Color_Order_By>>;
  where?: InputMaybe<Color_Bool_Exp>;
};


export type Subscription_RootColor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Color_Order_By>>;
  where?: InputMaybe<Color_Bool_Exp>;
};


export type Subscription_RootColor_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootColor_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Color_Stream_Cursor_Input>>;
  where?: InputMaybe<Color_Bool_Exp>;
};


export type Subscription_RootConditionArgs = {
  distinct_on?: InputMaybe<Array<Condition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Condition_Order_By>>;
  where?: InputMaybe<Condition_Bool_Exp>;
};


export type Subscription_RootCondition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Condition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Condition_Order_By>>;
  where?: InputMaybe<Condition_Bool_Exp>;
};


export type Subscription_RootCondition_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCondition_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Condition_Stream_Cursor_Input>>;
  where?: InputMaybe<Condition_Bool_Exp>;
};


export type Subscription_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCountry_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Country_Stream_Cursor_Input>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCurrency_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Currency_Stream_Cursor_Input>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootItemTagArgs = {
  distinct_on?: InputMaybe<Array<ItemTag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ItemTag_Order_By>>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};


export type Subscription_RootItemTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ItemTag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ItemTag_Order_By>>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};


export type Subscription_RootItemTag_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootItemTag_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ItemTag_Stream_Cursor_Input>>;
  where?: InputMaybe<ItemTag_Bool_Exp>;
};


export type Subscription_RootItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootItem_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootItem_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootSizeArgs = {
  distinct_on?: InputMaybe<Array<Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Size_Order_By>>;
  where?: InputMaybe<Size_Bool_Exp>;
};


export type Subscription_RootSizeSubcategoryArgs = {
  distinct_on?: InputMaybe<Array<SizeSubcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SizeSubcategory_Order_By>>;
  where?: InputMaybe<SizeSubcategory_Bool_Exp>;
};


export type Subscription_RootSizeSubcategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SizeSubcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SizeSubcategory_Order_By>>;
  where?: InputMaybe<SizeSubcategory_Bool_Exp>;
};


export type Subscription_RootSizeSubcategory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSizeSubcategory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<SizeSubcategory_Stream_Cursor_Input>>;
  where?: InputMaybe<SizeSubcategory_Bool_Exp>;
};


export type Subscription_RootSize_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Size_Order_By>>;
  where?: InputMaybe<Size_Bool_Exp>;
};


export type Subscription_RootSize_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSize_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Size_Stream_Cursor_Input>>;
  where?: InputMaybe<Size_Bool_Exp>;
};


export type Subscription_RootStateArgs = {
  distinct_on?: InputMaybe<Array<State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<State_Order_By>>;
  where?: InputMaybe<State_Bool_Exp>;
};


export type Subscription_RootState_AggregateArgs = {
  distinct_on?: InputMaybe<Array<State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<State_Order_By>>;
  where?: InputMaybe<State_Bool_Exp>;
};


export type Subscription_RootState_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootState_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<State_Stream_Cursor_Input>>;
  where?: InputMaybe<State_Bool_Exp>;
};


export type Subscription_RootStoreUserArgs = {
  distinct_on?: InputMaybe<Array<StoreUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<StoreUser_Order_By>>;
  where?: InputMaybe<StoreUser_Bool_Exp>;
};


export type Subscription_RootStoreUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StoreUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<StoreUser_Order_By>>;
  where?: InputMaybe<StoreUser_Bool_Exp>;
};


export type Subscription_RootStoreUser_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStoreUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<StoreUser_Stream_Cursor_Input>>;
  where?: InputMaybe<StoreUser_Bool_Exp>;
};


export type Subscription_RootSubcategoryArgs = {
  distinct_on?: InputMaybe<Array<Subcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subcategory_Order_By>>;
  where?: InputMaybe<Subcategory_Bool_Exp>;
};


export type Subscription_RootSubcategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subcategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subcategory_Order_By>>;
  where?: InputMaybe<Subcategory_Bool_Exp>;
};


export type Subscription_RootSubcategory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSubcategory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subcategory_Stream_Cursor_Input>>;
  where?: InputMaybe<Subcategory_Bool_Exp>;
};


export type Subscription_RootTagArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTag_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tag_Stream_Cursor_Input>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransactionTypeArgs = {
  distinct_on?: InputMaybe<Array<TransactionType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TransactionType_Order_By>>;
  where?: InputMaybe<TransactionType_Bool_Exp>;
};


export type Subscription_RootTransactionType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TransactionType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TransactionType_Order_By>>;
  where?: InputMaybe<TransactionType_Bool_Exp>;
};


export type Subscription_RootTransactionType_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTransactionType_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TransactionType_Stream_Cursor_Input>>;
  where?: InputMaybe<TransactionType_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootWantedItemTransactionArgs = {
  distinct_on?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WantedItemTransaction_Order_By>>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};


export type Subscription_RootWantedItemTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WantedItemTransaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WantedItemTransaction_Order_By>>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};


export type Subscription_RootWantedItemTransaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWantedItemTransaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<WantedItemTransaction_Stream_Cursor_Input>>;
  where?: InputMaybe<WantedItemTransaction_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBrandsQuery = { __typename?: 'query_root', Brand: Array<{ __typename?: 'Brand', id: number, name: string }> };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', Category: Array<{ __typename?: 'Category', id: number, name: string }> };

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'query_root', City: Array<{ __typename?: 'City', countryId?: number | null, id: number, name: string, stateId?: number | null }> };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'query_root', Country: Array<{ __typename?: 'Country', id: number, name: string }> };

export type GetColorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetColorsQuery = { __typename?: 'query_root', Color: Array<{ __typename?: 'Color', id: number, name: string, hexCode: any }> };

export type GetConditionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConditionsQuery = { __typename?: 'query_root', Condition: Array<{ __typename?: 'Condition', id: number, name: string, description?: string | null }> };

export type StatesQueryVariables = Exact<{ [key: string]: never; }>;


export type StatesQuery = { __typename?: 'query_root', State: Array<{ __typename?: 'State', id: number, name: string, countryId: number, abbreviation: string }> };

export type GetCurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrenciesQuery = { __typename?: 'query_root', Currency: Array<{ __typename?: 'Currency', id: number, isoCode: any, name: string, symbol: string, displayOrder?: any | null }> };

export type GetSizesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSizesQuery = { __typename?: 'query_root', Size: Array<{ __typename?: 'Size', unit?: string | null, value?: string | null, id: number, description?: string | null, name: string }> };

export type GetSubcategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubcategoriesQuery = { __typename?: 'query_root', Subcategory: Array<{ __typename?: 'Subcategory', id: number, name: string, categoryId?: number | null, parentSubcategoryId?: number | null, SizeSubcategories: Array<{ __typename?: 'SizeSubcategory', id: number, sizeId?: number | null, subcategoryId?: number | null }> }> };

export type InsertItemsMutationVariables = Exact<{
  objects: Array<Item_Insert_Input> | Item_Insert_Input;
}>;


export type InsertItemsMutation = { __typename?: 'mutation_root', insert_Item?: { __typename?: 'Item_mutation_response', returning: Array<{ __typename?: 'Item', id: any }> } | null };

export type AddTagsToItemMutationVariables = Exact<{
  tagAndItemIds: Array<ItemTag_Insert_Input> | ItemTag_Insert_Input;
}>;


export type AddTagsToItemMutation = { __typename?: 'mutation_root', insert_ItemTag?: { __typename?: 'ItemTag_mutation_response', returning: Array<{ __typename?: 'ItemTag', itemId?: any | null, tagId?: number | null }> } | null };

export type GetItemNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemNamesQuery = { __typename?: 'query_root', Item: Array<{ __typename?: 'Item', id: any, name: string }> };

export type GetItemFormDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemFormDataQuery = { __typename?: 'query_root', Country: Array<{ __typename?: 'Country', id: number, iso: any, iso3?: any | null, name: string, phone_code: any, currency_id?: number | null }>, Subcategory: Array<{ __typename?: 'Subcategory', id: number, categoryId?: number | null, name: string, parentSubcategoryId?: number | null, SizeSubcategories: Array<{ __typename?: 'SizeSubcategory', id: number, sizeId?: number | null, subcategoryId?: number | null }> }>, Size: Array<{ __typename?: 'Size', id: number, name: string, unit?: string | null, value?: string | null, description?: string | null }>, Condition: Array<{ __typename?: 'Condition', id: number, name: string, description?: string | null }>, Brand: Array<{ __typename?: 'Brand', id: number, name: string }>, Category: Array<{ __typename?: 'Category', id: number, name: string }>, Color: Array<{ __typename?: 'Color', id: number, name: string, hexCode: any, isShining: boolean }> };

export type StoreUserMutationVariables = Exact<{
  userObject: StoreUser_Insert_Input;
}>;


export type StoreUserMutation = { __typename?: 'mutation_root', insert_StoreUser_one?: { __typename?: 'StoreUser', id: string } | null };

export type UpdateStoredUserMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  userObject: StoreUser_Set_Input;
}>;


export type UpdateStoredUserMutation = { __typename?: 'mutation_root', update_StoreUser?: { __typename?: 'StoreUser_mutation_response', affected_rows: number } | null };

export type InsertTransactionMutationVariables = Exact<{
  transaction: Transaction_Insert_Input;
}>;


export type InsertTransactionMutation = { __typename?: 'mutation_root', insert_Transaction_one?: { __typename?: 'Transaction', willPayExtra?: boolean | null, extraPayMaxAmount?: any | null, willReceiveExtra?: boolean | null, extraReceiveMaxAmount?: any | null, currencyId?: number | null, availableUntil?: any | null, swapForAnyItem?: boolean | null, createdAt: any, updatedAt: any, transactionTypeId: number, userId: string, offeredItemId?: any | null, seekingItemId?: any | null, isCompleted: boolean, completedAt?: any | null } | null };

export type GetTransactionTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransactionTypesQuery = { __typename?: 'query_root', TransactionType: Array<{ __typename?: 'TransactionType', id: number, name: string, description?: string | null }> };


export const GetBrandsDocument = gql`
    query GetBrands {
  Brand {
    id
    name
  }
}
    `;
export const GetCategoriesDocument = gql`
    query GetCategories {
  Category {
    id
    name
  }
}
    `;
export const GetCitiesDocument = gql`
    query GetCities {
  City {
    countryId
    id
    name
    stateId
  }
}
    `;
export const GetCountriesDocument = gql`
    query GetCountries {
  Country {
    id
    name
  }
}
    `;
export const GetColorsDocument = gql`
    query GetColors {
  Color {
    id
    name
    hexCode
  }
}
    `;
export const GetConditionsDocument = gql`
    query GetConditions {
  Condition {
    id
    name
    description
  }
}
    `;
export const StatesDocument = gql`
    query States {
  State {
    id
    name
    countryId
    abbreviation
  }
}
    `;
export const GetCurrenciesDocument = gql`
    query GetCurrencies {
  Currency {
    id
    isoCode
    name
    symbol
    displayOrder
  }
}
    `;
export const GetSizesDocument = gql`
    query GetSizes {
  Size {
    unit
    value
    id
    description
    name
  }
}
    `;
export const GetSubcategoriesDocument = gql`
    query GetSubcategories {
  Subcategory {
    id
    name
    categoryId
    parentSubcategoryId
    SizeSubcategories {
      id
      sizeId
      subcategoryId
    }
  }
}
    `;
export const InsertItemsDocument = gql`
    mutation InsertItems($objects: [Item_insert_input!]!) {
  insert_Item(objects: $objects) {
    returning {
      id
    }
  }
}
    `;
export const AddTagsToItemDocument = gql`
    mutation AddTagsToItem($tagAndItemIds: [ItemTag_insert_input!]!) {
  insert_ItemTag(objects: $tagAndItemIds) {
    returning {
      itemId
      tagId
    }
  }
}
    `;
export const GetItemNamesDocument = gql`
    query GetItemNames {
  Item {
    id
    name
  }
}
    `;
export const GetItemFormDataDocument = gql`
    query GetItemFormData @cached(ttl: 600) {
  Country {
    id
    iso
    iso3
    name
    phone_code
    currency_id
  }
  Subcategory {
    id
    categoryId
    name
    parentSubcategoryId
    SizeSubcategories {
      id
      sizeId
      subcategoryId
    }
  }
  Size {
    id
    name
    unit
    value
    description
  }
  Condition {
    id
    name
    description
  }
  Brand {
    id
    name
  }
  Category {
    id
    name
  }
  Color {
    id
    name
    hexCode
    isShining
  }
}
    `;
export const StoreUserDocument = gql`
    mutation StoreUser($userObject: StoreUser_insert_input!) {
  insert_StoreUser_one(object: $userObject) {
    id
  }
}
    `;
export const UpdateStoredUserDocument = gql`
    mutation UpdateStoredUser($userId: String, $userObject: StoreUser_set_input!) {
  update_StoreUser(where: {id: {_eq: $userId}}, _set: $userObject) {
    affected_rows
  }
}
    `;
export const InsertTransactionDocument = gql`
    mutation InsertTransaction($transaction: Transaction_insert_input!) {
  insert_Transaction_one(object: $transaction) {
    willPayExtra
    extraPayMaxAmount
    willReceiveExtra
    extraReceiveMaxAmount
    currencyId
    availableUntil
    swapForAnyItem
    createdAt
    updatedAt
    transactionTypeId
    userId
    offeredItemId
    seekingItemId
    isCompleted
    completedAt
  }
}
    `;
export const GetTransactionTypesDocument = gql`
    query GetTransactionTypes {
  TransactionType {
    id
    name
    description
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetBrands(variables?: GetBrandsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetBrandsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBrandsQuery>(GetBrandsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetBrands', 'query', variables);
    },
    GetCategories(variables?: GetCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCategories', 'query', variables);
    },
    GetCities(variables?: GetCitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCitiesQuery>(GetCitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCities', 'query', variables);
    },
    GetCountries(variables?: GetCountriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCountriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCountriesQuery>(GetCountriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCountries', 'query', variables);
    },
    GetColors(variables?: GetColorsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetColorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetColorsQuery>(GetColorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetColors', 'query', variables);
    },
    GetConditions(variables?: GetConditionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetConditionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetConditionsQuery>(GetConditionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetConditions', 'query', variables);
    },
    States(variables?: StatesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<StatesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StatesQuery>(StatesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'States', 'query', variables);
    },
    GetCurrencies(variables?: GetCurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCurrenciesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCurrenciesQuery>(GetCurrenciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCurrencies', 'query', variables);
    },
    GetSizes(variables?: GetSizesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSizesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSizesQuery>(GetSizesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSizes', 'query', variables);
    },
    GetSubcategories(variables?: GetSubcategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSubcategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSubcategoriesQuery>(GetSubcategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSubcategories', 'query', variables);
    },
    InsertItems(variables: InsertItemsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertItemsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertItemsMutation>(InsertItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertItems', 'mutation', variables);
    },
    AddTagsToItem(variables: AddTagsToItemMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddTagsToItemMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddTagsToItemMutation>(AddTagsToItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddTagsToItem', 'mutation', variables);
    },
    GetItemNames(variables?: GetItemNamesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetItemNamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetItemNamesQuery>(GetItemNamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetItemNames', 'query', variables);
    },
    GetItemFormData(variables?: GetItemFormDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetItemFormDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetItemFormDataQuery>(GetItemFormDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetItemFormData', 'query', variables);
    },
    StoreUser(variables: StoreUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<StoreUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoreUserMutation>(StoreUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StoreUser', 'mutation', variables);
    },
    UpdateStoredUser(variables: UpdateStoredUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateStoredUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateStoredUserMutation>(UpdateStoredUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateStoredUser', 'mutation', variables);
    },
    InsertTransaction(variables: InsertTransactionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertTransactionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertTransactionMutation>(InsertTransactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertTransaction', 'mutation', variables);
    },
    GetTransactionTypes(variables?: GetTransactionTypesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTransactionTypesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTransactionTypesQuery>(GetTransactionTypesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTransactionTypes', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;