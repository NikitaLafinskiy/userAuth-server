import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    unique: false,
    length: 100,
  })
  username: string;
  @Column({
    unique: true,
    length: 100,
  })
  email: string;
  @Column()
  password: string;
  @Column({
    length: 500,
  })
  about: string;
}

export default User;
