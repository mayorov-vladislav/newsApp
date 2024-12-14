import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { globalStyle } from '../styles/style';


export default function FullInfo({ route }) {


    return (
        <View style={globalStyle.main}>
            <Text style={globalStyle.text}>{ route.params.name }</Text>
            <Text style={styles.full}>{ route.params.full }</Text>

            <Image source={ route.params.img } style={{
                width: '100%',
                height: 200,
            }}/>
        </View>
    );

}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mtLight',
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center',
        color: '#f55151',
        marginBottom: 20,
    }
});
