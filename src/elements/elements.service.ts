import { Injectable } from '@nestjs/common';
import { inputDto } from '../dto/input.dto';

@Injectable()
export class ElementsService {
  getElements(inputDto: inputDto): number[] {
    const { elements, target } = inputDto;
    const result = [];
    const elementsCount = new Map();
    for (const el of elements) {
      const complement = target - el;
      if (elementsCount.has(complement)) {
        result.push([el, complement]);
      }
      if (elementsCount.has(el)) {
        elementsCount.set(el, elementsCount.get(el) + 1);
      } else {
        elementsCount.set(el, 1);
      }
    }
    return result;
  }
}
