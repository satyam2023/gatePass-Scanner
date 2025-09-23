import { View, ActivityIndicator, Modal } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "redux/store/Store";
import { localStrings } from "shared/localization";
import { isAndroid } from "libs";
import React from "react";

import { palette } from "@theme/themes";
import TextWrapper from "components/TextWrapper";
import { createLoaderStyle } from "./Style";

const LoaderMainContent: React.FC = () => {
  const styles = createLoaderStyle();
  return (
    <View style={styles.modalContainer}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={"large"} color={palette.primary} />
        <TextWrapper style={styles.loadingText}>
          {localStrings.loading}
        </TextWrapper>
      </View>
    </View>
  );
};

const Loader: React.FC = () => {
  const loader = useSelector((state: RootState) => state.loader.loaderStatus);
  if (!loader) {
    return null;
  }

  return isAndroid ? (
    <Modal transparent={true} statusBarTranslucent>
      <LoaderMainContent />
    </Modal>
  ) : (
    <LoaderMainContent />
  );
};

export default Loader;
