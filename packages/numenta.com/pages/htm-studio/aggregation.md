---
title: HTM Studio - Aggregation Windows
---
To change the aggregation window for your time series, follow these three steps.

### Step 1: click on “Analyze”
![Click to Analyze](../images/1-agg-window-analyze.png)

### Step 2: click on "Advanced Settings"
![Advanced Settings](../images/2-agg-window-advanced-settings.png)

### Step 3: Change the value of the aggregation window or deselect “Aggregate data”
![“Aggregate data”](../images/3-agg-window-change-value.png)

If you want to tweak the value of the aggregation window yourself, you can use
these two principles as a general rule of thumb:

 * The larger the window, the more the data is aggregated. Not only is the time
   series smoothed out, it has also fewer points. The upside is that you
   increase robustness to noise, since the time series is smoother. But the
   downside is that you might miss some more granular anomalies, since the
   aggregated time series now has fewer points.
 * The smaller the window, the less the data is aggregated. If your time series
   is not particularly noisy, using a small window is fine. But if your time
   series is very noisy, HTM will not be able to generalize well and may focus
   on the noise rather than the actual data. You can prevent this by showing the
   HTM model more data containing the actual patterns; i.e. add more data points
   (rows) for this variable in the input CSV.
