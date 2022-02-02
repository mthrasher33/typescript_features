@classDecorator // use on a class
class Boat {
  @testDecorator // use on property
  color: string = 'red';

  @testDecorator // use on accessors
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('Oops an error occurred') // use on methods
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

// can basically just tell you you have a key "color"
// can't tell you the value of that class property
function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
