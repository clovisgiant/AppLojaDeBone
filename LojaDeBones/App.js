

// import React in our code
import React from 'react';

// import all the components 
import {SafeAreaView,Text,View,StyleSheet,Image, ScrollView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleStyle}>
       Bones Abmael Store
      </Text>
      <ScrollView>
        <View style={{marginTop: 20}}>
          <Row />
          <Row2 />
          <Row />
          <Row />
          <Row />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

const Row = () => {
  const IMAGE_URL =
    'https://ae01.alicdn.com/kf/S75d3d31c12ab48b5b523301f170689fao/Alta-qualidade-meu-tridimensional-bordado-pai-chap-u-masculino-feminino-ver-o-bon-de-beisebol-viseira.jpg_640x640.jpg';
 const IMAGE_URL2 =
    'https://ae01.alicdn.com/kf/Se37f4107d9a54c75a56af38440e48ce96/Alta-qualidade-meu-tridimensional-bordado-pai-chap-u-masculino-feminino-ver-o-bon-de-beisebol-viseira.jpg_640x640.jpg';

const IMAGE_URL3 =
    'https://ae01.alicdn.com/kf/S076045fa8c9b48bf90a57258db5c19b96/Alta-qualidade-meu-tridimensional-bordado-pai-chap-u-masculino-feminino-ver-o-bon-de-beisebol-viseira.jpg_640x640.jpg';

    const IMAGE_URL4 =
    'https://ae01.alicdn.com/kf/S7b6976903d084276900b09704ee6bda0d/Alta-qualidade-meu-tridimensional-bordado-pai-chap-u-masculino-feminino-ver-o-bon-de-beisebol-viseira.jpg_640x640.jpg';
    
  const slides = [
    {
      key: 'comprar',     
      title: 'R$ 50,00 ',
      uri: IMAGE_URL,
      backgroundColor: 'yellow',
    },
    {
      key: 'comprar',
      title: 'R$ 50,00 ',
      uri: IMAGE_URL2,
      backgroundColor: '#febe29',
    },
    {
      key: 'comprar',      
      title: 'R$ 50,00',
      uri: IMAGE_URL3,
      backgroundColor: '#22bcb5',
    },
    {
      key: 'comprar',
      title: 'R$ 50,00 ',
      uri: IMAGE_URL4,
      backgroundColor: '#3395ff',
    },
    {
      key: 'comprar',
      title: 'R$ 50,00 ',      
      uri: IMAGE_URL,
      backgroundColor: '#f6437b',
    },
    {
      key: 'comprar',
      title: 'R$ 50,00',
      uri: IMAGE_URL,
      backgroundColor: '#febe29',
    },
  ];

  return (
    <View>
    
        <View style={styles.cardHeadingStyle}>
          <Text style={styles.cardHeadingTextStyle}>
            Recomendado para você 
          </Text>
          <Text 
            style={{color: '#228B22'}} 
            onPress={() => alert('Mais')}>
            MAIS
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {slides.map((item, key) => (
              <View style={{margin: 5}}>
                <Image
                  source={{
                    uri: item.uri,
                  }}
                  style={{width: 70, height: 70, margin: 10}}
                  
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      fontWeight: '200',
                    }}
                   >
                    {item.title}
                  </Text>
                  <Text style={{color: '#228B22'}}>
                    ⋮
                  </Text>
                </View>
                <View style={styles.childViewTextStyle}>
                  <Text
                    style={{
                      color: 'green',
                      fontWeight: '200',
                    }}
                     onPress={() => {
                      alert('Title ' + item.title + ' Clicked ' + item.uri);
                    }}>
                    
                    {item.key}
                  </Text>
                  <Text style={{color: '#228B22'}}>
                    {item.text
                  }</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>     
    </View>
  );
};

//Linha 2

const Row2 = () => {
  const IMAGE_URL =
    'https://ae01.alicdn.com/kf/Sa9beaaa48d4f4015ad654c27ddfdccc71/Bon-de-beisebol-animal-motivos-bon-adulto-bon-de-rede-unisex-pato-bordado-sombra-primavera-outono.jpg_640x640.jpg';
 const IMAGE_URL2 =
    'https://ae01.alicdn.com/kf/Se37f4107d9a54c75a56af38440e48ce96/Alta-qualidade-meu-tridimensional-bordado-pai-chap-u-masculino-feminino-ver-o-bon-de-beisebol-viseira.jpg_640x640.jpg';

const IMAGE_URL3 =
    'https://ae01.alicdn.com/kf/S076045fa8c9b48bf90a57258db5c19b96/Alta-qualidade-meu-tridimensional-bordado-pai-chap-u-masculino-feminino-ver-o-bon-de-beisebol-viseira.jpg_640x640.jpg';

    const IMAGE_URL4 =
    'https://ae01.alicdn.com/kf/S7b6976903d084276900b09704ee6bda0d/Alta-qualidade-meu-tridimensional-bordado-pai-chap-u-masculino-feminino-ver-o-bon-de-beisebol-viseira.jpg_640x640.jpg';
    
  const slides = [
    {
      key: 'comprar',     
      title: 'R$ 50,00 ',
      uri: IMAGE_URL,
      backgroundColor: 'yellow',
    },
    {
      key: 'comprar',
      title: 'R$ 40,00',
      uri: IMAGE_URL2,
      backgroundColor: '#febe29',
    },
    {
      key: 'comprar',     
      title: '40,00 ',
      uri: IMAGE_URL3,
      backgroundColor: '#22bcb5',
    },
    {
      key: 'conprar',
      title: '40,00 ',
      uri: IMAGE_URL4,
      backgroundColor: '#3395ff',
    },
    {
      key: 'comprar',
      title: '40,00 ',     
      uri: IMAGE_URL,
      backgroundColor: '#f6437b',
    },
    {
      key: 'comprar',
      title: '40,00 ',
      uri: IMAGE_URL,
      backgroundColor: '#febe29',
    },
  ];

  return (
    <View>
    
        <View style={styles.cardHeadingStyle}>
          <Text style={styles.cardHeadingTextStyle}>
            Recomendado para você 
          </Text>
          <Text 
            style={{color: '#228B22'}} 
            onPress={() => alert('Mais')}>
            MAIS
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {slides.map((item, key) => (
              <View style={{margin: 5}}>
                <Image
                  source={{
                    uri: item.uri,
                  }}
                  style={{width: 70, height: 70, margin: 10}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#494949',
                      fontWeight: '200',
                    }}
                    onPress={() => {
                      alert('Title ' + item.title + ' Clicked');
                    }}>
                    {item.title}
                  </Text>
                  <Text style={{color: '#228B22'}}>
                    ⋮
                  </Text>
                </View>
                <View style={styles.childViewTextStyle}>
                  <Text
                    style={{
                      color: '#606070',
                      fontWeight: '200',
                    }}>
                    {item.key}
                  </Text>
                  <Text style={{color: '#228B22'}}>
                    {item.text
                  }</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    padding: 30,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#307ecc',
  },
  
  cardHeadingStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeadingTextStyle: {
    color: '#606070',
    fontWeight: 'bold',
  },
  childViewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});