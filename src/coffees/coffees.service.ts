import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Coffee } from './entities/coffees.entity'

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: '小咖啡',
      brand: '雀巢',
      flavors: ['香甜', '浓郁'],
    },
  ]

  findAll() {
    return this.coffees
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id)
    if (!coffee) {
      throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND)
    }
    return coffee
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto)
    return createCoffeeDto
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id)
    // if (existingCoffee) {
    // }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id)
    this.coffees.splice(coffeeIndex, 1)
  }
}
