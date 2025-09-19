import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createSkeletonStyles } from "./style/UserCardSkeleton.style";
import ShimmerPlaceholder from "components/ShimmerPlaceholder";

const UserCardSkeleton: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createSkeletonStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      {/* Profile Section Skeleton */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <ShimmerPlaceholder width={74} height={74} borderRadius={37} />
        </View>
      </View>

      {/* User Info Section Skeleton */}
      <View style={styles.userInfoSection}>
        {/* User Name */}
        <ShimmerPlaceholder
          width={180}
          height={20}
          style={{ marginBottom: 8 }}
        />

        {/* Job Title */}
        <ShimmerPlaceholder
          width={120}
          height={14}
          style={{ marginBottom: 12 }}
        />

        {/* Status Badges */}
        <View style={styles.statusContainer}>
          <ShimmerPlaceholder width={80} height={28} borderRadius={15} />
          <ShimmerPlaceholder width={80} height={28} borderRadius={15} />
        </View>
      </View>

      {/* Details Section Skeleton */}
      <View style={styles.detailsSection}>
        {/* First Row */}
        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <ShimmerPlaceholder
              width={60}
              height={10}
              style={{ marginBottom: 6 }}
            />
            <ShimmerPlaceholder width="90%" height={14} />
          </View>
          <View style={styles.detailItem}>
            <ShimmerPlaceholder
              width={70}
              height={10}
              style={{ marginBottom: 6 }}
            />
            <ShimmerPlaceholder width="80%" height={14} />
          </View>
        </View>

        {/* Second Row */}
        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <ShimmerPlaceholder
              width={50}
              height={10}
              style={{ marginBottom: 6 }}
            />
            <ShimmerPlaceholder width="95%" height={14} />
          </View>
          <View style={styles.detailItem}>
            <ShimmerPlaceholder
              width={80}
              height={10}
              style={{ marginBottom: 6 }}
            />
            <ShimmerPlaceholder width="85%" height={14} />
          </View>
        </View>

        {/* Third Row */}
        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <ShimmerPlaceholder
              width={65}
              height={10}
              style={{ marginBottom: 6 }}
            />
            <ShimmerPlaceholder width="100%" height={14} />
          </View>
          <View style={styles.detailItem}>
            <ShimmerPlaceholder
              width={55}
              height={10}
              style={{ marginBottom: 6 }}
            />
            <ShimmerPlaceholder width="75%" height={14} />
          </View>
        </View>
      </View>

      {/* Button Skeleton */}
      <View style={styles.buttonContainer}>
        <ShimmerPlaceholder width="100%" height={48} borderRadius={12} />
      </View>
    </View>
  );
};

export default UserCardSkeleton;
