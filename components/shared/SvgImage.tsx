import React from 'react';
import { Platform, Image } from 'react-native';
import { SvgProps } from 'react-native-svg';

type Props = SvgProps & {
  src: any;
  width: number | string;
  height: number | string;
};

/**
 * Renders an SVG on native (via react-native-svg-transformer component)
 * and falls back to a plain <Image> with require() source on web,
 * where the transformer returns a plain object rather than a component.
 */
export function SvgImage({ src, width, height, ...rest }: Props) {
  const w = typeof width === 'number' ? width : undefined;
  const h = typeof height === 'number' ? height : undefined;

  // On web the transformer gives back an object, not a function — use Image
  if (Platform.OS === 'web' || typeof src !== 'function') {
    return (
      <Image
        source={src}
        style={{ width: w, height: h }}
        resizeMode="contain"
      />
    );
  }

  return React.createElement(src as React.FC<SvgProps>, { width, height, ...rest });
}
