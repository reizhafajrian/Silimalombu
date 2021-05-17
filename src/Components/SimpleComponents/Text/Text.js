import React from 'react';
import {colors} from '../../../Utils/Colors/colors';
import {
  TextBoldTitle3Component,
  TextBoldTitle2Component,
  TextBoldTitleComponent,
  TextBoldSubTitleComponent,
  TextBoldDescriptionComponent,
  TextRegularTitle3Component,
  TextRegularTitle2Component,
  TextRegularTitleComponent,
  TextRegularSubTitleComponent,
  TextRegularDescriptionComponent,
  TextLightTitle3Component,
  TextLightTitle2Component,
  TextLightTitleComponent,
  TextLightSubTitleComponent,
  TextLightDescriptionComponent,
} from './styles';

const TextBoldTitle2PrimaryDark = props => {
  const {text} = props;
  return (
    <>
      <TextBoldTitle2Component color={colors.PrimaryDark}>
        {text}
      </TextBoldTitle2Component>
    </>
  );
};

const TextBoldTitleBlack = props => {
  const {text} = props;
  return (
    <>
      <TextBoldTitleComponent color={colors.Black}>
        {text}
      </TextBoldTitleComponent>
    </>
  );
};

const TextRegularDescriptionWhite = props => {
  const {text} = props;
  return (
    <>
      <TextRegularDescriptionComponent color={colors.White}>
        {text}
      </TextRegularDescriptionComponent>
    </>
  );
};

const TextRegularDescriptionBlack = props => {
  const {text} = props;
  return (
    <>
      <TextRegularDescriptionComponent color={colors.Black}>
        {text}
      </TextRegularDescriptionComponent>
    </>
  );
};

const TextRegularSubTitlePrimaryDark = props => {
  const {text} = props;
  return (
    <>
      <TextRegularDescriptionComponent color={colors.PrimaryDark}>
        {text}
      </TextRegularDescriptionComponent>
    </>
  );
};

const TextBoldDesriptionWhite = props => {
  const {text} = props;
  return (
    <>
      <TextBoldDescriptionComponent color={colors.White}>
        {text}
      </TextBoldDescriptionComponent>
    </>
  );
};

const TextLightDesriptionWhite = props => {
  const {text} = props;
  return (
    <>
      <TextLightDescriptionComponent color={colors.White}>
        {text}
      </TextLightDescriptionComponent>
    </>
  );
};

const TextBoldSubTitleBlack = props => {
  const {text} = props;
  return (
    <>
      <TextBoldSubTitleComponent color={colors.Black}>
        {text}
      </TextBoldSubTitleComponent>
    </>
  );
};

const TextLightDescriptionBlack = props => {
  const {text} = props;
  return (
    <>
      <TextLightDescriptionComponent color={colors.Black}>
        {text}
      </TextLightDescriptionComponent>
    </>
  );
};

const TextBoldTitleWhite = props => {
  const {text} = props;
  return (
    <>
      <TextBoldTitleComponent color={colors.White}>
        {text}
      </TextBoldTitleComponent>
    </>
  );
};

const TextRegularSubTitlePrimary = props => {
  const {text} = props;
  return (
    <>
      <TextRegularSubTitleComponent color={colors.Primary}>
        {text}
      </TextRegularSubTitleComponent>
    </>
  );
};

const TextRegularSubTitleTersierPrimary = props => {
  const {text} = props;
  return (
    <>
      <TextRegularSubTitleComponent color={colors.TersierPrimary}>
        {text}
      </TextRegularSubTitleComponent>
    </>
  );
};

const TextBoldTitlePrimary = props => {
  const {text} = props;
  return (
    <>
      <TextBoldTitleComponent color={colors.Primary}>
        {text}
      </TextBoldTitleComponent>
    </>
  );
};

export {
  TextBoldTitle2PrimaryDark,
  TextBoldTitleBlack,
  TextBoldTitleWhite,
  TextBoldTitlePrimary,
  TextBoldSubTitleBlack,
  TextBoldDesriptionWhite,
  TextRegularSubTitlePrimary,
  TextRegularSubTitleTersierPrimary,
  TextRegularDescriptionWhite,
  TextRegularDescriptionBlack,
  TextRegularSubTitlePrimaryDark,
  TextLightDesriptionWhite,
  TextLightDescriptionBlack,
};
