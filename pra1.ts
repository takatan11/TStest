type Circle = { kind: "circle"; radius: number };
  type Rectangle = { kind: "rectangle"; width: number; height: number };
  type Triangle = { kind: "triangle"; base: number; height: number };

  type Shape = Circle | Rectangle | Triangle;

  // 各図形の面積を返す関数を実装せよ
  // Circle: Math.PI * r^2
  // Rectangle: w * h
  // Triangle: (b * h) / 2
  function getArea(shape: Shape): number {
     if(shape.kind=="circle"){
          let result1:number=Math.PI*shape.radius^2
          return result1;
     }  
     else if(shape.kind=="rectangle"){
          let result2=shape.height*shape.width;
          return result2;
     }
     else if(shape.kind=="triangle"){
          let result3=(shape.base*shape.height)/2;
          return result3;
     }
     return 0;
  }