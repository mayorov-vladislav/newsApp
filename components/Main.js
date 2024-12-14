import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { globalStyle } from '../styles/style';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Form from './Form';



export default function Main({ navigation }) {

    const [news, setNews] = useState([
        { name: 'Java', anons: 'Java!!!', full: 'Java is cool!', key: '1', img: require('../assets/java.png') },
        { name: 'PHP', anons: 'PHP!!!', full: 'PHP is cool!', key: '2', img: require('../assets/php.png') },
        { name: 'C#', anons: 'C#!!!', full: 'C# is cool!', key: '3', img: require('../assets/c#.png') },
    ]);

    const [modalWindow, setModalWindow] = useState(false)

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();

            return [
                article, 
                ...list,
            ]
        });
        setModalWindow(false)
    }

    return (
        <View style={globalStyle.main}>
            <Modal visible={modalWindow}>
                <Ionicons name="close-circle" size={34} color="black" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
                <View style={globalStyle.main}>
                    <Text style={styles.title}>Форма добавления статей</Text>
                    <Form addArticle={addArticle}></Form>
                </View>
            </Modal>

            <Ionicons name="add-circle-sharp" size={34} color="black" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
            
            <Text style={[globalStyle.text, styles.header]}>Главная страница</Text>

            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                    <Text style={styles.title}>{ item.name }</Text>
                    <Image source={item.img} style={{
                        width: '100%',
                        height: 200,
                    }}/>
                </TouchableOpacity>
            )}>
            </FlatList>

        </View>
    );

}

const styles = StyleSheet.create({
    iconAdd: {
        textAlign: 'center',
        marginBottom: -15,
    },
    
    iconClose: {
        textAlign: 'center',
        marginTop: 15,
    },

    header: {
        marginBottom: 5,
    },

    item: {
        width: '100%',
        marginBottom: 30,
    },

    title: {
        fontFamily: 'mtBold',
        fontSize: 22,
        textAlign: 'center',
        color: '#474747'
    },
});
