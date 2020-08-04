# Bitnami-Covid-19-API

       ___ _ _                   _
      | _ |_) |_ _ _  __ _ _ __ (_)
      | _ \ |  _| ' \/ _` | '  \| |
      |___/_|\__|_|_|\__,_|_|_|_|_|

  *** Welcome to the Bitnami MEAN 4.2.8-28                              ***
  *** Documentation:  https://docs.bitnami.com/aws/infrastructure/mean/ ***
  ***                 https://docs.bitnami.com/aws/                     ***
  *** Bitnami Forums: https://community.bitnami.com/                    ***

# Pushing Changes to GitHub

# Adding 
git add .
git rm --cached source_data/COVID-19 -f

# Staging
git stage .
git rm --cached source_data/COVID-19 -f

# Commiting
git commit

# Pushing
git push

# Access The Server Using An SSH Tunnel
 ssh -N -L 8888:127.0.0.1:3000 -i "~/projects/keys/AWS_Key_Walter.pem" bitnami@ec2-34-232-65-80.compute-1.amazonaws.com
