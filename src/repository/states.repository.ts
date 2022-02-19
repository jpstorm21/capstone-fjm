import { Injectable } from '@nestjs/common';
import { State, StateData } from 'src/graphql.schema';
import { Repository, EntityRepository } from 'typeorm';

import { States } from './../entities/states.entity';

@Injectable()
@EntityRepository(States)
export class StateRepository extends Repository<States> {
  public async getStates(): Promise<State[]> {
    try {
      return await this.find({
        where: { deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  }

  public async getStateById(id: string): Promise<State> {
    try {
      return await this.findOne({
        where: { id: id, deletedAt: null },
      });
    } catch (error) {
      throw error;
    }
  }

  public async insertState(
    stateData: StateData,    
  ): Promise<State> {
    try {
      const { type, typeNumber } = stateData;

      const state = new States();
      state.type = type; 
      state.typeNumber = typeNumber;    

      return await state.save();
    } catch (error) {
      throw error;
    }
  }

  public async getStateByType(type: string): Promise<State> {
    try {
      if (type) {
        return await this.findOne({
          where: { type: type, deletedAt: null },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
