# pillar-base [![Dependency Check](http://img.shields.io/david/ryanj/pillar-base.svg)](https://david-dm.org/ryanj/pillar-base)
*A basic pillarjs example repo - Learn more at https://pillarjs.github.io/*

[![Launch on OpenShift](https://launch-shifter.rhcloud.com/launch.svg)](https://openshift.redhat.com/app/console/application_type/custom?cartridges%5B%5D=nodejs-0.10&initial_git_url=https%3A%2F%2Fgithub.com%2Fryanj%2Fpillar-base.git&name=pillarjs)

To deploy a clone of this application using the [`rhc` command line tool](http://rubygems.org/gems/rhc):

    rhc app create pillar nodejs-0.10 --from-code=https://github.com/ryanj/pillar-base.git
    
Or [link to a web-based clone+deploy](https://openshift.redhat.com/app/console/application_type/custom?cartridges%5B%5D=nodejs-0.10&initial_git_url=https%3A%2F%2Fgithub.com%2Fryanj%2Fpillar-base.git) on [OpenShift Online](http://OpenShift.com) or on [your own OpenShift cloud](http://openshift.github.io): 

    https://openshift.redhat.com/app/console/application_type/custom?cartridges%5B%5D=nodejs-0.10&initial_git_url=https%3A%2F%2Fgithub.com%2Fryanj%2pillar-base.git

# OpenShift V3 / Kubernetes

You'll need the `oc` command line tool to install this project in a Docker-based OpenShift environment.  The cli tool binary is available via the [`openshift/origin` releases page](https://github.com/openshift/origin/releases/).

Use [vagrant](http://openshift.org/vm) or [ansible](https://github.com/openshift/openshift-ansible) to setup your own deployment of OpenShift, then use `oc login` to authenticate. These instructions assume that a basic [nodejs builder image](https://github.com/openshift/origin/tree/master/examples/image-streams) has already been made available in the `openshift` project by an admin.

Build and deploy the application from the command line using the `oc` command line tool, and a nodejs builder image:

    oc new-app openshift/nodejs~https://github.com/ryanj/pillar-base

## Local Development
Install dependencies:

```bash
npm install
```

Start a local server:

```bash
npm start
```

## License: MIT
