import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/base/base.entity";
import "reflect-metadata";

class Pollution {
  @Column({ nullable: true })
  ts!: Date;

  @Column({ type: "float", nullable: true })
  aqius!: number;

  @Column({ nullable: true })
  mainus!: string;

  @Column({ type: "float", nullable: true })
  aqicn!: number;

  @Column({ type: "float", nullable: true })
  maincn!: number;
}

class Coordinates {
  @Column({ type: "decimal", precision: 10, scale: 7 })
  latitude!: number;

  @Column({ type: "decimal", precision: 10, scale: 7 })
  longitude!: number;
}

@Entity()
export class AirQuality extends BaseEntity {
  @Column()
  city!: string;
  @Column()
  state!: string;
  @Column()
  country!: string;
  @Column("jsonb", { nullable: true })
  coordinates!: Coordinates;

  @Column("jsonb", { nullable: true })
  pollution!: Pollution;
}
