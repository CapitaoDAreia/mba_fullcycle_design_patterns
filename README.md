# Describing the patterns used on the application

## GoF Adapter:
- Imagine that we need a controller in our application to receive HTTP requests, and to do this, we will use some framework. Now, is it correct to couple the controller to the framework? Assuming not, how can we decouple the controller from the framework? It's simple, if my controller expects to receive an interface, I can write an Adapter that implements that interface and encapsulates the execution of my framework. See an example in the diagram below:

<img src="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_ee7f2c572f5ca181617ec69377afea24.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1711292860&Signature=kmJvXo%2BqZjZzrOf6bUT2lmvKxKQ%3D">

## GoF Strategy:
- Imagine that we need to generate invoices. We have several types of invoices that can be generated, each based on a different parameter. A big method with lots of if/else would be the most common approach to come to mind, but we have a cleaner and safer way to do this. We can define a factory that will create our invoice generator from a string. See an example in the diagram below:

<img src="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_50d10ca122036fc38c8b9968d6544a0b.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1711297558&Signature=UySIzuWTuInVUFy2oXnwJwcBmaM%3D">