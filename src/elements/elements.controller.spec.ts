import { Test, TestingModule } from '@nestjs/testing';
import { ElementsController } from './elements.controller';
import { ElementsService } from './elements.service';

describe('ElementsController', () => {
  let elementsController: ElementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElementsController],
      providers: [ElementsService],
    }).compile();

    elementsController = module.get<ElementsController>(ElementsController);
  });
  it('should be defined', () => {
    expect(elementsController).toBeDefined();
  });

  it('should return all pairs whose sum will be equal to the target', () => {
    expect(
      elementsController.getElements({
        elements: [1, 2, 4, 5, 2, 0, 1, 4],
        target: 7,
      }),
    ).toStrictEqual([
      [5, 2],
      [2, 5],
    ]);
  });

  it('should return wrong result', () => {
    expect(
      elementsController.getElements({
        elements: [1, 2, 4, 5, 2, 0, 1, 4],
        target: 7000,
      }),
    ).toStrictEqual([
      [5, 2],
      [2, 5],
    ]);
  });
});
