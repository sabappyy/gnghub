const urlParams = new URLSearchParams(window.location.search);

const TRACKING = {

    source: urlParams.get("utm_source") || "",

    campaign: urlParams.get("utm_campaign") || "",

    adset: urlParams.get("utm_adset") || "",

    ad: urlParams.get("utm_ad") || ""

};