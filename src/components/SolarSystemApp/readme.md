## 목표 구현사항
- [ ] 행성 궤도 그리기
- [ ] 행성 그리기
- [ ] 터치/클릭으로 공간 회전 기능
- [ ] 스크롤으로 확대/축소
- [ ] 행성 클릭하면 세부정보







### pixi 구조?


- renderer는 stage를 받아서 화면에 그린다.
```
PIXI.Renderer (renderer)
  PIXI.Container(stage)
    PIXI.Container
      PIXI.mesh? Texture?

PIXI.Conatiner

```




- stage에 추가할 수 있는 요소(element)들
1. sprite
2. text
3. composite vector graphics
4. movie clip
5. spine

- 각 요소(element)에 설정할 수 있는 이벤트
1. click
2. mouse(down/out/over/...)
3. tap, touch 등등


(example site)[https://scottmcdonnell.github.io]



(planetary fact sheet)[https://nssdc.gsfc.nasa.gov/planetary/factsheet]