import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Account } from '../accounts/account.entity';

@Table({ tableName: 'settings', timestamps: true, paranoid: true })
export class Setting extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.ENUM('string', 'number', 'boolean', 'json'))
  data_type: 'string' | 'number' | 'boolean' | 'json';

  @ForeignKey(() => Account)
  @Column(DataType.INTEGER)
  account_id: number;

  @BelongsTo(() => Account)
  account: Account;

  @Column(DataType.STRING)
  value: string;

  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date;

  @DeletedAt
  @Column(DataType.DATE)
  deleted_at: Date;
}
