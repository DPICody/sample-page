import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import URL from './../assets/page.jpg'; //i had to hard-code this into the component; passing it from the parent results in an error

export default function Canvas(props) {
  const { image, width, height, onRectClick } = props;
  const [rects, setRects] = useState([]);
  const [togglePlay, setTogglePlay] = useState(false);
  let bgImage;

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      height: height,
      width: width,
      selection: false,
    });

    const setCanvasBG = () => {
      if (image && image.length > 0) {
        fabric.Image.fromURL(URL, (img) => {
          bgImage = img;
          scaleAndPositionImage();
        });
      }
    };

    const scaleAndPositionImage = () => {
      let canvasAspect = width / height;
      let imageAspect = bgImage.width / bgImage.height;
      let left = 0,
        top = 0,
        scaleFactor;

      if (canvasAspect >= imageAspect) {
        scaleFactor = height / bgImage.height;
        left = -(bgImage.width * scaleFactor - width) / 2;
      } else {
        scaleFactor = width / bgImage.width;
        top = -(bgImage.height * scaleFactor - height) / 2;
      }
      canvas.setBackgroundImage(bgImage, canvas.renderAll.bind(canvas), {
        top: top,
        left: left,
        originX: 'left',
        originY: 'top',
        scaleX: scaleFactor,
        scaleY: scaleFactor,
      });
    };

    setCanvasBG();

    const rect = new fabric.Rect({
      left: 150,
      top: 167,
      width: 528,
      height: 80,
      fill: 'blue',
      opacity: 0,
      selectable: false,
      startTime: 0,
    });
    const rect2 = new fabric.Rect({
      left: 93,
      top: 326,
      width: 585,
      height: 80,
      fill: 'blue',
      opacity: 0,
      selectable: false,
      startTime: 6.5,
    });
    const rect3 = new fabric.Rect({
      left: 98,
      top: 471,
      width: 585,
      height: 80,
      fill: 'blue',
      opacity: 0,
      selectable: false,
      startTime: 13.4,
    });
    const rect4 = new fabric.Rect({
      left: 97,
      top: 617,
      width: 585,
      height: 80,
      fill: 'blue',
      opacity: 0,
      selectable: false,
      startTime: 22.16,
    });
    const rect5 = new fabric.Rect({
      left: 99,
      top: 775,
      width: 585,
      height: 80,
      fill: 'blue',
      opacity: 0,
      selectable: false,
      startTime: 29.63,
    });

    canvas.add(rect);
    canvas.add(rect2);
    canvas.add(rect3);
    canvas.add(rect4);
    canvas.add(rect5);

    canvas.on('mouse:over', (e) => {
      if (e.target) {
        e.target.opacity = 0.2;
        canvas.renderAll();
      }
    });

    canvas.on('mouse:out', (e) => {
      if (e.target) {
        e.target.opacity = 0;
        canvas.renderAll();
      }
    });

    canvas.on('mouse:down', (e) => {
      if (e.target) {
        // console.log(
        //   'x:',
        //   e.target.left,
        //   'y:',
        //   e.target.top,
        //   'w:',
        //   e.target.width,
        //   'h:',
        //   e.target.height,
        //   'time:',
        //   e.target.startTime
        // );
        onRectClick(e.target.startTime);
      }
    });

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <>
      <canvas id="canvas" />
    </>
  );
}
