package com.buildingrn;

import android.app.Application;

import com.crashlytics.android.Crashlytics;
import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePush;
import com.oblador.vectoricons.VectorIconsPackage;
import com.smixx.fabric.FabricPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.reactnativedocumentpicker.ReactNativeDocumentPicker;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import android.support.annotation.Nullable;
import com.reactnativenavigation.NavigationApplication;

import io.fabric.sdk.android.Fabric;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Override
    public String getJSBundleFile() {
        return CodePush.getJSBundleFile();
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new CodePush(getResources().getString(R.string.CODE_PUSH_ANDROID_KEY), getApplicationContext(), BuildConfig.DEBUG),
            new VectorIconsPackage(),
            new FabricPackage(),
            new PickerPackage(),
            new RNFetchBlobPackage(),
            new ReactNativeDocumentPicker(),
            new ReactNativeOneSignalPackage(),
            new ReactNativeConfigPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    @Override
    public void onCreate() {
        super.onCreate();
        Fabric.with(this, new Crashlytics());
        SoLoader.init(this, /* native exopackage */ false);
}
}