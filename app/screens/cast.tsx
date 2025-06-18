import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const castData = [
  {
    id: '1',
    name: 'Chad Stahelski',
    role: 'Director',
    age: 54,
    image: 'https://cdn.prod.website-files.com/652e1d0f532c272ff40207d0/654a348668add8c89454af34_Chad%20Stahelski.jpg',
    bio: 'Chad Stahelski is an American stuntman and film director, known for his work on the John Wick series.',
    fullName: 'Chad Stahelski',
    birthDate: 'September 20, 1968',
    birthPlace: 'Palmer, Massachusetts, USA',
    nationality: 'American',
    height: '6\'2" (1.88 m)',
    knownFor: 'Directing, Stunt Coordination',
    yearsActive: '1992–present',
    photos: [
      'https://cdn.prod.website-files.com/652e1d0f532c272ff40207d0/654a348668add8c89454af34_Chad%20Stahelski.jpg',
      'https://www.hollywoodreporter.com/wp-content/uploads/2019/05/chad_stahelski_director_john_wick.jpg',
      'https://variety.com/wp-content/uploads/2019/05/chad-stahelski-john-wick-director.jpg',
    ],
    filmography: [
      { title: 'John Wick: Chapter 4', year: '2023', role: 'Director' },
      { title: 'John Wick: Chapter 3 - Parabellum', year: '2019', role: 'Director' },
      { title: 'John Wick: Chapter 2', year: '2017', role: 'Director' },
      { title: 'John Wick', year: '2014', role: 'Director' },
    ]
  },
  {
    id: '2',
    name: 'Keanu Reeves',
    role: 'John Wick',
    age: 59,
    image: 'https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
    bio: 'Keanu Charles Reeves whose first name means "cool breeze over the mountains" in Hawaiian. Reeves is known for his starring roles in several blockbuster films, including comedies from the Bill and Ted franchise (1989-2020); action thrillers Point Break (1991), Speed (1994), and the John Wick franchise (2014-2023); psychological thriller The Devil\'s Advocate (1997); supernatural thriller Constantine (2005); and science fiction films The Matrix franchise.',
    fullName: 'Keanu Charles Reeves',
    birthDate: 'September 2, 1964',
    birthPlace: 'Beirut, Lebanon',
    nationality: 'Canadian',
    height: '6\'1" (1.86 m)',
    knownFor: 'Actor, Producer',
    yearsActive: '1984–present',
    photos: [
      'https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
      'https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMGNkNC00NzU4LWA4ODktZTVhMTRiZmFlZGI0XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg',
      'https://hips.hearstapps.com/hmg-prod/images/keanu-reeves-attends-the-premiere-of-lionsgates-john-wick-news-photo-1579718107.jpg',
      'https://variety.com/wp-content/uploads/2019/05/keanu-reeves.jpg',
    ],
    filmography: [
      { title: 'John Wick: Chapter 4', year: '2023', role: 'John Wick' },
      { title: 'The Matrix Resurrections', year: '2021', role: 'Neo' },
      { title: 'Toy Story 4', year: '2019', role: 'Duke Caboom (voice)' },
      { title: 'Always Be My Maybe', year: '2019', role: 'Himself' },
      { title: 'John Wick: Chapter 3 - Parabellum', year: '2019', role: 'John Wick' },
      { title: 'Destination Wedding', year: '2018', role: 'Frank' },
    ]
  },
  {
    id: '3',
    name: 'Halle Berry',
    role: 'Sofia',
    age: 57,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Halle_Berry-1910.jpg/1200px-Halle_Berry-1910.jpg',
    bio: 'Halle Berry is an American actress and former fashion model. She won the Academy Award for Best Actress in 2002 for her performance in Monster\'s Ball, becoming the first African-American woman to win the award.',
    fullName: 'Halle Maria Berry',
    birthDate: 'August 14, 1966',
    birthPlace: 'Cleveland, Ohio, USA',
    nationality: 'American',
    height: '5\'5" (1.65 m)',
    knownFor: 'Acting',
    yearsActive: '1989–present',
    photos: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Halle_Berry-1910.jpg/1200px-Halle_Berry-1910.jpg',
      'https://www.usmagazine.com/wp-content/uploads/2019/05/Halle-Berry-John-Wick-3.jpg',
      'https://static.hollywoodreporter.com/sites/default/files/2019/05/halle_berry_john_wick_chapter_3_parabellum_still_-_h_2019.jpg',
      'https://www.essence.com/wp-content/uploads/2019/05/GettyImages-1145764928.jpg',
    ],
    filmography: [
      { title: 'John Wick: Chapter 3 - Parabellum', year: '2019', role: 'Sofia' },
      { title: 'Kidnap', year: '2017', role: 'Karla Dyson' },
      { title: 'X-Men: Days of Future Past', year: '2014', role: 'Storm' },
      { title: 'The Call', year: '2013', role: 'Jordan Turner' },
    ]
  },
  {
    id: '4',
    name: 'Ian McShane',
    role: 'Winston',
    age: 81,
    image: 'https://m.media-amazon.com/images/M/MV5BMmMyNDcwMDgtMmIxNC00NTcyLWIwMmItNDQzNmJjNmVhYjhhXkEyXkFqcGc@._V1_.jpg',
    bio: 'Ian McShane is a British actor, producer, and director, best known for his role as Al Swearengen in Deadwood and Winston in the John Wick franchise.',
    fullName: 'Ian David McShane',
    birthDate: 'September 29, 1942',
    birthPlace: 'Blackburn, Lancashire, England',
    nationality: 'British',
    height: '5\'7" (1.70 m)',
    knownFor: 'Acting',
    yearsActive: '1962–present',
    photos: [
      'https://m.media-amazon.com/images/M/MV5BMmMyNDcwMDgtMmIxNC00NTcyLWIwMmItNDQzNmJjNmVhYjhhXkEyXkFqcGc@._V1_.jpg',
      'https://static.wikia.nocookie.net/johnwick/images/5/5e/Winston_Scott.jpg',
      'https://www.hollywoodreporter.com/wp-content/uploads/2019/05/ian_mcshane_john_wick_3_still_-_h_2019.jpg',
      'https://variety.com/wp-content/uploads/2019/05/ian-mcshane-john-wick.jpg',
    ],
    filmography: [
      { title: 'John Wick: Chapter 4', year: '2023', role: 'Winston' },
      { title: 'John Wick: Chapter 3 - Parabellum', year: '2019', role: 'Winston' },
      { title: 'John Wick: Chapter 2', year: '2017', role: 'Winston' },
      { title: 'John Wick', year: '2014', role: 'Winston' },
    ]
  },
  {
    id: '5',
    name: 'Laurence Fishburne',
    role: 'Bowery King',
    age: 62,
    image: 'https://assets.playbill.com/head-shots/AMERICAN-BUFFALO-L.-Fishburne-Cropped.png',
    bio: 'Laurence Fishburne is an American actor and producer. He is known for his roles as Morpheus in The Matrix trilogy and as the Bowery King in the John Wick franchise.',
    fullName: 'Laurence John Fishburne III',
    birthDate: 'July 30, 1961',
    birthPlace: 'Augusta, Georgia, USA',
    nationality: 'American',
    height: '6\'0" (1.83 m)',
    knownFor: 'Acting, Producing',
    yearsActive: '1972–present',
    photos: [
      'https://assets.playbill.com/head-shots/AMERICAN-BUFFALO-L.-Fishburne-Cropped.png',
      'https://www.hollywoodreporter.com/wp-content/uploads/2017/02/laurence_fishburne_john_wick_2_still.jpg',
      'https://variety.com/wp-content/uploads/2019/05/laurence-fishburne-john-wick-3.jpg',
      'https://static.wikia.nocookie.net/matrix/images/6/67/Morpheus.jpg',
    ],
    filmography: [
      { title: 'John Wick: Chapter 4', year: '2023', role: 'Bowery King' },
      { title: 'John Wick: Chapter 3 - Parabellum', year: '2019', role: 'Bowery King' },
      { title: 'John Wick: Chapter 2', year: '2017', role: 'Bowery King' },
      { title: 'The Matrix Resurrections', year: '2021', role: 'Morpheus' },
    ]
  },
  {
    id: '6',
    name: 'Mark Dacascos',
    role: 'Zero',
    age: 60,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCQPswwi593kHqdZDa4Gx8vyI51ODjX8bKsiOy-GamPzdwo5ywYowajiIxii0Xug7jb78-8ikVYfi0T2jvphbJw',
    bio: 'Mark Dacascos is an American actor, martial artist, and television personality, known for his roles in action films and as the Chairman on Iron Chef America.',
    fullName: 'Mark Alan Dacascos',
    birthDate: 'February 26, 1964',
    birthPlace: 'Honolulu, Hawaii, USA',
    nationality: 'American',
    height: '5\'8" (1.73 m)',
    knownFor: 'Acting, Martial Arts',
    yearsActive: '1985–present',
    photos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCQPswwi593kHqdZDa4Gx8vyI51ODjX8bKsiOy-GamPzdwo5ywYowajiIxii0Xug7jb78-8ikVYfi0T2jvphbJw',
      'https://www.hollywoodreporter.com/wp-content/uploads/2019/05/mark_dacascos_john_wick_3_still.jpg',
      'https://variety.com/wp-content/uploads/2019/05/mark-dacascos-zero-john-wick.jpg',
      'https://www.denofgeek.com/wp-content/uploads/2019/05/mark-dacascos-iron-chef.jpg',
    ],
    filmography: [
      { title: 'John Wick: Chapter 3 - Parabellum', year: '2019', role: 'Zero' },
      { title: 'Wu Assassins', year: '2019', role: 'Kai Jin' },
      { title: 'Iron Chef America', year: '2005-2018', role: 'The Chairman' },
    ]
  },
  {
    id: '7',
    name: 'Asia Kate Dillon',
    role: 'The Adjudicator',
    age: 39,
    image: 'https://people.com/thmb/MxE4jJBHS4h2hmqk3-m5QzIhkR0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/asia-kate-dillon-2000-2a8c5c1d8b8c4e5a9f5c5c5c5c5c5c5c.jpg',
    bio: 'Asia Kate Dillon is an American actor, known for their roles in Orange Is the New Black and Billions, and for being one of the first non-binary actors to play a non-binary character on television.',
    fullName: 'Asia Kate Dillon',
    birthDate: 'November 15, 1984',
    birthPlace: 'Ithaca, New York, USA',
    nationality: 'American',
    height: '5\'7" (1.70 m)',
    knownFor: 'Acting',
    yearsActive: '2008–present',
    photos: [
      'https://people.com/thmb/MxE4jJBHS4h2hmqk3-m5QzIhkR0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/asia-kate-dillon-2000-2a8c5c1d8b8c4e5a9f5c5c5c5c5c5c5c.jpg',
      'https://www.hollywoodreporter.com/wp-content/uploads/2019/05/asia_kate_dillon_john_wick_3_still.jpg',
      'https://variety.com/wp-content/uploads/2019/05/asia-kate-dillon-adjudicator.jpg',
      'https://www.out.com/sites/default/files/2019/05/15/asia-kate-dillon-billions.jpg',
    ],
    filmography: [
      { title: 'John Wick: Chapter 3 - Parabellum', year: '2019', role: 'The Adjudicator' },
      { title: 'Billions', year: '2016-2023', role: 'Taylor Mason' },
      { title: 'Orange Is the New Black', year: '2013-2015', role: 'Brandy Epps' },
    ]
  },
  {
    id: '8',
    name: 'Lance Reddick',
    role: 'Charon',
    age: 60,
    image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJx4G6T1wswfB-iJjmRWIxuFI_ktmf76r5uYBezjDJ1Q-QjaPGcwS19HPC9qiPcmlAeAcb4FUxU2FAjHU',
    bio: 'Lance Reddick was an American actor and musician, known for his roles as Cedric Daniels in The Wire and Charon in the John Wick franchise. He passed away in March 2023.',
    fullName: 'Lance Solomon Reddick',
    birthDate: 'December 31, 1962',
    birthPlace: 'Baltimore, Maryland, USA',
    nationality: 'American',
    height: '6\'3" (1.91 m)',
    knownFor: 'Acting, Music',
    yearsActive: '1996–2023',
    photos: [
      'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSJx4G6T1wswfB-iJjmRWIxuFI_ktmf76r5uYBezjDJ1Q-QjaPGcwS19HPC9qiPcmlAeAcb4FUxU2FAjHU',
      'https://www.hollywoodreporter.com/wp-content/uploads/2019/05/lance_reddick_john_wick_3_still.jpg',
      'https://variety.com/wp-content/uploads/2019/05/lance-reddick-charon.jpg',
      'https://static.wikia.nocookie.net/thewire/images/lance-reddick-daniels.jpg',
    ],
    filmography: [
      { title: 'John Wick: Chapter 4', year: '2023', role: 'Charon' },
      { title: 'John Wick: Chapter 3 - Parabellum', year: '2019', role: 'Charon' },
      { title: 'John Wick: Chapter 2', year: '2017', role: 'Charon' },
      { title: 'John Wick', year: '2014', role: 'Charon' },
      { title: 'The Wire', year: '2002-2008', role: 'Cedric Daniels' },
    ]
  },
];

export default function CastScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cast</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Section Title */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Cast</Text>
      </View>

      {/* Cast List */}
      <FlatList
        data={castData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.castItem}
            onPress={() =>
              router.push({
                pathname: '/screens/actor',
                params: {
                  name: item.name,
                  role: item.role,
                  image: item.image,
                  age: `${item.age} years old`,
                  bio: item.bio,
                  fullName: item.fullName,
                  birthDate: item.birthDate,
                  birthPlace: item.birthPlace,
                  nationality: item.nationality,
                  height: item.height,
                  knownFor: item.knownFor,
                  yearsActive: item.yearsActive,
                  photos: JSON.stringify(item.photos),
                  filmography: JSON.stringify(item.filmography),
                },
              })
            }
            activeOpacity={0.7}
          >
            <View style={styles.castContent}>
              <Image source={{ uri: item.image }} style={styles.castImage} />
              <View style={styles.castInfo}>
                <Text style={styles.castName}>{item.name}</Text>
                <Text style={styles.castRole}>{item.role}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export const options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  headerSpacer: {
    width: 40,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#f8f8f8',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  castItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  castContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  castImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  castInfo: {
    flex: 1,
  },
  castName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  castRole: {
    fontSize: 14,
    color: '#666',
  },
});