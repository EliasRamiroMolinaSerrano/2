"use client"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

const { width } = Dimensions.get("window")
const SPACING = 4

// Define types
interface Photo {
  id: number
  uri: string
  height: number
}

interface LocalSearchParams {
  name?: string
}

export default function PhotoGalleryScreen() {
  const router = useRouter()
  const params = useLocalSearchParams() as LocalSearchParams

  const actorName: string = params.name || "Actor"

  // Different photo collections for each actor with working URLs
  const getActorPhotos = (name: string): Photo[] => {
    switch (name) {
      case "Keanu Reeves":
        return [
          {
            id: 1,
            uri: "https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
            height: 200,
          },
          {
            id: 2,
            uri: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
            height: 180,
          },
          {
            id: 3,
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/LanaDRPrimavera310524_%2810_of_155%29_%2853765300307%29_%28cropped%29.jpg/1200px-LanaDRPrimavera310524_%2810_of_155%29_%2853765300307%29_%28cropped%29.jpg",
            height: 220,
          },
          {
            id: 4,
            uri: "https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            height: 160,
          },
          {
            id: 5,
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ih8xLGxfCtPzJrwuXDRkt6t3WSG6x0mgOQ&s",
            height: 190,
          },
          {
            id: 6,
            uri: "https://hips.hearstapps.com/hmg-prod/images/keanu-reeves-9454211-1-402.jpg",
            height: 170,
          },
          {
            id: 7,
            uri: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            height: 150,
          },
          {
            id: 8,
            uri: "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
            height: 210,
          },
          {
            id: 9,
            uri: "https://image.tmdb.org/t/p/w500/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg",
            height: 180,
          },
          {
            id: 10,
            uri: "https://image.tmdb.org/t/p/w500/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
            height: 200,
          },
          {
            id: 11,
            uri: "https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
            height: 165,
          },
          {
            id: 12,
            uri: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
            height: 195,
          },
        ]

      case "Halle Berry":
        return [
          {
            id: 1,
            uri: "https://www.hollywoodreporter.com/wp-content/uploads/2024/03/Chad-Stahelski-Astra-Film-Awards-GettyImages-1913528383-H-2024.jpg?w=1296&h=730&crop=1",
            height: 200,
          },
          {
            id: 2,
            uri: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/chadstahelski.png",
            height: 180,
          },
          {
            id: 3,
            uri: "https://discussingfilm.net/wp-content/uploads/2020/06/20200624_100847.jpg",
            height: 160,
          },
          {
            id: 4,
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptqIRWls3SKaR3WYxSf7zDsnRtVQXbQfWxg&s",
            height: 220,
          },
          {
            id: 5,
            uri: "https://image.tmdb.org/t/p/w500/5VdpqWhCE0vVg6Z9XWOTqHRHdtH.jpg",
            height: 170,
          },
          {
            id: 6,
            uri: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            height: 190,
          },
          {
            id: 7,
            uri: "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
            height: 150,
          },
          {
            id: 8,
            uri: "https://image.tmdb.org/t/p/w500/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg",
            height: 210,
          },
          {
            id: 9,
            uri: "https://image.tmdb.org/t/p/w500/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
            height: 175,
          },
          {
            id: 10,
            uri: "https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
            height: 185,
          },
        ]

      case "Ian McShane":
        return [
          {
            id: 1,
            uri: "https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
            height: 200,
          },
          {
            id: 2,
            uri: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
            height: 180,
          },
          {
            id: 3,
            uri: "https://image.tmdb.org/t/p/w500/rCP2z2h9zwKW1lsWaWmN8BQBCPB.jpg",
            height: 160,
          },
          {
            id: 4,
            uri: "https://image.tmdb.org/t/p/w500/8gLhu8UFPZfH2Hv11JhTZkb9CVy.jpg",
            height: 190,
          },
          {
            id: 5,
            uri: "https://image.tmdb.org/t/p/w500/xIMqyJUbYjAoFXXVz3finGiFlUw.jpg",
            height: 170,
          },
          {
            id: 6,
            uri: "https://image.tmdb.org/t/p/w500/5VdpqWhCE0vVg6Z9XWOTqHRHdtH.jpg",
            height: 220,
          },
          {
            id: 7,
            uri: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            height: 155,
          },
          {
            id: 8,
            uri: "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
            height: 205,
          },
        ]

      case "Laurence Fishburne":
        return [
          {
            id: 1,
            uri: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            height: 200,
          },
          {
            id: 2,
            uri: "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
            height: 180,
          },
          {
            id: 3,
            uri: "https://image.tmdb.org/t/p/w500/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg",
            height: 160,
          },
          {
            id: 4,
            uri: "https://image.tmdb.org/t/p/w500/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
            height: 190,
          },
          {
            id: 5,
            uri: "https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
            height: 170,
          },
          {
            id: 6,
            uri: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
            height: 210,
          },
          {
            id: 7,
            uri: "https://image.tmdb.org/t/p/w500/rCP2z2h9zwKW1lsWaWmN8BQBCPB.jpg",
            height: 165,
          },
          {
            id: 8,
            uri: "https://image.tmdb.org/t/p/w500/8gLhu8UFPZfH2Hv11JhTZkb9CVy.jpg",
            height: 185,
          },
          {
            id: 9,
            uri: "https://image.tmdb.org/t/p/w500/xIMqyJUbYjAoFXXVz3finGiFlUw.jpg",
            height: 175,
          },
        ]

      case "Mark Dacascos":
        return [
          {
            id: 1,
            uri: "https://image.tmdb.org/t/p/w500/rCP2z2h9zwKW1lsWaWmN8BQBCPB.jpg",
            height: 200,
          },
          {
            id: 2,
            uri: "https://image.tmdb.org/t/p/w500/8gLhu8UFPZfH2Hv11JhTZkb9CVy.jpg",
            height: 180,
          },
          {
            id: 3,
            uri: "https://image.tmdb.org/t/p/w500/xIMqyJUbYjAoFXXVz3finGiFlUw.jpg",
            height: 160,
          },
          {
            id: 4,
            uri: "https://image.tmdb.org/t/p/w500/5VdpqWhCE0vVg6Z9XWOTqHRHdtH.jpg",
            height: 190,
          },
          {
            id: 5,
            uri: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            height: 170,
          },
          {
            id: 6,
            uri: "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
            height: 155,
          },
          {
            id: 7,
            uri: "https://image.tmdb.org/t/p/w500/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg",
            height: 205,
          },
        ]

      case "Asia Kate Dillon":
        return [
          {
            id: 1,
            uri: "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
            height: 200,
          },
          {
            id: 2,
            uri: "https://image.tmdb.org/t/p/w500/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg",
            height: 180,
          },
          {
            id: 3,
            uri: "https://image.tmdb.org/t/p/w500/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
            height: 160,
          },
          {
            id: 4,
            uri: "https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
            height: 190,
          },
          {
            id: 5,
            uri: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
            height: 175,
          },
          {
            id: 6,
            uri: "https://image.tmdb.org/t/p/w500/rCP2z2h9zwKW1lsWaWmN8BQBCPB.jpg",
            height: 165,
          },
        ]

      case "Lance Reddick":
        return [
          {
            id: 1,
            uri: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
            height: 200,
          },
          {
            id: 2,
            uri: "https://image.tmdb.org/t/p/w500/rCP2z2h9zwKW1lsWaWmN8BQBCPB.jpg",
            height: 180,
          },
          {
            id: 3,
            uri: "https://image.tmdb.org/t/p/w500/8gLhu8UFPZfH2Hv11JhTZkb9CVy.jpg",
            height: 160,
          },
          {
            id: 4,
            uri: "https://image.tmdb.org/t/p/w500/xIMqyJUbYjAoFXXVz3finGiFlUw.jpg",
            height: 190,
          },
          {
            id: 5,
            uri: "https://image.tmdb.org/t/p/w500/5VdpqWhCE0vVg6Z9XWOTqHRHdtH.jpg",
            height: 170,
          },
          {
            id: 6,
            uri: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            height: 185,
          },
          {
            id: 7,
            uri: "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
            height: 155,
          },
          {
            id: 8,
            uri: "https://image.tmdb.org/t/p/w500/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg",
            height: 195,
          },
        ]

      case "Chad Stahelski":
       return [
          {
            id: 1,
            uri: "https://www.hollywoodreporter.com/wp-content/uploads/2024/03/Chad-Stahelski-Astra-Film-Awards-GettyImages-1913528383-H-2024.jpg?w=1296&h=730&crop=1",
            height: 200,
          },
          {
            id: 2,
            uri: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/chadstahelski.png",
            height: 180,
          },
          {
            id: 3,
            uri: "https://discussingfilm.net/wp-content/uploads/2020/06/20200624_100847.jpg",
            height: 160,
          },
          {
            id: 4,
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptqIRWls3SKaR3WYxSf7zDsnRtVQXbQfWxg&s",
            height: 220,
          },
        ]

      default:
        return [
          {
            id: 1,
            uri: "https://image.tmdb.org/t/p/w500/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
            height: 200,
          },
        ]
    }
  }

  const allPhotos: Photo[] = getActorPhotos(actorName)

  // Split photos into two columns for masonry layout
  const leftColumnPhotos: Photo[] = []
  const rightColumnPhotos: Photo[] = []

  allPhotos.forEach((photo: Photo, index: number) => {
    if (index % 2 === 0) {
      leftColumnPhotos.push(photo)
    } else {
      rightColumnPhotos.push(photo)
    }
  })

  const renderPhotoColumn = (photos: Photo[], isLeft = true) => (
    <View style={[styles.column, isLeft ? styles.leftColumn : styles.rightColumn]}>
      {photos.map((photo: Photo) => (
        <TouchableOpacity
          key={photo.id}
          style={[styles.photoContainer, { height: photo.height }]}
          activeOpacity={0.8}
          onPress={() => {
            // Handle photo tap - could open full screen viewer
            console.log("Photo tapped:", photo.id)
          }}
        >
          <Image
            source={{ uri: photo.uri }}
            style={styles.photo}
            resizeMode="cover"
            onError={(error) => {
              console.log("Image load error:", error.nativeEvent.error)
            }}
            onLoad={() => {
              console.log("Image loaded successfully")
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.7}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Photos</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Photo Grid */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.photoGrid}>
          {renderPhotoColumn(leftColumnPhotos, true)}
          {renderPhotoColumn(rightColumnPhotos, false)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export const options = {
  headerShown: false,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  headerSpacer: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  photoGrid: {
    flexDirection: "row",
    paddingHorizontal: SPACING,
    paddingTop: SPACING,
    paddingBottom: 20,
  },
  column: {
    flex: 1,
  },
  leftColumn: {
    marginRight: SPACING / 2,
  },
  rightColumn: {
    marginLeft: SPACING / 2,
  },
  photoContainer: {
    marginBottom: SPACING,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    width: "100%",
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
})
