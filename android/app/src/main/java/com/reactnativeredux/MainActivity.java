package com.reactnativeredux;

import com.facebook.react.ReactActivity;
import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdater;
import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdater.ReactNativeAutoUpdaterUpdateType;
import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdater.ReactNativeAutoUpdaterFrequency;
import com.aerofs.reactnativeautoupdater.ReactNativeAutoUpdaterActivity;

public class MainActivity extends ReactNativeAutoUpdaterActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "reactNativeRedux";
    }

    // Add required methods
    /**
     * URL for the metadata of the update.
     */
    @Override
    protected String getUpdateMetadataUrl() {
        return "http://192.168.1.2:3000/sc_comfort/update.json";
    }

    /**
     * Name of the metadata file shipped with the app.
     * This metadata is used to compare the shipped JS code against the updates.
     */
    @Override
    protected String getMetadataAssetName() {
        return "metadata.android.json";
    }

    /**
     * If your updates metadata JSON has a relative URL for downloading
     * the JS bundle, set this hostname.
     */
    @Override
    protected String getHostnameForRelativeDownloadURLs() {
        return "http://192.168.1.2:3000";
    }

    /**
     * Decide what type of updates to download.
     * Available options -
     *  MAJOR - will download only if major version number changes
     *  MINOR - will download if major or minor version number changes
     *  PATCH - will download for any version change
     * default value - PATCH
     */
    // @Override
    // protected ReactNativeAutoUpdaterUpdateType getAllowedUpdateType() {
    //     return ReactNativeAutoUpdaterUpdateType.MINOR;
    // }

    /**
     * Decide how frequently to check for updates.
     * Available options -
     *  EACH_TIME - each time the app starts
     *  DAILY     - maximum once per day
     *  WEEKLY    - maximum once per week
     * default value - EACH_TIME
     */
    // @Override
    // protected ReactNativeAutoUpdaterFrequency getUpdateFrequency() {
    //     return ReactNativeAutoUpdaterFrequency.EACH_TIME;
    // }

    /**
     * To show progress during the update process.
     */
    @Override
    protected boolean getShowProgress() {
        return true;
    }
}
