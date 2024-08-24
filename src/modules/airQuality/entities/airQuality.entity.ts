import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/base/base.entity";
import "reflect-metadata";

@Entity()
export class AirQuality extends BaseEntity {
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  country: string;
  @Column("jsonb", { nullable: true })
  coordinates: Coordinates;

  @Column("jsonb", { nullable: true })
  polution: Pollution;
}

class Coordinates {
  @Column({ type: "decimal", precision: 10, scale: 7 })
  latitude: number;

  @Column({ type: "decimal", precision: 10, scale: 7 })
  longitude: number;
}

class Pollution {
  @Column({ nullable: true })
  ts: Date;

  @Column({ nullable: true })
  aqius: string;

  @Column({ nullable: true })
  mainus: string;

  @Column({ nullable: true })
  aqicn: string;

  @Column({ nullable: true })
  maincn: string;
}
