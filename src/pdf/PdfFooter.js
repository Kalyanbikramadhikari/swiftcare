import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#01498c', 
        color:'#ffffff',
        padding: 10,
        marginTop: 20,
        // borderTopWidth: 1,
        borderTopColor: '#000',
    },
    contactRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    contactText: {
        fontSize: 12,
    },
});

const PdfFooter = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.contactRow}>
                <Text style={styles.contactText}>Phone: +977 979345934</Text>
            </View>
            <View style={styles.contactRow}>
                <Text style={styles.contactText}>Email: swiftcarediagnostic@gmail.com</Text>
            </View>
            <View style={styles.contactRow}>
                <Text style={styles.contactText}>Location: Kusunti Height 14, Lalitpur</Text>
            </View>
            <View style={styles.contactRow}>
                <Text style={styles.contactText}>Facebook: Facebook</Text>
            </View>
        </View>
    );
};

export default PdfFooter;
