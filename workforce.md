---
layout: projects
title: Workforce for ArcGIS
permalink: /workforce
---

{::options auto_ids="false" /}

<div class="container__back">
    <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/></svg> home
    </a>
</div>

<h1 class="workforce">
    Workforce for ArcGIS
    <span class="header-description">Designer, Android&nbsp;&nbsp;•&nbsp;&nbsp;2017 – Present</span>
</h1>

<section markdown="1">
Workforce is a web and mobile app that makes it easy for organizations to coordinate assignments to-do from the back office to the field.

<ul>
    <span>Organizations use Workforce to fuse work management into the ArcGIS platform. It improves the efficiency of your field workforce when:</span>
    <li>inspecting valves and meters</li>
    <li>completing service requests</li>
    <li>coordinating capital improvement projects</li>
    <li>scheduling and finishing one call tickets</li>
    <li>responding to unplanned events</li>
</ul>

<a class="chip read-more" target="_blank" href="https://www.esri.com/arcgis-blog/products/workforce/field-mobility/workforce-for-arcgis-is-evolving/">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="fill-workforce" d="M14.25 14.25H3.75V3.75H9V2.25H3.75C2.9175 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.9175 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V9H14.25V14.25ZM10.5 2.25V3.75H13.1925L5.82 11.1225L6.8775 12.18L14.25 4.8075V7.5H15.75V2.25H10.5Z"/></svg> Read more about the upcoming release
</a>
</section>

<section>
    <div class="container__image">
        <a target="_blank" href="https://photos.app.goo.gl/v1AZqmdjE7KQTae46"><img src="/images/wf_array.png" loading="auto" alt="Workforce Image Array"></a>
    </div>
</section>

<section markdown="1">
## Solutions
Previous versions of the Workforce mobile app did not support offline workflows. Trying to do anything would be met with a perpetual indeterminate progress indicator or an non-actionable message, letting you know you have no internet connection 😬

Workforce projects (scoped work/assignments) now need to be downloaded before they can be opened. This allows us to take map layers, assignments, attachments, and more information offline. 

While you're working, Workforce will periodically and automatically synchronize your assignments and map layers. If you're offline, Workforce will queue up the changes and sync whenever you get connectivity. This allows the user to continue working without worrying if the dispatchers in the back office are seeing their progress, reducing cognitive load and increasing trust and productivity.

<section>
    <div class="container__image">
        <a target="_blank" href="https://photos.app.goo.gl/7VEtzpaCfjy71HHb9"><img src="/images/wf_sync_and_browse_sm.png" loading="lazy" alt="Workforce Sync and Browse UI"></a>
    </div>
</section>

<ul>
    <span>We receive customer feedback in a variety of ways: customer Esri conferences, GeoNet (the GIS social network platform), and various stakeholders that interact with customers (account managers, product owners, etc). Much of the feedback we received was along the lines of improving the overall UX to be in-line with some of our more up-to-date and popular apps. Here were some of our areas of focus for improving the user experience:</span>
    <li>consistency with the other apps in our suite (visual design, navigation, UI components)</li>
    <li>modernize the UI based on changes to Material Design and the HIG</li>
    <li>light app theme to bring the focus to the map</li>
    <li>improve information hierarchy so long lists are less daunting and easier to parse</li>
    <li>batching of notifications</li>
    <li>bottom toolbar for quick access to integrations with other apps</li>
</ul>

Throughout our map-centric apps, we use bottom sheets as a reusable surface over the map view because it allows us to view contextual information while also viewing and interacting with the map. We wanted Workforce to use a modern bottom sheet that worked similar to our other apps, inspired by popular products like Apple and Google Maps.

<!-- <section>
    <div class="container__image">
        <em>gif...</em>
    </div>
</section> -->

Workforce had two ways to search. First, you could filter the list of assignments by address, assignment type, or ID. Second, If you accessed the map, you could search for places, workers, or features on the map. Since we combined the assignment list and map view, it made sense to combine the search and filtering mechanisms. Now there's only one place to search, and we've added a tab bar to modify the scope of that search. Additionally, we've broken traditional Android paradigms here by placing the search view within the bottom sheet. Results and search are now co-located.

<section>
    <div class="container__image">
        <a target="_blank" href="https://photos.app.goo.gl/b4QXbuic7RbH7oF48"><img src="/images/wf_search_sm.png" loading="lazy" alt="Workforce Search UI"></a>
    </div>
</section>

</section>