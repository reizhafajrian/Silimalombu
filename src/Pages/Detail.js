import React from 'react';
import {Image, SafeAreaView, ScrollView, Text} from 'react-native';
import styled from 'styled-components';
import {IMGBGLogoDetail, ICBack} from '../Assets';
import {
  TextBoldTitle2PrimaryDark,
  TextBoldSubTitleBlack,
  TextLightDescriptionBlack,
} from '../Components/SimpleComponents/Text/Text';
import InformationEvent from '../Components/SimpleComponents/InformationEventDetail/InformationEvent';
import ButtonOrder from '../Components/SimpleComponents/ButtonDetail/ButtonOrder';
import InformationTree from '../Components/SimpleComponents/InformationTreeDetail/InformationTree';
import ListUsabilityNatural from '../Components/ListComponents/NaturalDetail/ListUsabilityNatural';
import ListNutrionSpices from '../Components/ListComponents/NutritionSpices/ListNutrionSpices';

function renderDefaultHeader(status) {
  if (status === 'Event' || status === 'Place') {
    return (
      <WrapperInfo>
        <InformationEvent type={'Time'} description={'05-06-2021'} />
        <InformationEvent type={'Place'} description={'Desa Silimalombu'} />
        <InformationEvent type={'Price'} description={0} />
      </WrapperInfo>
    );
  } else if (status === 'Tree') {
    return (
      <WrapperInfo>
        <InformationTree type={'LifeTime'} description={'6-8 Years'} />
        <InformationTree type={'Fruit'} description={'Kelapa'} />
        <InformationTree type={'Flower'} description={'Sekar Mayang'} />
        <InformationTree type={'Family'} description={'Arecacae'} />
      </WrapperInfo>
    );
  } else {
    return null;
  }
}

function renderButton(status) {
  if (status === 'Event') {
    return (
      <ButtonOrder
        content={'Book Now'}
        onPress={() => alert('Button Book Now ditekan')}
      />
    );
  } else {
    return null;
  }
}

//dummy weight Spices
const weight = 100;
export default function Detail(id, status) {
  const image = imgSource => {
    let imageValue;
    if (imgSource === undefined || imgSource === '') {
      imageValue = IMGBGLogoDetail;
    } else {
      imageValue = imgSource;
    }
    return imageValue;
  };

  const titleAbout = text => {
    switch (text) {
      case 'Event':
        return 'About the Event';
      case 'Place':
        return 'About the Place';
      case 'Tree':
        return 'About the Tree';
      case 'Spices':
        return 'About the Spices';
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ContainerDetail>
          <Image
            source={image('')}
            style={{
              top: 0,
              width: '100%',
              height: 360,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          />
          <ContainerDescription>
            <TextBoldTitle2PrimaryDark text={'Manggo Festival'} />
            {/* Hard code "Event" chage to variable status*/}
            {renderDefaultHeader('Event')}
            <TextBoldSubTitleBlack text={titleAbout('Event')} />
            <WrapperDescription>
              <Text style={{textAlign: 'justify'}}>
                <TextLightDescriptionBlack
                  text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus'
                  }
                />
              </Text>
            </WrapperDescription>
            {renderButton('Event')}
            {status === 'Tree' || status === 'Species' ? (
              <WrapperSubTitleNatural>
                <TextBoldSubTitleBlack
                  text={
                    status === 'Tree'
                      ? 'Usability the Tree'
                      : 'Usability the Species'
                  }
                />
              </WrapperSubTitleNatural>
            ) : null}
            {status === 'Tree' || status === 'spices' ? (
              <ListUsabilityNatural type={'Input Data here'} />
            ) : null}
            {status === 'spices' ? (
              <WrapperSubTitleNatural>
                <TextBoldSubTitleBlack
                  text={`Nutrient Content the Spices every ${weight} g`}
                />
              </WrapperSubTitleNatural>
            ) : null}
            {status === 'spices' ? (
              <ListNutrionSpices type={'Input Data here'} />
            ) : null}
          </ContainerDescription>
        </ContainerDetail>
      </ScrollView>
    </SafeAreaView>
  );
}

const ContainerDetail = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const ContainerDescription = styled.View`
  padding-horizontal: 16px;
  margin-bottom: 32px;
  margin-top: 24px;
`;

const WrapperInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

const WrapperDescription = styled.View`
  margin-top: 12px;
`;

const WrapperSubTitleNatural = styled.View`
  margin-top: 24px;
`;
