import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { Setting } from '../settings/setting.entity';

@Table({ tableName: 'accounts', timestamps: true, paranoid: true })
export class Account extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column(DataType.STRING)
  name: string;

  @CreatedAt
  @Column(DataType.DATE)
  created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at: Date;

  @DeletedAt
  @Column(DataType.DATE)
  deleted_at: Date;

  @HasMany(() => Setting)
  settings: Setting[];
}