import { QueryBuilder, Repository } from "typeorm";

export default abstract class BaseRepository<T> {
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async create(data: T): Promise<T> {
    try {
      return await this.entity.save(data);
    } catch (error) {
      throw new Error(`Failed to create entity: ${error.message}`);
    }
  }

  public async findOneByCondition(filterCondition: any): Promise<T> {
    return await this.entity.findOne({ where: filterCondition });
  }

  public async findAllByCondition(
    filterCondition: any,
    selectedFields?: any
  ): Promise<T[]> {
    return await this.entity.find({
      where: filterCondition,
      select: selectedFields,
    });
  }

  protected getQueryBuilder(alias: string = "entity") {
    const queryBuilder = this.entity.createQueryBuilder(alias);
    return queryBuilder;
  }
}
