import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default function ActorScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Parse photos and filmography from params
  const photos = params.photos ? JSON.parse(params.photos as string) : [];
  const filmography = params.filmography ? JSON.parse(params.filmography as string) : [];

  const actor = {
    name: params.name || 'Keanu Reeves',
    age: params.age || '59 years old',
    image: params.image || 'https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
    bio: params.bio || `Keanu Charles Reeves whose first name means "cool breeze over the mountains" in Hawaiian. Reeves is known for his starring roles in several blockbuster films, including comedies from the Bill and Ted franchise (1989-2020); action thrillers Point Break (1991), Speed (1994), and the John Wick franchise (2014-2023); psychological thriller The Devil's Advocate (1997); supernatural thriller Constantine (2005); and science fiction films The Matrix franchise.`,
    fullName: params.fullName || 'Keanu Charles Reeves',
    birthDate: params.birthDate || 'September 2, 1964',
    birthPlace: params.birthPlace || 'Beirut, Lebanon',
    nationality: params.nationality || 'Canadian',
    height: params.height || '6\'1" (1.86 m)',
    knownFor: params.knownFor || 'Actor, Producer',
    yearsActive: params.yearsActive || '1984–present',
    photos: photos,
    filmography: filmography,
  };

  const handleMorePhotos = () => {
    router.push({
      pathname: '/screens/PhotoGalleryScreen',
      params: {
        name: actor.name,
        photos: JSON.stringify(actor.photos),
      },
    });
  };

  const renderPhotoItem = ({ item, index }) => (
    <TouchableOpacity style={styles.photoItem} key={index}>
      <Image source={{ uri: item }} style={styles.photoImage} />
    </TouchableOpacity>
  );

  const renderFilmographyItem = ({ item, index }) => (
    <View style={styles.filmItem} key={index}>
      <View style={styles.filmInfo}>
        <Text style={styles.filmTitle}>{item.title}</Text>
        <Text style={styles.filmRole}>{item.role}</Text>
      </View>
      <Text style={styles.filmYear}>{item.year}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Actor Image Background */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: actor.image }} style={styles.image} />
        <View style={styles.gradientOverlay} />
      </View>

      {/* Sliding Card */}
      <View style={styles.card}>
        {/* Close Button */}
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="close" size={28} color="#333" />
        </TouchableOpacity>

        {/* Card Content */}
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          {/* Actor Name and Age */}
          <View style={styles.headerInfo}>
            <Text style={styles.name}>{actor.name}</Text>
            <Text style={styles.age}>{actor.age}</Text>
          </View>

          {/* Bio Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Bio</Text>
            <Text style={styles.bioText}>{actor.bio}</Text>
          </View>

          {/* Information Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Information</Text>
            
            <View style={styles.infoList}>
              <Text style={styles.infoText}>{actor.knownFor}</Text>
              <Text style={styles.infoText}>{actor.birthDate} in {actor.birthPlace}</Text>
              <Text style={styles.infoText}>The Wire, The One</Text>
              <Text style={styles.infoText}>{actor.height}</Text>
            </View>
          </View>

          {/* Photos Section */}
          {actor.photos && actor.photos.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Photos</Text>
                <TouchableOpacity onPress={handleMorePhotos} activeOpacity={0.7}>
                  <Text style={styles.moreText}>More</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={actor.photos}
                renderItem={renderPhotoItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.photosList}
              />
            </View>
          )}

          {/* Filmography Section */}
          {actor.filmography && actor.filmography.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Filmography</Text>
              <View style={styles.filmographyList}>
                {actor.filmography.map((film, index) => (
                  <View key={index} style={styles.filmItem}>
                    <View style={styles.filmInfo}>
                      <Text style={styles.filmTitle}>{film.title}</Text>
                      <Text style={styles.filmRole}>{film.role}</Text>
                    </View>
                    <Text style={styles.filmYear}>{film.year}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

export const options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: height * 0.65,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  card: {
    position: 'absolute',
    bottom: 0,
    height: height * 0.6,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 25,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scrollContent: {
    paddingTop: 30,
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  headerInfo: {
    marginBottom: 25,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  age: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 15,
  },
  moreText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  bioText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    textAlign: 'justify',
  },
  infoList: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
  },
  infoText: {
    fontSize: 15,
    color: '#495057',
    marginBottom: 8,
    lineHeight: 20,
  },
  photosList: {
    paddingRight: 20,
  },
  photoItem: {
    marginRight: 12,
  },
  photoImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  filmographyList: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
  },
  filmItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  filmInfo: {
    flex: 1,
  },
  filmTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  filmRole: {
    fontSize: 14,
    color: '#666',
  },
  filmYear: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});