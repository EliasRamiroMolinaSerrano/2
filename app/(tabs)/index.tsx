import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router'; 


// You'll need to install these icon libraries:
// npm install react-native-vector-icons
// or use expo-vector-icons if using Expo
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MovieDetailsScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Details');

  const castData = [
    {
      id: 1,
      name: 'Keanu Reeves',
      image: 'https://image.tmdb.org/t/p/w185/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg'
    },
    {
      id: 2,
      name: 'Halle Berry',
      image: 'https://www.paramountshop.com/cdn/shop/files/spongebob-squarepants-life-sized-cardboard-cutout-standee-725187_grande.jpg?v=1718292084'
    }
  ];

  const trailerData = [
    {
      id: 1,
      title: 'Official Trailer',
      thumbnail: 'https://img.youtube.com/vi/M7XM597XO94/maxresdefault.jpg'
    },
    {
      id: 2,
      title: 'Final Trailer',
      thumbnail: 'https://img.youtube.com/vi/pU8-7BX9uxs/maxresdefault.jpg'
    }
  ];

  const renderCastItem = ({ item }) => (
    <View style={styles.castItem}>
      <Image source={{ uri: item.image }} style={styles.castImage} />
      <Text style={styles.castName}>{item.name}</Text>
    </View>
  );

  const renderTrailerItem = ({ item }) => (
    <TouchableOpacity style={styles.trailerItem}>
      <Image source={{ uri: item.thumbnail }} style={styles.trailerThumbnail} />
      <View style={styles.playButtonOverlay}>
        <Icon name="play" size={20} color="white" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreButton}>
            <Icon name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Movie Poster and Gradient Background */}
        <View style={styles.posterContainer}>
          <LinearGradient
            colors={['#FF6B35', '#F7931E', '#C73E1D', '#8B2635', '#4A1C40']}
            style={styles.gradientBackground}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg'
              }}
              style={styles.posterImage}
              resizeMode="cover"
            />
          </LinearGradient>
        </View>

        {/* Movie Info */}
        <View style={styles.movieInfo}>
          <Text style={styles.movieTitle}>JOHN WICK</Text>
          <Text style={styles.movieSubtitle}>CHAPTER 3</Text>
          <Text style={styles.movieSubtitle}>PARABELLUM</Text>
          
          {/* Rating */}
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Icon
                key={star}
                name={star <= 4 ? "star" : "star-outline"}
                size={16}
                color="#FFD700"
                style={styles.star}
              />
            ))}
          </View>

          {/* Movie Details */}
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>John Wick: Chapter 3 - Parabellum</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailText}>2h 10min</Text>
              <Text style={styles.detailSeparator}>•</Text>
              <Text style={styles.detailText}>Action</Text>
              <Text style={styles.detailSeparator}>•</Text>
              <Text style={styles.detailText}>2019</Text>
            </View>
          </View>

          {/* Trending Badge */}
          <View style={styles.trendingBadge}>
            <Icon name="trending-up" size={16} color="#FF6B35" />
            <Text style={styles.trendingText}>Trending</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.playButton}>
              <Icon name="play" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Icon name="bookmark-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs Section */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'Showtimes' && styles.activeTab]}
            onPress={() => setSelectedTab('Showtimes')}
          >
            <Text style={[styles.tabText, selectedTab === 'Showtimes' && styles.activeTabText]}>
              Showtimes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'Details' && styles.activeTab]}
            onPress={() => setSelectedTab('Details')}
          >
            <Text style={[styles.tabText, selectedTab === 'Details' && styles.activeTabText]}>
              Details
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content based on selected tab */}
        {selectedTab === 'Details' && (
          <View style={styles.detailsContent}>
            {/* Story Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Story</Text>
              <Text style={styles.storyText}>
                In this third installment of the adrenaline-fueled action franchise, super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin's guild, the High Table, John Wick is excommunicado, but the world's most ruthless hit men and women await his every turn.
              </Text>
            </View>

            {/* Cast Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Cast</Text>
                <Link href="/screens/cast" asChild>
                  <TouchableOpacity>
                    <Text style={styles.fullCastText}>Full Cast</Text>
                  </TouchableOpacity>
                </Link>
              </View>
              <FlatList
                data={castData}
                renderItem={renderCastItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.castList}
              />
            </View>

            {/* Trailers Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Trailers</Text>
                <TouchableOpacity>
                  <Text style={styles.moreVideosText}>More Videos</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={trailerData}
                renderItem={renderTrailerItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.trailersList}
              />
              
              {/* Bottom Icons */}
              <View style={styles.bottomIcons}>
                <View style={styles.iconItem}>
                  <Icon name="trending-up" size={16} color="#4285F4" />
                  <Text style={styles.iconText}>Trending</Text>
                </View>
                <View style={styles.iconItem}>
                  <MaterialIcons name="movie" size={16} color="#666" />
                </View>
              </View>
            </View>
          </View>
        )}

        {selectedTab === 'Showtimes' && (
          <View style={styles.detailsContent}>
            <Text style={styles.comingSoonText}>Showtimes coming soon...</Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="search" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="movie" size={24} color="#FF6B35" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="bookmark" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterContainer: {
    height: 500,
    position: 'relative',
  },
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterImage: {
    width: 200,
    height: 300,
    borderRadius: 15,
  },
  movieInfo: {
    padding: 20,
    backgroundColor: '#000',
  },
  movieTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 2,
  },
  movieSubtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 2,
    marginTop: -5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  star: {
    marginHorizontal: 2,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailItem: {
    marginBottom: 10,
  },
  detailLabel: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    color: '#999',
    fontSize: 14,
  },
  detailSeparator: {
    color: '#999',
    marginHorizontal: 8,
  },
  trendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 30,
  },
  trendingText: {
    color: '#FF6B35',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookmarkButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // New styles for the bottom section
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#111',
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#4285F4',
  },
  tabText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: 'white',
  },
  detailsContent: {
    paddingHorizontal: 20,
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
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fullCastText: {
    color: '#4285F4',
    fontSize: 14,
  },
  moreVideosText: {
    color: '#4285F4',
    fontSize: 14,
  },
  storyText: {
    color: '#999',
    fontSize: 14,
    lineHeight: 20,
  },
  castList: {
    paddingRight: 20,
  },
  castItem: {
    alignItems: 'center',
    marginRight: 15,
    width: 80,
  },
  castImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  castName: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  trailersList: {
    paddingRight: 20,
  },
  trailerItem: {
    marginRight: 15,
    position: 'relative',
  },
  trailerThumbnail: {
    width: 120,
    height: 80,
    borderRadius: 8,
  },
  playButtonOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
  },
  bottomIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  iconText: {
    color: '#4285F4',
    fontSize: 12,
    marginLeft: 4,
  },
  comingSoonText: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#111',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navItem: {
    padding: 10,
  },
});

export default MovieDetailsScreen;