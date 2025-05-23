import { Dimensions } from 'react-native';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const MyProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
      <View style={styles.profileImagePlaceholder}>
        <Feather name="user" size={60} color="#FFF" />
      </View>
        <Feather name="check-circle" size={24} color="#2196F3" style={styles.verifiedIcon} />
        <Text style={styles.tailorName}>Shabana</Text>
        <View style={styles.ratingAndOrders}>
          <View style={styles.rating}>
            <Feather name="star" size={16} color="#FFC107" style={styles.starIcon} />
            <Text style={styles.ratingText}>4.8</Text>
          </View>
          <Text style={styles.orderText}>10 orders completed</Text>
        </View>

        <Text style={styles.description}>
          Corvallis pulvinar egestas. Sed convallis libero, quis porta mauris.
          Suspendisse tincidunt, risus a porta egestas, purus arcu vestibulum lorem,
          sed condimentum ipsum quam ac massa.
        </Text>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton}>
          <Feather name="edit" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.gallerySection}>
        <Text style={styles.galleryTitle}>Gallery</Text>
        <View style={styles.imageGrid}>
          {/* Replace these placeholders with actual image components */}
          <View style={styles.imagePlaceholder} />
          <View style={styles.imagePlaceholder} />
          <View style={styles.imagePlaceholder} />
          <View style={styles.imagePlaceholder} />
          <View style={styles.imagePlaceholder} />

          {/* Last Box with Plus Sign for Adding Image */}
          <View style={styles.imagePlaceholder}>
            <TouchableOpacity style={styles.addImageBox}>
              <Feather name="plus" size={24} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.reviewsSection}>
        <Text style={styles.reviewsTitle}>Reviews</Text>

        <View style={styles.reviewItem}>
          <View style={styles.reviewProfilePlaceholder}>
            <Feather name="user" size={30} color="#DDD" />
          </View>
          <View style={styles.reviewContent}>
            <Text style={styles.reviewerName}>Malika</Text>
            <View style={styles.reviewRating}>
              <Feather name="star" size={12} color="#FFC107" />
              <Feather name="star" size={12} color="#FFC107" />
              <Feather name="star" size={12} color="#FFC107" />
            </View>
            <Text style={styles.reviewText}>nice design</Text>
          </View>
        </View>

        <View style={styles.reviewItem}>
          <View style={styles.reviewProfilePlaceholder}>
            <Feather name="user" size={30} color="#DDD" />
          </View>
          <View style={styles.reviewContent}>
            <Text style={styles.reviewerName}>Bushra</Text>
            <View style={styles.reviewRating}>
              <Feather name="star" size={12} color="#FFC107" />
              <Feather name="star" size={12} color="#FFC107" />
              <Feather name="star" size={12} color="#FFC107" />
              <Feather name="star" size={12} color="#FFC107" />
            </View>
            <Text style={styles.reviewText}>Good fit</Text>
          </View>
        </View>

        <View style={styles.reviewItem}>
          <View style={styles.reviewProfilePlaceholder}>
            <Feather name="user" size={30} color="#DDD" />
          </View>
          <View style={styles.reviewContent}>
            <Text style={styles.reviewerName}>Mehroz</Text>
            <View style={styles.reviewRating}>
              <Feather name="star" size={12} color="#FFC107" />
              <Feather name="star" size={12} color="#FFC107" />
              <Feather name="star" size={12} color="#FFC107" />
              <Feather name="star" size={12} color="#FFC107" />
              <Feather name="star" size={12} color="#FFC107" />
            </View>
            <Text style={styles.reviewText}>
              Excellent service and very good work. Highly recommended.
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.chatButton}>
        <Feather name="message-circle" size={20} color="#FFF" />
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#DDD',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedIcon: {
    marginTop: 10,
  },
  tailorName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  gallerySection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  galleryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imagePlaceholder: {
    width: (screenWidth - 40) / 3,
    height: 100,
    backgroundColor: '#DDD',
    marginBottom: 10,
    borderRadius: 8,
  },
  addImageBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
    height: 100,
    borderRadius: 8,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  reviewsSection: {
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  reviewItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  reviewProfilePlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#DDD',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewRating: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#555',
  },
  chatButton: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  chatButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  ratingAndOrders: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 2,
  },
  orderText: {
    fontSize: 14,
    color: '#555',
  },
  starIcon: {
    marginRight: 2,
  },
});

export default MyProfile;
