import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { globalStyle } from '../styles/style';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';

export default function Form({ addArticle }) {
    return (
        <View>
            <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values, action) => {
                addArticle(values);
                action.resetForm();
            }}>
                {(props) => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            placeholder='Введите заголовок'
                            value={props.values.name} 
                            onChangeText={props.handleChange('name')}>
                        </TextInput>

                        <TextInput 
                            style={styles.input}
                            placeholder='Введите анонс' 
                            multiline
                            value={props.values.anons} 
                            onChangeText={props.handleChange('anons')}>
                        </TextInput>
                        
                        <TextInput 
                            style={styles.input}
                            placeholder='Введите описание' 
                            value={props.values.full} 
                            multiline
                            onChangeText={props.handleChange('full')}>
                        </TextInput>
                        
                        <TextInput 
                            style={styles.input}
                            placeholder='Укажите фото' 
                            value={props.values.img} 
                            onChangeText={props.handleChange('img')}>
                        </TextInput>
                        
                        <View style={styles.button} >
                            <Button title='Добавить' onPress={props.handleSubmit}></Button>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );

}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 20,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5,
    },

    button: {
        marginTop: 20,
    }
});
